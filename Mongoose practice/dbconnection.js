const mongoose = require("mongoose")
async function  dbconnect(){
    try{
        await mongoose.connect("mongodb+srv://rohanbelsare_db_user:Rohan123@mystrypage.ordiwq2.mongodb.net/mongoose_practice")
        console.log("MongoDb connected");
    }
    catch (error){
        console.log("MongoDB connection error: ", error);
        process.exit(1);
    };
}

module.exports = dbconnect;
dbconnect()


