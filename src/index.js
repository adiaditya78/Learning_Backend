import connectDB from "./db/index.js";
import dotenv from 'dotenv'
import express from "express";
dotenv.config({path:"./.env"})

const app = express()
connectDB()
.then(()=>{
    app.on("Error", (error)=>{
        console.log("Error", error);
    })
    app.listen(process.env.PORT, ()=>{
        console.log(`⚙️  Application is running on port ${process.env.PORT} `);
    })
})
.catch((err)=>{
    console.log("⛓️‍💥 Database Connection Failed❗");
})










// //First Approach to connect DB
// import dotenv from "dotenv";

// dotenv.config({
//     path: './.env'
// });

// import mongoose from "mongoose";
// import { DB_Name } from "./constants.js";
// import express from 'express';
// const app  = express();
// ;(async()=>{
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URL}/${DB_Name}`)
//         app.on("error", (error)=>{
//             console.log("Error", error); 
//             throw error
//         })
//         app.listen(process.env.PORT, ()=>{
//             console.log("listen on port:",process.env.PORT);
//         })
//     }

//     catch(error){
//         console.log("Error:",error);
//         throw error
//     }
// })()