// const error = new Error("Something went wrong")
// console.log(error.stack);
// console.log(error.message)

const {CustomError} = require('./CustomError')


// try{
//     doSomething()
// }
// catch(e){
//     console.log("error: ", e)
// }

function doSomething(){
    console.log("I am from do something.")
    // const data = fetch("http://localhost:300/")
    return data
}

// uncaught exception

// process.on("Uncaught exception",(err)=>{
//     console.log("There was an uncaught exception")
//     process.exit(1);
// })



// Exceptions with proomises
// const promise = new Promise((resolve,reject)=>{
//     if(true){
//         resolve(doSomething());
//     }
//     else{
//         reject(doSomething())
//     }
// })

// promise.then((val)=>{
//     console.log(val)
// }).catch((err)=>{
//     console.log("Error occured");
//     console.log(err);
// })


// Error handling using Async/Await
const SomeFunction = async () =>{
    try{
        await doSomething();
    }
    catch (err){
        throw new CustomError(err.message)
    }
}

SomeFunction();