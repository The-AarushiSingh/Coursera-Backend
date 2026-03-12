const {Router}=require("express");
const adminRouter=Router();

adminRouter.use(adminMiddleware);
adminRouter.post("/signup",function(req,res){
    res.json({
        message:" "
    })
})

adminRouter.post("/login",function(req,res){
    res.json({
        message:" "
    })
})
adminRouter.post("/course",function(req,res){
    res.json({
        message:" "
    })
})
adminRouter.get("/course/bulk",function(req,res){
    res.json({
        message:" "
    })
})
adminRouter.put("/course",function(req,res){
    res.json({
        message:" "
    })
})
module.exports={
    adminRouter:adminRouter
}