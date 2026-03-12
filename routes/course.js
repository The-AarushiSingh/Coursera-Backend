const {Router}=require("express");
const courseRouter=Router(); //Router is a fxn

courseRouter.post("/purchaseCourse",function(req,res){
    res.json({
        message:" "
    })
})

courseRouter.get("/preview",function(req,res){
    res.json({
        message:" "
    })
})

module.exports={
    courseRouter:courseRouter
}