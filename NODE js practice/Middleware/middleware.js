//Middleware
module.exports =  reqFilter=(req,res,next)=>{
    if (!req.query.age){
        res.send("Please provide your age");
    }

    else if (req.query.age<18){
        res.send("Your are under age for this website");
    }
    else{
        next();
    }
}