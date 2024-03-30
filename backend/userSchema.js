const mongoose=require("mongoose")

const userSchema= new mongoose.Schema({
    email:{
        type:String,
        required:[true,"Email must be provided"]
    },
    password:{
        type:String,
        required:[true,"Passwod must be provided"]
    }
})

module.exports=mongoose.model("User",userSchema)