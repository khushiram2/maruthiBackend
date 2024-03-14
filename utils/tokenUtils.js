import jwt from "jsonwebtoken";


export const genTokenFunction=(payload)=>{
const token =jwt.sign({...payload},process.env.JWT_SECRET_KEY,{expiresIn:"1d"})
  return token
}

export const verifyTokenFunction=(token)=>{
const match =jwt.verify(token,process.env.JWT_SECRET_KEY)
  return match
}
