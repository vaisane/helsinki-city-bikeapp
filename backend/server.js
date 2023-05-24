import { connect } from 'mongoose'
import express from 'express'
import cors from 'cors'
import journeyRouter from './routes/journeys.js'
import stationRouter from './routes/stations.js'
const app = express()

connect("mongodb://127.0.0.1:27017/solita")
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
