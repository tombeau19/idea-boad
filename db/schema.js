const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ideaSchema = new Schema({
    title: {
        type: String, 
        default: 'New Idea Title'
    },
    description: {
        type: String, 
        default: 'New Idea Description'
    },
    createdAt: {
        type: Date, 
        default: Date.now
    }
})

const userSchema = new Schema({
    userName: String,
    password: String,
    ideas: [ideaSchema]
})

const Idea = mongoose.model('Idea', ideaSchema)
const User = mongoose.model('User', userSchema)

module.exports = {
    Idea, User
}