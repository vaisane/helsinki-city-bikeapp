const express = require('express')
const router = express.Router()
const stationController = require('../controllers/stations')

router.get("/", stationController.getAllStationsController)
router.get("/search", stationController.stationSearchController)

module.exports = router