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


module.exports = {getAllJourneys}


