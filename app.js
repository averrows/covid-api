const express = require('express')
const app = express()

require('dotenv').config()
app.use(express.urlencoded({extended: true}))
app.use(express.json())


app.listen(process.env.DEVPORT, () => {
    console.log(`Run in port ${process.env.DEVPORT}`)
})