import mongoose from "mongoose";
import bcrypt from "bcryptjs"

const userSchema= new mongoose.Schema({
  name:{type:String,required:true},
  email:{type:String,required:true},
  password:{type:String,required:true}
})

userSchema.pre("save",async function (next){
if(this.isModified("password")){
    console.log(this.password)
    this.password= await bcrypt.hash(this.password,10)
    console.log(this.password)
  }
  next()
}) 



export const userModel=mongoose.model("users",userSchema)
