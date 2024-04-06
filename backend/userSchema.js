const mongoose=require("mongoose")

const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name must be provided"]
    },
    age:{
        type:String,
        required:[true,"Age must be provided"]
    },
    contactNo:{
        type:String,
        required:[true,"Contact No. must be provided"]
    },
    emergencyContactNo:{
        type:String,
        required:[true," Emergency Contact No. must be provided"]
    },
    bloodGroup:{
        type:String,
        required:[true,"Blood Group must be provided"]
    },
    dateOfBirth:{
        type:String,
        required:[true,"Date of Birth must be provided"]
    },
    height:{
        type:String,
        required:[true,"Height must be provided"]
    },
    weight:{
        type:String,
        required:[true,"Weight  must be provided"]
    },
    password:{
        type:String,
        required:[true,"Password must be specified"]
    },
    uid:{
        type:String,
    }
})

module.exports=mongoose.model("User",userSchema)