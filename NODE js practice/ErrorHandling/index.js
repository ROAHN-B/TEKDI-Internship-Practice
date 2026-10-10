const path = require("path")
const filepath = "C:\\Users\\rohan\\OneDrive\\Desktop\\TEKDI internship practice\\NODE js practice\\ErrorHandling\\files\\sample.txt";

// dirname
// console.log(path.dirname(filepath))
// console.log(__dirname)

// // base name 
// console.log(path.basename(filepath))

// // extention
// console.log(path.extname(filepath))

// const samplefile = 'sample.txt'
// console.log(path.join(path.dirname(filepath),samplefile))

const fs = require("fs");
// console.log(fs)

fs.readFile(filepath, "UTF-8", (err,data)=>{
    if(err){
        throw err;
    }
    console.log(data.toString());    
})

