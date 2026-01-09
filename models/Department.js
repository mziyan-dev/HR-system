import mongoose from "mongoose";




const department = mongoose.Schema({
    name : String,
    description : String,
    craeteAt : Date
})



export default mongoose.model('Department', department );
