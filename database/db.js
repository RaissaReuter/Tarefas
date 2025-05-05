
import mongoose from "mongoose";
import "dotenv/config";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log(" MongoDB Atlas conectado com sucesso!");
  } catch (err) {
    console.error(" Erro na conexão com MongoDB:", err.message);
    process.exit(1);
  }
};