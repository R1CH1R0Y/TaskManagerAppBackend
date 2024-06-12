const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const {taskmodel}=require("./models/task")

const app=express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://Richi2001:R1CH1R0Y@cluster0.ulfkc.mongodb.net/TaskDB?retryWrites=true&w=majority&appName=Cluster0")


app.post("/add",(req,res)=>{
    let input=req.body
    let task=new taskmodel(input)
    console.log(task)
    task.save()
    res.json({status:"success"})
})

app.post("/view",(req,res)=>{
    taskmodel.find().then(
        (data)=>{
            res.json(data)
        }
    ).catch(
        (error)=>{
            alert(error.message)
        }
    )
})

app.listen(8235,()=>{
    console.log("server started")
})