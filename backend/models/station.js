import { Schema, model } from 'mongoose'

const stationSchema = new Schema({
    "FID": Number,
    "ID": Number,
    "Nimi": String,
    "Namn": String,
    "Name": String,
    "Osoite": String,
    "Adress": String,
    "Kaupunki": String,
    "Stad": String,
    "x": String,
    "y": String,
    "Operaattori": String,
    "Kapasiteetti": Number,
})

const Model = model('station', stationSchema)

export default Model