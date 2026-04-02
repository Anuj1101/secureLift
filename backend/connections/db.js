const mongoose=require('mongoose')
const dotenv=require('dotenv')
const connectdb=async()=>{
try{
    await mongoose.connect(process.env.MONGO_URI)
}
catch(err){
    console.log('mongo connection error',err.message);
}}
module.exports=connectdb