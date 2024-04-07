const mongoose=require("mongoose")

const reportSchema=new mongoose.Schema({
    date:{
        type:String,
        required:[true,"Date must be provided"]
    },
    hospitalId:{
        type:String,
        default:"1000",
    },
    disease:{
        type:String,
        default:"Heart"
    },
})

module.exports=mongoose.model("Report",reportSchema)