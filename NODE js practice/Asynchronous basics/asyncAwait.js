const prompt = require("prompt-sync")();

const userLogin = () =>{
    console.log("Enter Username and Password");
    let username = prompt("Enter username");
    let Password = prompt("Enter password");

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Performing User authentication");
            if (username=="Rohan" && Password=="rohan123"){
                resolve("User Authenticated")
            }
            else{
                reject("Authentication failed")
            }
        },1000)
    })
}

function goToHomepage(userAuthStatus){
    return Promise.resolve(`Go to homepage as: ${userAuthStatus}`)
}

// userLogin().then((response)=>{
//     console.log("Validate User")
//     return goToHomepage(response)
// })
// .then((userAuthStatus)=>{
//     console.log(userAuthStatus);
// })
// .catch((error)=>{
//     console.error(error)
// })

async function performTask(){
    try{
        const response = await userLogin();
        console.log("Validated User");
        const userAuthStatus=goToHomepage(response)
        console.log(userAuthStatus)
    } catch(error){
        console.log(error)
    }
}

performTask();