console.log('task 1')
function sleep(millis){
    console.log("Function in progress");
    setTimeout(()=>{
        console.log("Async execution");
    },millis);
}

sleep(2000)

console.log('task 2')