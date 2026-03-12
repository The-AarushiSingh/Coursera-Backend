const {Router}=require("express");

const userRouter=Router();

userRouter.post("/signup",function(req,res){
    res.json({
        message:" "
    })
})

userRouter.post("/login",function(req,res){
    res.json({
        message:" "
    })
})

userRouter.get("/seePurchased",function(req,res){
    res.json({
        message:" "
    })
})

module.exports={
    userRouter:userRouter
}