import mongoose from "mongoose";


const databaseConnection=async()=>{
  try {
    await mongoose.connect(process.env.URL)
    console.log("db connected via mongoose")
  } catch (error) {
console.log(error);
    
  }
}


export default databaseConnection
