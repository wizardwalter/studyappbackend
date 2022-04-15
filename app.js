var express = require("express");
var port = 8080;
const cors = require ("cors");
const passport = require("passport");
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
require('./config/db._connect');
require("dotenv").config();


//routers
const questionsRoute = require('./routes/question.route');


var app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(bodyParser.json());
// app.use(cors({
//   origin: ['http://localhost:3000'],
//   methods: ['POST', 'PUT', 'GET', 'OPTIONS', 'HEAD'],
//   credentials: true
// }));
app.use(passport.initialize());
app.use(cookieParser());

app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers",
    "Orgin, X-Requested-With, Content-Type, Accept, authorization"
    );
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS")
    next();
});

//routers
app.use('/questions', questionsRoute)


app.listen(process.env.PORT || port, () => {
  console.log(`Server is listening on port: ${port}`);
});
