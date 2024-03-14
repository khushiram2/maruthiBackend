import { userModel } from "../model/userModel.js";



export const isEmailUnique=async(req,res,next)=>{
  try {
    const {email}=req.body
    const user=await userModel.findOne({email:email})
    if(user) return res.status(201).send({message:"user already registred "})
    next()
  } catch (error) {
    console.log(error)
  }
}
