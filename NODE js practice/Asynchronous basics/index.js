// let a=10
// let b=0

// setTimeout(()=>{
//     b=30;
//     console.log("assigned 30 to b ") 
// },2000)

// console.log(a+b)

// Problem  - if a function changes a variable but its execution is late the change
// of the variable will be applied as the line after that will be executed first

let a=10
let b=0

let waitingData = new Promise((resolve,reject)=>{  // Promise is used so that this function wait for the promissed data to 
    setTimeout(()=>{
        resolve(30);
        console.log("assigned 30 to b ") 
    },2000)
})

waitingData.then((data)=>{
    console.log(a+data);
})
