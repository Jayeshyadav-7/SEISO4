require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectToDb = require("./config/db");
const userRoute = require("./routes/user.route");
const wasteRoute = require("./routes/waste.route");
const cookieParser = require("cookie-parser");
const Waste = require("./models/waste.model");
const { saveDummyData } = require("./models/waste.model");

const PORT = process.env.PORT || 3000;

const app = express();

// Connect to the database
connectToDb();

// Save dummy data
// saveDummyData();

// Middleware
const corsOptions = {
  origin: "https://seisoin.netlify.app", // Your Netlify frontend URL
  optionsSuccessStatus: 200, // Some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("hello jayesh");
});

app.use("/users", userRoute);
app.use("/waste", wasteRoute);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
