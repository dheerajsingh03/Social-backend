import mongoose from "mongoose";
import 'dotenv/config'

// Connect MongoDB.
const dbConnect = ()=>{
  mongoose.connect("mongodb+srv://dheerajsingh:ZXCV1234@firstnode.d5xwx.mongodb.net/").then(()=>{
    console.log("Database Connected Successfully");
  }).catch((error)=>{
    console.log(error);
  })
}
export default dbConnect;
