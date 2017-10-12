require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
mongoose.Promise = global.Promise

//create a new app using express
const app = express()


mongoose.connect(process.env.MONGODB_URI, { useMongoClient: true })
const connection = mongoose.connection

connection.on('connected', () => {
    console.log('Mongoose connected successfully')
})

connection.on('error', (err) => {
    console.log('Mongoose default conneciton error: ' + err)
})

//inject middleware
app.use(bodrParser.json())

app.get('/', (req, res) => {
    res.send('Hello World')
})

const port = process.env.port || 3000
app.listen(port, () => {
    console.log('App listening on port: ', port)
})