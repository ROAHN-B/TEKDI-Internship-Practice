const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname,'crud');
const filePath = `${dirPath}/apple.txt`;
// fs.writeFileSync(filePath,'This is a simple text file');

// fs.readFile(filePath,(err,item)=>{
//     console.log(item)
// })

// fs.appendFile(filePath,'and file name is apple.txt',(err)=>{
//     if(!err){
//         console.log("File updated")
//     }
// })

// Rename a file
// fs.rename(filePath,`${dirPath}/fruit.txt`,(err)=>{
//     if(!err){
//         console.log("File is renamed")
//     }
// })

fs.unlinkSync(`${dirPath}/fruit.txt`)