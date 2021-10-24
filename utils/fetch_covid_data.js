const axios = require('axios')
const {URL} = require("url");
const {parseCSVToObject} = require("./csv_parser");

/**
 * fetch covid data to json and save it into the assets also
 * @param fileName
 * @return {Object}
 */
async function fetchCovidDataToJson(fileName){
    const covidDataUrl = new URL(`/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/${fileName}`, process.env.COVIDDATA_DIR).href
    console.log(covidDataUrl)
    try {
        const response = await axios.get(covidDataUrl);
        //404: Not Found if there is non existent yet
        if (response.data){
            console.log("KILL MEEE")
            const dataInObject = await parseCSVToObject(response.data)
            return dataInObject
        } else {
            console.log("AAAAAAAAA")
        }
    } catch (err) {

    }
}

module.exports = {fetchCovidDataToJson}