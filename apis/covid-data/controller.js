const {fetchCovidDataToJson} = require("../../utils/fetch_covid_data");
const {generateFileNameBasedOnTodayDate, generateFileName} = require("../../utils/generate_filename");
const {generateNowUTCDate} = require("../../utils/generate_date");

class CovidDataController{
    db
    dbDataPoint
    constructor(dbModel, dbDataPointModel) {
        this.db = dbModel
        this.dbDataPoint = dbDataPointModel
    }

    async fetchLeastData (_, res){
        const fileName = generateFileName(23,10,2021)
        console.log(fileName)
        try {
            const data = await fetchCovidDataToJson(fileName)
            // if data is still empty add it
            if (await this.db.countDocuments({}) === 0){
                await this.dbDataPoint.insertMany(data)
                const dataAdded = await this.dbDataPoint.find({})
                await this.db.insertMany(dataAdded.map((val) => {
                    return {
                        ...val,
                        Logs: [{
                            dataPointId: val._id,
                            updatedAt: generateNowUTCDate(),
                            message: "Initial data point inserted",
                        }]
                    }
                }))
            } else {
                await this.dbDataPoint.find({}).forEach(
                    (val, i) => {
                        let valCompare = val
                        delete valCompare["_id"]
                        if (valCompare === data[i]){
                            // DO NOTHING
                        } else {
                            this.dbDataPoint.insertOne(val)
                                .then((newData) => {
                                    this.db.update({
                                        Combined_Key: val["Combined_Key"]
                                    }, {
                                        $push: {
                                            Logs: {
                                                dataPointId: newData._id,
                                                updatedAt: generateNowUTCDate(),
                                                message: `Updated to ${newData}`,
                                            }
                                        }
                                    })
                                })

                        }
                    }
                )
            }

            return res.status(200).json({
                message: "Data fetched"
            })
        } catch (e) {
            console.log(e.message)
            return res.status(400).json({
                message:"Fail"
            })
        }

    }
}

module.exports = CovidDataController