const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect('mongodb+srv://' + process.env.WALTERUSER + ':' + process.env.WALTERPASSWORD +'@cluster0.xagaq.mongodb.net/SysopsPractice?retryWrites=true&w=majority', {useNewUrlParser: true , useUnifiedTopology: true})
.then(()=>{
    console.log('connected to MONGODB')
})
.catch(()=>{
    console.log('something is wrong try again!XD')
})