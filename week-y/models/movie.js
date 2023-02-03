const mongoose = require('mongoose');


const MovieSchema = mongoose.Schema({
    name: { type: String, required: true},
    genre: { type: String, required: true},
    rating: { type: Number, required: true},
    language: { type: String, required: true},
    achievements: { type: String}

})


module.exports = mongoose.model('Movies',MovieSchema,'Movies')