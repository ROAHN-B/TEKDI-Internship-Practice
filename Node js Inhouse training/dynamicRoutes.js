const express = require('express')
const  userRoutes  = require('./routes/userRoutes');
const  bookRoutes  = require('./routes/bookRoutes');
 
const app = express();

app.get('/user/:id',(req,res)=>{
    res.send(`Fetching data of user id: ${req.params.id}`);
})

//dynamic routing , taking queries and handling it.
app.get("/user",(req,res)=>{
    const {name,age} = req.query;
    if(name || age){
        res.send(`Filtering users by name: ${name || 'N/A'} and age: ${age || "N/A"}`)
    }
    else{
        res.send("Fetching all users")
    }
})

app.use(express.json());
app.use('/users',  userRoutes);
app.use('/books',  bookRoutes);

app.listen(3000,()=>{
    console.log("Server is listening to port: http://localhost:3000");
})