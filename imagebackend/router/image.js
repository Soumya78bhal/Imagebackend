var express=require("express");
var router=require("express").Router();
const Images = require("../models/Images");

router.post("/save",async (req,res)=>{
    console.log('listening');
    
    var newImage = new Images({
        image:req.body.image,
    });

    try{
        const savedimage=await newImage.save();
        res.status(201).json(newImage);
        
    }catch(err){
        console.log(err);
    }
}
)
router.get("/imagelist",async (req,res)=>{
    try{
        const userid=await Images.find();
        
        
        res.send(userid);
    }
    catch(err){
        res.send(err);
    }
})
module.exports = router;