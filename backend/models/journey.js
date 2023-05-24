import { Schema, model } from 'mongoose'

const journeySchema = new Schema({
    "Departure": String,
    "Return": String,
    "Departure station id": Number,
    "Departure station name": String,
    "Return station id": Number,
    "Return station name": String,
    "Covered distance (m)": Number,
    "Duration (sec)": Number
})

const Model = model('journey', journeySchema)

export default Model