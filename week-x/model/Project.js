const mongoose = require('mongoose')

const ProjectSchema = mongoose.Schema({
    Id: {type: Number, required: true},
    Detail: {type: String, required: true}
})


module.exports = mongoose.model('ProjectSchema', ProjectSchema,'projectSchema')