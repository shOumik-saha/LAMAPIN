import mongoose from "mongoose";

const connectDB = async () => {
  if (!process.env.MONGO) {
    throw new Error("MONGO environment variable is missing.");
  }

  await mongoose.connect(process.env.MONGO, {
    serverSelectionTimeoutMS: 10000,
  });
  console.log("MongoDB is connected!");
};

export default connectDB;
