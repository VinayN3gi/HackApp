const express=require("express")
const mongose=require("mongoose")
const User=require("./userSchema")
const cors=require("cors")
const app=express()
const port=3000
const connectionString="mongodb+srv://user1:1234@cluster1.qjmq8au.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1"
const Report=require("./reportSchema")

app.use(express.json())

app.use(cors())

const connectDb=async function()
{
    mongose.connect(connectionString).then(()=>console.log("Success")).catch((error)=>console.log(error))
}

app.post("/register",async (req,res)=>{
    try {
        const user=await User.create(req.body)
        console.log(user)
        res.send(user)
    } catch (error) {
        console.log(error)
        res.status(404).send("Error")
    }
    
})

app.post("/report",async(req,res)=>{
    try {
        const report=await Report.create(req.body)
        console.log(report)
        res.send(report)
    } catch (error) {
        console.log(error)
    }
})

app.get("/info",async(req,res)=>{
    const userInfo=await User.find(req.query);
    res.send(userInfo)
})

app.get("/report",async (req,res)=>{
    const report=await Report.find({})
    res.send(report)
})
app.get("/data",async(req,res)=>{
    const userInfo=await User.find()
    res.send(userInfo)
})

const start=async function()
{
    await connectDb()
    app.listen(port,console.log(`Listening on port ${port}`))
}


start()