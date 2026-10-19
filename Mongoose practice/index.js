const mongoose = require("mongoose")
const dbconnect = require("./dbconnection")
const userSchema = new mongoose.Schema({
    name : {type:String, require:true},
    email: {type:String, require:true},
    age: {type:Number,require:true},
    createAt: {type: Date, default: Date.now}
});

const User = mongoose.model('User',  userSchema);

dbconnect();
const newUser = new User({
    name: "Rohan",
    email:"rohanbelsare@gmail.com",
    age:21
}) 
newUser.save();

// read users
User.find({age:{$gte:19}})