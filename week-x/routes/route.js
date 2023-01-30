const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Employee = require('../model/Employee')
const Project = require('../model/Project');
const dotenv = require('dotenv')

dotenv.config()

mongoose.connect(process.env.DB_NAME
   ,
    {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
})

router.post('/employees', function (req, res) {
    Employee.create(req.body, (err, result) => {
     if (err) {
        console.log(err);
     } else {
        res.send('employee data added')
     }
    })
})

router.post('/project', function (req, res) {
   Project.create(req.body, (err, result) => {
    if (err) {
       console.log(err);
    } else {
       res.send('project details added')
    }
   })
})

router.get('/getEmployees', (req, res) => {
   Employee.find({}, (err, result) => {
      if (err) {
         console.log(err);
      } else {
         res.send(result);
      }
   })
})

router.get('/getEmployee/:Id', (req, res) => {
   Employee.find({Id: req.params.Id}, (err, result) => {
      if (err) {
         console.log(err);
      } else {
         res.send(result);
      }
   })
})

router.get('/getProjects', (req, res) => {
   Project.find({}, (err, result) => {
      if (err) {
         console.log(err);
      } else {
         res.send(result);
      }
   })
})

router.get('/getProject/:Id', (req, res) => {
   Project.find({Id: req.params.Id}, (err, result) => {
      if (err) {
         console.log(err);
      } else {
         res.send(result);
      }
   })
})

module.exports = router