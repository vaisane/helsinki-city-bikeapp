const express = require('express')
const router = express.Router()
const journeyController = require('../controllers/journeys')

router.get("/", journeyController.getAllJourneysController)

module.exports = router