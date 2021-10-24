const router = require('express').Router()
const CovidDataController = require('./controller')

const model = require('../../models/CovidDataModel')
const modelDataPoint = require('../../models/CovidDataPointModel')

const controller = new CovidDataController(model, modelDataPoint)

router.post('/fetch',  controller.fetchLeastData.bind(controller))
router.post('/')

module.exports = router