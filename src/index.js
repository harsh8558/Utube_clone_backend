import dotenv from 'dotenv';
dotenv.config();
import connectDB from './db/index.db.js';
connectDB()
console.log("hello")










/*
import express from 'express';
const app = express();

( async () => {
  try{
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    app.on("error",(error)=>{
      console.log("Expree is not able to connect to DB",error)
      throw error
    })
    app.listen(process.env.PORT,()=>{
      console.log(`Server is running on port ${process.env.PORT}`)
    })
  }
  catch(error){
    console.log("error",error)
    throw error
  }
})()
*/