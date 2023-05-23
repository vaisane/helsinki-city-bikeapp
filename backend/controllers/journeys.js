const journeyServices = require('../services/journeys')

const getAllJourneysController = async (req, res) => {
    const page = req.query.page - 1 || 0
    const limit = req.query.limit || 25
    
    try {
        res.json(await journeyServices.getAllJourneys(page, limit))
    }
    catch (error) {
        console.log(error)
    }
}

module.exports = {getAllJourneysController}