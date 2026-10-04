// callbacks are not asynchronous but synchronous in nature
function asyncTask(cb){
    setTimeout(()=>{
        cb(null,'this is data from server')
    },0)
}

asyncTask((err,data)=>{
    if (err){
        throw err;
    }
    else{
        console.log("data",data);
    }
});