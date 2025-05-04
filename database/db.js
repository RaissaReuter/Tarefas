import mongoose from "mongoose";
import "dotenv/config";

const connectDB = async () => {
  try {
    // Conectar ao banco de dados sem as opções descontinuadas
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected successfully");
  } catch (err) {
    console.error("MongoDB connection error:", err.message);
  }
};

export default connectDB;



