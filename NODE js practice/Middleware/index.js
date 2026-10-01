const express = require('express')
const app = express();
const reqFilter = require('./middleware')
const route = express.Router();

route.use(reqFilter)
app.get('/',(req,res)=>{
    res.send("Welcome to Home page")
});

route.get('/about',(req,res)=>{ // middleware can be applied on a single route by passing the middleware function as a parameter in the route
    res.send("Welcome to About page")
});

route.get('/users',(req,res)=>{
    res.send("Welcome to users page")
});

app.use('/',route);


app.listen(5000)