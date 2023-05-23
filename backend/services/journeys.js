const Journey = require('../models/journey')

const getAllJourneys = async (page, limit) => {
    try {
        const [journeys, totalItems] = await Promise.all([
            Journey.find().limit(limit).skip(page * limit),
            Journey.count({})
        ])

        return {"result": journeys, "totalPages": Math.ceil(totalItems / limit)}
    } 
    catch (error) {
        console.log(error)
    }
}

const countJourneysStartingFromStation = async (stationId) => {
    try {
        const result = await Journey.count({"Departure station id" : stationId})
        return result
    }
    catch (error) {
        console.log(error)
    }
}

const countJourneysEndingToStation = async (stationId) => {
    try {
        const result = await Journey.count({"Return station id" : stationId})
        return result
    }
    catch (error) {
        console.log(error)
    }
}
module.exports = {getAllJourneys, countJourneysEndingToStation, countJourneysStartingFromStation}


