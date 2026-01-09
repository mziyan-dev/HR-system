import mongoose from "mongoose";




const employeTask = mongoose.Schema({
    name : String,
    description : String,
    craeteAt : Date
})



export default mongoose.model('Task', employeTask );