const stationServices = require('../services/stations')

const getAllStationsController = async (req, res) => {
    const page = req.query.page - 1 || 0
    const limit = req.query.limit || 25
    
    try {
        res.json(await stationServices.getAllStations(page, limit))
    }
    catch (error) {
        console.log(error)
    }
}

const stationSearchController = async (req, res) => {
    const page = req.query.page - 1 || 0
    const limit = req.query.limit || 25
    const searchText = req.query.searchText || ""

    try {
        res.json(await stationServices.stationSearch(page, limit, searchText))
    }
    catch (error) {
        console.log(error)
    }
}

module.exports = {getAllStationsController, stationSearchController}