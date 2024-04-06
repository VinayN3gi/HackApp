const mongoose=require("mongoose")

const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name must be provided"]
    },
    age:{
        type:Number,
        required:[true,"Age must be provided"]
    },
    contactNo:{
        type:Number,
        required:[true,"Contact No. must be provided"]
    },
    emergencyContactNo:{
        type:Number,
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
        type:Number,
        required:[true,"Height must be provided"]
    },
    weight:{
        type:Number,
        required:[true,"Weight  must be provided"]
    }
})

module.exports=mongoose.model("User",userSchema)