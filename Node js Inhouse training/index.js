const express = require("express");
const morgan = require("morgan")
const multer = require("multer")
const path = require('path')
const port = 3000;
const app = express();
app.use(express.json())
app.use(morgan('combined')) // used for logging
app.use(express.urlencoded({extended: true}))

const storage = multer.diskStorage({
  destination: function(req,fileURLToPath,cb){
    cb(null,"uploads/");
  },
  filename: function(req,file,cb){
    const uniquesuffix = Date.now() + "-" +Math.round(Math.random() *1E9);
    cb(null, file.fieldname + "-" + uniquesuffix+ path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage })

const fs = require("fs");
if (!fs.existsSync("./uploads")){
  fs.mkdirSync("./uploads");
}

const books= [
  {"id":1,"name":"Hall of Fame"},
  {"id":2,"name":"Wings of fire"}
]



app.get("/books",(req,res)=>{
  console.log("Body ===> ", req.body);
  res.json(books)
})

app.post('/upload',upload.single('file'), (req,res)=>{
  if(!req.file){
    return res.status(400).json({message:"No file to upload! "})
  }
  res.json({message:"File uploaded succesfully", file: req.file});
})

app.post("/books",(req,res)=>{
  console.log(req.body);
  const newBook={id:books.length+1,...req.body};
  books.push(newBook);
  res.status(201).json(books);
})

app.put("/books/:id",(req,res)=>{
  const bookId = parseInt(req.params.id);
  const bookIndex = books.findIndex(book => book.id==bookId);
  if (bookIndex !==-1){
    books[bookId] = {id:bookId,...req.body};
    res.json(books[bookIndex]);
  }
  else{
    res.status(404).json({
      message:"Book ID not found!"
    })
  }
})

app.delete("/books/:id", (req,res)=>{
  const bookId = parseInt(req.params.id);
  const bookIndex = books.findIndex(book=> book.id === bookId);
  
  if (bookIndex === -1){
    return res.status(404).json({"message":"Book ID not found!"});
  }
  books.splice(bookId,1)
  res.json({
    message:"Book deleted!"
  })
})


//middeware
const logger=((req,res,next)=>{
  console.log(`Data received: ${req.method} ${req.url}`);
  next();
})

app.use(express.static(path.join(__dirname,"public")));

app.get('/static/html',(req,res)=>{
  res.sendFile(path.join(__dirname,"public","index.html"))
})

app.get('/static/css',(req,res)=>{
  res.sendFile(path.join(__dirname,"public","style.css"))
})

app.get('/static/javascript',(req,res)=>{
  res.sendFile(path.join(__dirname,"public","script.js"))
})
app.use(logger)


app.listen(port,()=>{
  console.log("The serve is live on: http://localhost:3000");
})