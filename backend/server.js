require("dotenv").config();

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

// Listen requests
app.listen(process.env.PORT, () => {
  console.log("Server is running on port 4000..");
});
