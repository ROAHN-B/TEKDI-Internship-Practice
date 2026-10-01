const path = require('path')
const express = require('express')


const app = express();

const publicPath = path.join(__dirname,'public') // helps to access the path of the html files
//app.use(express.static(publicPath));

app.set('view engine','ejs'); // Set the view parameter
app.set('views','./views')

app.get("",(req,res)=>{
    res.sendFile(`${publicPath}/index.html`)
});

app.get("/about",(req,res)=>{
    res.sendFile(`${publicPath}/about.html`)
});

app.get("/home",(__,res)=>{
    res.sendFile(`${publicPath}/home.html`)
});

app.get('/profile',(req,res)=>{
    const user={
        name:'Rohan Belsare',
        email:'rohan@gamil.com',
        city:'Nagpur',
        skills:['Python','ReactJS','AWS']

    }
    res.render('profile',{user})
});

app.get('/login',(req,res)=>{
    res.render('login')
})














app.get('/*splat',(req,res)=>{
   res.status(404).sendFile(path.resolve(publicPath, 'nopage.html'));
});


app.listen(5000);