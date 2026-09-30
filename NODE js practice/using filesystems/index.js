const fs  = require('fs');
const path = require('path');

const dirPath = path.join(__dirname,'files')
// console.warn(dirPath)
// for (i=0 ; i<5;i++){
//     fs.writeFileSync(dirPath+`File${i+1}.txt`, `This is file number ${i+1}`)
// }

fs.readdir(dirPath,(err,files)=>{
    files.forEach((item)=>{
        console.log("filename is : ",item)
    })
})