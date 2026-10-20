const express= require('express');
const mongoose = require('mongoose');
const dbconnect = require('./dbconnection');
const User = require('./User');

const app= express();
app.use(express.json());

// connect db
dbconnect();

app.get("/",(req,res)=>{
    res.json({
        message:"Api working"
    })
})

app.post("/",async(req,res)=>{
    try{
        const {name,email,age} = req.body;
        const newUser = new User({name,email,age});

        await newUser.save();
        res.status(201).json({message:"New User saved succesfully", User: newUser})
    }
    catch (err){
        console.log("Error occured: ",err);
    }

})

app.get("/all-users",async(req,res)=>{
    try{
        const users = await User.find();
        res.json(users);
    }
    catch (error){
        console.log("Error occured: ", error)
    }
})

app.put("/update-user",async(req,res)=>{
    try {
        const { email } = req.body
        const updatedUser = await User.updateOne(
            {email:email},
            {$set:{age:25}
        })
        res.json(updatedUser)
    } catch (error) {
        
    }
})

app.listen(3000,()=>{
    console.log("Server running at: http://localhost:3000");
})
