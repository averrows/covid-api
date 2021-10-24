/**
 * This model is intended to have unique region, it contain the logs
 * that contain when is the latest update and the mongodb _id of the latest data
 * from CovidDataModel
 */

require('../db/mongodb')
const mongoose = require('mongoose')
const {generateNowUTCDate} = require("../../utils/generate_date");
const schema = new mongoose.Schema({
    Province_State: String,
    Country_Region:String,
    Combined_Key: String,
    Logs: {
        type: Array,
        default:[],
    }
})
module.exports = mongoose.model('CovidData', schema)