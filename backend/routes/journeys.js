const express = require('express')
const router = express.Router()
const journeyController = require('../controllers/journeys')

router.get("/", journeyController.getAllJourneysController)
router.get("/starting-station", journeyController.countJourneysStartingFromStationController)
router.get("/ending-station", journeyController.countJourneysEndingToStationController)
router.get("/search/departure", journeyController.searchJourneysByDepartureStation)
router.get("/search/return", journeyController.searchJourneysByReturningStation)

module.exports = router