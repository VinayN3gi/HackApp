const express=require("express")
const mongose=require("mongoose")
const User=require("./userSchema")
const cors=require("cors")
const app=express()
const port=3000
const connectionString="mongodb+srv://user1:1234@cluster1.qjmq8au.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1"


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
    } catch (error) {
        console.log(error)
    }
    
})


const start=async function()
{
    await connectDb()
    app.listen(port,console.log(`Listening on port ${port}`))
}


start()