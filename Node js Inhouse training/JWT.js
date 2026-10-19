const jwt = require("jsonwebtoken")

async function jwtTokenGenerator(user){
    const payload = {id:user.id,username:user.username}
    const secret_key = "buguygv9834f89h9rg"
    const token = jwt.sign(payload,secret_key,{expiresIn:"1h"})
    return token
}


function verifyToken(token){
    const secret_key = "buguygv9834f89h9rg"
    try {
        const decoded = jwt.verify(token,secret_key)
        console.log("Decoded token: ", decoded)
    } catch (error) {
        console.log("Error: ", error)
    }
}



async function main(){
    const token= await jwtTokenGenerator({id:1,username:"Rohan"})
    console.log("Generated Token: ", token)
    const verify= verifyToken(token)
}
main()