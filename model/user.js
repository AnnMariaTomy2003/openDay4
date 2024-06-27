
const mongoose = require('mongoose')
const schema = mongoose.Schema({
    Name:String,
    Age:Number,
    Place:String,
    Phone:Number
})

// creating collection

const userModel = mongoose.model("user",schema);
module.exports=userModel;