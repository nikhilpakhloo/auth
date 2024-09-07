import mongoose from 'mongoose';

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error('MongoDB URI is not defined in the environment variables');
}

let isConnected = false;

export async function connectToDB() {
  if (isConnected) return;
  
  try {
    await mongoose.connect(uri, {
     
    });
    isConnected = true;
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw new Error('Could not connect to MongoDB');
  }
}

export async function disconnectFromDB() {
  if (isConnected) {
    await mongoose.disconnect();
    isConnected = false;
    console.log('MongoDB disconnected');
  }
}
