const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name : {type:String, require:true},
    email: {type:String, require:true,unique:true},
    age: {type:Number,require:true},
    createAt: {type: Date, default: Date.now}
});

const User = mongoose.model('User',  userSchema,"users");

module.exports= User;

