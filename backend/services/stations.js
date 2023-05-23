const Station = require('../models/station')

const getAllStations = async (page, limit) => {
    const [stations, totalItems] = await Promise.all([
        Station.find().limit(limit).skip(page * limit),
        Station.count({})
    ])

    return {"result": stations, "totalPages": Math.ceil(totalItems / limit)}
}

const stationSearch = async (page, limit, searchText) => {
    const [stations, totalItems] = await Promise.all([
        Station.find({Nimi: {$: `${searchText}`, $options: "i"}}).limit(limit).skip(page * limit),
        Station.count({Nimi: {$regex: `${searchText}`, $options: "i"}})
    ])

    return {"result": stations, "totalPages": Math.ceil(totalItems / limit)}
}
module.exports = {getAllStations, stationSearch}