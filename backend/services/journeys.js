const Journey = require('../models/journey')

const getAllJourneys = async (page, limit) => {
    const [journeys, totalItems] = await Promise.all([
        Journey.find().limit(limit).skip(page * limit),
        Journey.count({})
    ])
    return {"result": journeys, "totalPages": Math.ceil(totalItems / limit)}
}

const countStartingJourneys = async (stationId) => {
    const result = await Journey.count({"Departure station id" : stationId})
    if (!stationId) {
        throw new Error("Bad request")
    }
    return result
}

const countReturningJourneys = async (stationId) => {
    const result = await Journey.count({"Return station id" : stationId})
    if (!stationId) {
        throw new Error("Bad request")
    }
    return result

}

const journeySearchReturning = async (page, limit, searchText) => {
    const [journeys, totalItems] = await Promise.all([
        Journey.find({"Return station name": {$regex: `${searchText}`, $options: "i"}}).limit(limit).skip(page * limit),
        Journey.count({"Return station name": {$regex: `${searchText}`, $options: "i"}})
    ])
    return {"result": journeys, "totalPages": Math.ceil(totalItems / limit)}
}

const journeySearchDeparture = async (page, limit, searchText) => {
    const [journeys, totalItems] = await Promise.all([
        Journey.find({"Departure station name": {$regex: `${searchText}`, $options: "i"}}).limit(limit).skip(page * limit),
        Journey.count({"Departure station name": {$regex: `${searchText}`, $options: "i"}})
    ])
    return {"result": journeys, "totalPages": Math.ceil(totalItems / limit)}
}

module.exports = {
    getAllJourneys, 
    countReturningJourneys, 
    countStartingJourneys, 
    journeySearchReturning,
    journeySearchDeparture
}


