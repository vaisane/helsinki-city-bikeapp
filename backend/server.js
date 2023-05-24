import { connect } from 'mongoose'
import express from 'express'
import cors from 'cors'
import journeyRouter from './routes/journeys.js'
import stationRouter from './routes/stations.js'
import dotenv from 'dotenv'

const app = express()
dotenv.config()

connect(process.env.MONGODB_URI)
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
