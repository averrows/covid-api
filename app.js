const express = require('express')
const app = express()
const cors = require('cors')
const router = require('./apis/covid-data/route')
const cron = require('node-cron')
const axios = require("axios");

require('dotenv').config()
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

app.use('/api',router)

app.listen(process.env.DEVPORT, () => {
    console.log(`Run in port ${process.env.DEVPORT}`)
})

cron.schedule('59 23 * * *', async () => {
    await axios.post("http://localhost:3000/api/fetch")
}, {})
