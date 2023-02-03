const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Movie = require('../models/movie')
const dotenv = require('dotenv')

dotenv.config()

mongoose.connect(process.env.DB_NAME,
    {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
})

router.post('/movie', function (req, res) {
   Movie.create(req.body, (err, result) => {
    if (err) {
        console.log(err);
    } else {
        res.send("Movie added successfully")
    }
   })
})

router.get('/getMovies', function (req, res) {
    Movie.find({}, (err, result) => {
     if (err) {
         console.log(err);
     } else {
         res.send(result)
     }
    })
 })
 router.get('/getMovies', function (req, res) {
    Movie.findOne({name: req.query.name}, (err, result) => {
     if (err) {
         console.log(err);
     } else {
         res.send(result)
     }
    })
 })

 router.get('/getMoviesByRatings', function (req, res) {
    Movie.find((err, result) => {
     if (err) {
         console.log(err);
     } else {
         res.send(result)
     }
    }).sort({rating:-1}).limit(3)
 })
 router.get('/getMoviesByAchievements', function (req, res) {
    Movie.find({achievements: req.body.achievements},(err, result) => {
     if (err) {
         console.log(err);
     } else {
         res.send(result)
     }
    })
 })

 router.post('/updateMovieByS', (req, res) => {
    Movie.findOneAndUpdate({ "name": req.body.name }, {
        $set: {
            achievements: "Super Hit"
        }
    }, (err, result) => {
        if (err) {
            res.send({ message: "db error occured while inserting data", error: err })
        } else {
            res.send("Movie info updated successfully")
        }
    })
})

router.post('/updateMovieBySD', (req, res) => {
    Movie.findOneAndUpdate({ "name": req.body.name }, {
        $set: {
            achievements: "Super Duper Hit"
        }
    }, (err, result) => {
        if (err) {
            res.send({ message: "db error occured while inserting data", error: err })
        } else {
            res.send("Movie info updated successfully")
        }
    })
})
module.exports = router