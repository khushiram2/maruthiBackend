import express from "express"
import * as dotenv from "dotenv";
import databaseConnection from "./connection/databaseConnection.js";
import {authRouter} from "./routes/authRoutes.js"
dotenv.config()

await databaseConnection()
const app= express()
app.use(express.json())
app.use("/auth",authRouter)
app.get("/",(req,res)=>{
res.send("working fine")
})






app.listen(process.env.PORT,()=>console.log(`app started on http://localhost:${process.env.PORT}`))
