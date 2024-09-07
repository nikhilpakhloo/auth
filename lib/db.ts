import mongoose from "mongoose";
const uri = process.env.MONGODB_URI;
if (!uri) {
  throw new Error("Mongo APi not present");
}
let isConnected = false;

export async function connectToDB() {
  if (isConnected) return;
  try {
    await mongoose.connect(uri);
    isConnected = true;
    console.log("DB Connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw new Error("Could not connect to MongoDB");
  }
}
