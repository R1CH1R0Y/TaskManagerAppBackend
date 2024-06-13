const mongoose=require("mongoose")
const schema=mongoose.Schema(
    {
    "tname":{type:String,required:true},
    "date":{type:String,required:true},
    "priority":{type:String,required:true},
    "tdesc":{type:String,required:true}
    }
)
let taskmodel=mongoose.model("Tasks",schema);
module.exports={taskmodel}