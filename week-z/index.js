const express = require('express')
const bodyParser = require('body-parser')
const orderRoutes = require('./routes/order')

const app = express()
const port = process.env.PORT || "3030"

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(express.static(__dirname + '/public'));
app.use("/users", orderRoutes)

app.get('/', (req, res) =>{
    res.render('index.ejs');
})
app.listen(port, (err, res) => {
    if (err){
        console.log(err);
    } else {
        console.log("listening on port " + port)
    }
})


