const bcrypt = require('bcrypt');

async function Encrypt(password){
    const saltRounds=10;
    const hashedPassword = await bcrypt.hash(password,saltRounds);
    return hashedPassword
}


async function compare(inputpassword, hashedPassword){
    const isMatch = await bcrypt.compare(inputpassword,hashedPassword)
    if(isMatch){
        console.log("Password matched");
    }
    else{
        console.log("Password didn't matched");
    }
}

async function main(){
    const  password  = 'myPassword123';
    const  hash  = await Encrypt(password)
    compare('myPassword123',  hash);
}

main()