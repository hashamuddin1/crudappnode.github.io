const express = require('express');
const app = express();
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require("body-parser");
const path = require("path");
const connectDB = require("./server/database/connection");


dotenv.config({ path: 'config.env' })
const port = process.env.PORT || 8080

//log request
app.use(morgan('tiny'));

//mongodb connection
connectDB();

//parse request to body-parser
app.use(bodyparser.urlencoded({ extended: true }))


//load assets
app.use("/css", express.static(path.resolve(__dirname, "assets/css")))
app.use("/img", express.static(path.resolve(__dirname, "assets/img")))
app.use("/js", express.static(path.resolve(__dirname, "assets/js")))

//set value engine
app.set("view engine", "ejs")

//load router
app.use('/', require('./server/routes/router'))

// app.get('/', (req, res) => {
//     res.render('index');
// })

// app.get('/add-user', (req, res) => {
//     res.render('add_user');
// })

// app.get('/update-user', (req, res) => {
//     res.render('update_user');
// })


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})