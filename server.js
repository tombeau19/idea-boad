require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const UsersController = require('./routes/UsersController')
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
app.use(express.static(`${__dirname}/client/build`))
app.use(bodyParser.json())

app.use('/api/users', UsersController)

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/client/build/index.html`)
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log('App listening on PORT: ', PORT)
})