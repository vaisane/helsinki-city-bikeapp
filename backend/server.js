const express = require('express')
const mongoose = require('mongoose')
const app = express()


// Database connection
mongoose.connect("mongodb://127.0.0.1:27017/solita")
    .then(() => {
        console.log("Connected to MongoDB")
    })
    .catch(error => {
        console.log(error)
    })

app.listen(3000, () => {
    console.log("Listening to port 3000")
})
