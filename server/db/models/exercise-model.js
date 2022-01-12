const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Exercise = new mongoose.Schema(
    {
        name: { type: String, required: true},
        weight: { type: Number, required: true},
        reps: { type: Number, required: true},
        // current1RM: { type: Number, required: true},
        // projected1RM: { type: Number, required: true},
        // original1RM: { type: Number, required: true},
    },
    {timestamps: true},
)

module.exports = mongoose.model('movies', Movie)