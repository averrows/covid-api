require('../db/mongodb')
const mongoose = require('mongoose')
const schema = new mongoose.Schema({
    FIPS: String,
    Admin2: String,
    Province_State: String,
    Country_Region:String,
    Last_Update: Date,
    Lat: Number,
    Long_: Number,
    Confirmed: Number,
    Deaths: Number,
    Recovered: Number,
    Active: Number,
    Combined_Key: String,
    Incident_Rate: Number,
    Case_Fatality_Ratio: Number
})
module.exports = mongoose.model('CovidDataPoint', schema)