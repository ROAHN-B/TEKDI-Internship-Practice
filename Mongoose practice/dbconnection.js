const mongoose = require("mongoose")
const dbconnect = async()=>{
    try{
        await mongoose.connect("mongodb+srv://rohanbelsare_db_user:Rohan123@mystrypage.ordiwq2.mongodb.net/")
        console.log("MongoDb connected");
    }
    catch (error){
        console.log("MongoDB connection error: ", error);
        process.exit(1);
    };
}

export default  dbconnect();


