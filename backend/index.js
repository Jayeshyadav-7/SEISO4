require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectToDb = require("./config/db");
const userRoute = require("./routes/user.route");
const cookieParser = require("cookie-parser");

const app = express();

// Connect to the database
connectToDb();

app.get("/", (req, res) => {
  res.send("hello jayesh");
});

const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/users", userRoute);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
