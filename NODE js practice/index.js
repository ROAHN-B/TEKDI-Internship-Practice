const http= require('http');
const colors = require("colors")

const dataControl=  (req,res) =>{
  res.write("<h1>This is rohan belsare</h1>");
  res.write("<h1>This is red color")
  console.log("server reloaded")
  res.end();
};

http.createServer(dataControl).listen(4500)

