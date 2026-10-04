// const promise = new Promise((resolve,reject)=>{
//     console.log("Async task execution")
//     if (false){
//         const person = { name:'Rohan'}
//         resolve(person);
//     }
//     else{
//         const err = { errorCode:'1001'}
//         reject(err);
//     }
// });

// promise.then(
//     (val)=>{
//         console.log(val)
//     },
// ).catch(()=> console.log('failed'))
// . finally(()=>{
//     console.log('clean up')
// })

// promise chaining
// const p = Promise.resolve('Done');
// p.then((val)=>{
//     console.log(val)
//     return "done 2"
// }).then((val)=>{
//     console.log(val)
//     return "done 3"
// }).then((val)=> console.log(val))


const makeApiCall = (time)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("This API executed in: "+ time)
        },time)
    });
};

let multiApiCall = [makeApiCall(1000),makeApiCall(2000),makeApiCall(3000)]
Promise.all(multiApiCall).then((values)=>{
    console.log(values)
})