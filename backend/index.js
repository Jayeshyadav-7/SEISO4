require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectToDb = require("./config/db");
const userRoute = require("./routes/user.route");
const wasteRoute = require("./routes/waste.route");
const cookieParser = require("cookie-parser");
const Waste = require("./models/waste.model");
const { saveDummyData } = require("./models/waste.model");

const app = express();

// Connect to the database
connectToDb();

// Save dummy data
// saveDummyData();

app.get("/", (req, res) => {
  res.send("hello jayesh");
});

const PORT = process.env.PORT || 3000;

// Middleware
app.use(
  cors({
    origin: "seisoin.netlify.app",
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/users", userRoute);
app.use("/waste", wasteRoute);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
