const bcrypt = require('bcrypt');
const  rateLimit  = require('express-rate-limit');
const express = require('express');
const jwt = require('jsonwebtoken')
const helmet = require("helmet")
const app = express();
app.use(helmet)

app.use(express.json())

const Users = [];
let refreshTokens = [];

const SECRET_KEY = "efjnwvlknwovjweovin"
const REFRESH_SECRET_KEY = "eviueivuedvucedfuvjcslikowe"

app.post('/register',async(req,res)=>{
    const {username,password} = req.body;
    const saltRounds = 10;
    const encodedPassword = await bcrypt.hash(password,saltRounds);
    Users.push({username, password:encodedPassword});
    res.json({
        message:"User registered succesfully"
    })
})

// app.post('/login',async(req,res)=>{
//     const secret_key = "efjnwvlknwovjweovin"
//     const {username,password} = req.body;
//     const user = Users.find(u=>u.username === username)
//     if(!user){
//         return res.status(404).json({message:"User not found!"})
//     }
//     const validatePassword = await bcrypt.compare(password,user.password);
//     if(!validatePassword){
//         return res.status(401).json({message:"Password is incorrect"})
//     }
//     const token = await jwt.sign({username}, secret_key, {expiresIn:'1h'});
//     res.json(token);
// })

app.post('/login',async(req,res)=>{
    const {username,password} = req.body;
    const user = Users.find(u=>u.username === username)
    if(!user){
        return res.status(404).json({message:"User not found!"})
    }
    const validatePassword = await bcrypt.compare(password,user.password);
    if(!validatePassword){
        return res.status(401).json({message:"Password is incorrect"})
    }

    const accessToken = await jwt.sign({username},SECRET_KEY,{expiresIn:"1h"});
    const refreshToken = await jwt.sign({username}, REFRESH_SECRET_KEY);

    refreshTokens.push(refreshToken)
    res.json({
        message:`access Token ${accessToken} refresh Token${refreshToken}`
    })
})

app.post('/token',(req,res)=>{
    const token = req.body;
    if(!token || !refreshTokens.includes(token)){
        res.status(403).json({
            message:"Forbidden acess"
        })
    }
    jwt.verify(token,REFRESH_SECRET_KEY,(err,user)=>{
        if(err)return res.status(403)
        const accessToken = jwt.sign({username:user.username}, SECRET_KEY,{expiresIn:"1h"})
    })
    res.json({accessToken});
})

const  limiter  = rateLimit({windowMs:  15 * 60 * 1000,  // 15  minutes
    max:  100,  // Limit  each IP to  100  requests  per windowMs
    message:  'Too  many  requests  from this  IP, please  try again  later.'});
    app.use(limiter);


app.listen(3000,()=>{
    console.log("Server is live at: http://localhost:3000");
})