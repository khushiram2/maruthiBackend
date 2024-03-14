import {userModel} from "../model/userModel.js"
import { genTokenFunction,verifyTokenFunction } from "../utils/tokenUtils.js";
import bcrypt from "bcryptjs";

export const registerController=async(req,res)=>{
  try {
   const {name,email,password}=req.body
   const user=await userModel.create({name,email,password})
   if(!user) return res.status(201).send({message:"user not registered try again"})
   delete user.password;
   const token=genTokenFunction(user)
    console.log(verifyTokenFunction(token))

    res.status(200).send({user,token,message:"user registered sucessfully"})
  } catch (error) {
    console.log(error)
    res.status(500).send("internal server error")
  }
}

export const loginController=async(req,res)=>{
try {
const {email,password}=req.body
const user=await userModel.findOne({email:email})
if(!user) return res.status(201).send({message:"user does not exist please register"})
const match=await bcrypt.compare(password,user.password)
if(!match) return res.status(201).send({message:"invalid credentials"})
    delete user.password
const token = genTokenFunction(user)
    res.status(200).send({data:{...user,token},message:"user logged in sucessfully"})
} catch (error) {
  console.log(error)
    res.status(500).send({message:"internal server error"})
}
}
