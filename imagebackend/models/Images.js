var mongoose=require("mongoose");
var imageShema=new mongoose.Schema({
   image:{type:String,required:true},
},{
    timestamps:true
})

module.exports=mongoose.model("Images",imageShema);