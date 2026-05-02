import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:String,
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String
    },
    role:{
        type:String,
        enum:["admin","member"],
        default:"member"
    }
},{timeStamps:true});

export default mongoose.model("User",userSchema);