const mongoose=require('mongoose');
const connection=mongoose.connect("mongodb://127.0.0.1:27017/form",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("connection success boi!")
}).catch(()=>{
    console.log("faled to connect");
});

module.exports=connection;