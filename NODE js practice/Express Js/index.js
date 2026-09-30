// Express JS is a framework of Node JS
const path = require('path')
const express = require('express')
const app = express();


// app.get(``,(req,res)=>{
//     console.log("Data sent by browser >>>",req.query.name)
//     res.send(`<h1>Hello This is home page. </h1>
//         <a href="/about">Go to about page</a>`);                    // res- server sends data to client
//                                                    // req- client sends data to server
// });

// app.get(`/about`,(req,res)=>{
//     res.send(`
//         <input type="text" placeholder=username/>
//         <button >click Me</button>
//         <a href="/">Home page</a>
//         `);
// });

// app.get("/help",(req,res)=>{
//     res.send({
//         "name":"Rohan",
//         "surname":"belsare",
//         "Age":21,
//         "College":"Walchand Institute of technology, solapur"
//     })
// })

const publicPath = path.join(__dirname,'public') // helps to access the path of the html files
//app.use(express.static(publicPath));

app.get("",(req,res)=>{
    res.sendFile(`${publicPath}/index.html`)
})

app.get("/about",(req,res)=>{
    res.sendFile(`${publicPath}/about.html`)
})

app.get("/home",(__,res)=>{
    res.sendFile(`${publicPath}/home.html`)
})

app.get('/*splat',(req,res)=>{
   res.status(404).sendFile(path.resolve(publicPath, 'nopage.html'));
})

app.listen(5000);