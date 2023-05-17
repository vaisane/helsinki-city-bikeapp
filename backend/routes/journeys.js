const express = require('express')
const router = express.Router()
const Journey = require("../models/journey")

router.get("/", async (req, res) => {
    try {
        const page = req.query.page - 1 || 0
        const limit = req.query.limit || 25

        const [result, totalItems] = await Promise.all([
            Journey.find().limit(limit).skip(page * limit),
            Journey.count({})
        ])
        res.status(200).json({"result": result, "totalItems": totalItems, "totalPages": Math.ceil(totalItems / limit)})
    } 
    catch (error) {
        res.status(500).send(error)
    }
})

module.exports = router