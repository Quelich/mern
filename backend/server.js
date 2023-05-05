require("dotenv").config();
const mongoose = require("mongoose");

const express = require("express");

// Create express server
const app = express();

// Middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use(express.json());

// Routes
const workoutRoutes = require("./routes/workouts");
app.use("/api/workouts", workoutRoutes);

app.get("/api", (req, res) => {
  res.json({ msg: "Welcome to MERN API" });
});

// Database
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("You are connected to MongoDB...");
    // Listen requests
    app.listen(process.env.PORT, () => {
      console.log("Server is running on port 4000...");
    });
  })
  .catch((err) => {
    console.log(err);
  });
