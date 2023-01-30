const mongoose = require('mongoose');


const EmployeeSchema = mongoose.Schema({
    Id: { type: Number, required: true },
    Name: { type: String, required: true},
    // CreatedAt: { type: Date, required: true}
})


module.exports = mongoose.model('Employee',EmployeeSchema,'employee')