const mongoose=require("mongoose");
const formSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    tel:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    subscription:{
        type:String,
        required:true
    }
});

module.exports=mongoose.model("FormData",formSchema);