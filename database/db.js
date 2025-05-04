const mongoose = require("mongoose");

const connectDB = () => {
  mongoose
    .connect(
      "mongodb+srv://raissareuter:<db_password>@todolist.ocbegxy.mongodb.net/?retryWrites=true&w=majority&appName=TodoList",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => {
      console.log("MongoDB connected successfully");
    })
    .catch((err) => {
      console.error("MongoDB connection error:", err.message);
    });
};

module.exports = connectDB;
