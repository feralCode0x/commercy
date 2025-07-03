import { ServerApiVersion } from "mongodb";
import mongoose from "mongoose";

async function connectDB() {
    try {
    await mongoose.connect(process.env.DATABASE, {
    
  }).then(() =>
    console.log(
      "==============Mongodb Database Connected Successfully=============="
    )
  ).catch((err) => console.log("Database Not Connected !!!"));
} catch(error) {
    console.error('Error connercting to MongoDB', error);
    }
}
connectDB();

