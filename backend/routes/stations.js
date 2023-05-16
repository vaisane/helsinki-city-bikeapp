const express = require('express')
const router = express.Router()
const Station = require("../models/station")

router.get("/", async (req, res) => {
    try {
        const page = req.query.page - 1 || 0
        const limit = req.query.limit || 50

        const [result, totalItems] = await Promise.all([
            Station.find().limit(50).skip(page * limit),
            Station.count({})
        ])
        res.status(200).json({"result": result, "totalItems": totalItems, "totalPages": Math.ceil(totalItems / limit)})
    } 
    catch (error) {
        res.status(500).send(error)
    }
})

module.exports = router