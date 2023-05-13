const express = require('express')
const router = express.Router()
const Station = require("../models/station")

router.get("/", async (req, res) => {
    try {
        const page = req.query.page - 1 || 0
        const limit = req.query.limit || 50
        const result = await Station.find().limit(50).skip(page * limit)
        res.status(200).json(result)
    } 
    catch (error) {
        res.status(500).send(error)
    }
})

module.exports = router