const Station = require('../models/station')

const getAllStations = async (page, limit) => {
    try {
        const [stations, totalItems] = await Promise.all([
            Station.find().limit(limit).skip(page * limit),
            Station.count({})
        ])

        return {"result": stations, "totalPages": Math.ceil(totalItems / limit)}
    } 
    catch (error) {
        console.log(error)
    }
}


module.exports = {getAllStations}