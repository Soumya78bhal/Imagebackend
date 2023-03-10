var express=require("express");
var mongoose=require("mongoose");
var dotnev=require("dotenv")
var app=express();
var imagerouter=require("./router/image")
dotnev.config();
mongoose
.set('strictQuery',true)
.connect(process.env.MONGO_URL)
.then(()=>console.log('Sucessful'))
.catch((err)=> console.log('error'));
app.use(express.json());
app.use("/api",imagerouter);

app.listen(4000,()=>{
    console.log("ready to go")
});