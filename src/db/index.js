import mongoose from "mongoose";
import { DB_Name } from "../constants.js";

const connectDB = async()=>{
    try{
        const connectionInstansce = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_Name}`)
        // console.log(connectionInstansce);
        
        console.log(`\n MongoDB connected !! DB Host: ${connectionInstansce.connection.host}`);
        
    }
    catch(error){
        console.log("MongoDB Connection error", error);
        process.exit(1); // Learn about it
    }
}
export default connectDB