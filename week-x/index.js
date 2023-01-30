const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const ERoutes = require('./routes/route');

dotenv.config()

const app = express();
const port = process.env.PORT || "3060"

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(ERoutes)


app.get('/', (req, res) => {
    res.send("it works lol.")
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})