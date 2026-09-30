console.log("Starting program")

setTimeout(()=>{
    console.log("0 seconds timeout ")
},0)

setTimeout(()=>{
    console.log("2 seconds delay")
},2000)

console.log("Completed the execution")

// All the functions  are stacked in API calls cause the setTimeout is a C++ library
