import { Router } from "express";
import { isEmailUnique } from "../middleware/authMiddelWare.js";
import { registerController,loginController } from "../controllers/authController.js";
const router=Router()
router.get("/test",(req,res)=>{
  res.send("router working fine")
})
router.post("/register",isEmailUnique,registerController)
router.post("/login",loginController)





export const authRouter=router
