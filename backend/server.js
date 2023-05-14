const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()

const stationRouter = require('./routes/stations')
const journeyRouter = require('./routes/journeys')

// Database connection
mongoose.connect("mongodb://127.0.0.1:27017/solita")
    .then(() => {
        console.log("Connected to MongoDB")
    })
    .catch(error => {
        console.log(error)
    })

app.use(cors())
app.use("/stations", stationRouter)
app.use("/journeys", journeyRouter)

app.listen(4000, () => {
    console.log("Listening to port 4000")
})
