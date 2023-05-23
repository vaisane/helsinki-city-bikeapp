const express = require('express')
const router = express.Router()
const journeyController = require('../controllers/journeys')

router.get("/", journeyController.getAllJourneysController)
router.get("/starting-station", journeyController.countJourneysStartingFromStationController)
router.get("/ending-station", journeyController.countJourneysEndingToStationController)

module.exports = router