import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app = express()
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true
}))


app.use(express.json({limit:"20kb"})) // json data into js object with restricted to 20KB

app.use(express.urlencoded({extended: true, limit:"20kb"})) // {extended: true, limit:"20kb"} optional extented is use when you have nested objects

app.use(express.static("public")) // Can access public files easily

app.use(cookieParser())
// app.get('/', (req, res)=>{
//     res.send("<h1> jho </h1>");
// });
// app.listen(process.env.PORT,()=>{
//     console.log(`listen on PORT ${process.env.PORT}`);
// });