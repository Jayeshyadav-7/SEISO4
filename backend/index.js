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
const allowedOrigins = [
  process.env.FRONTEND_URL,
  // Add other allowed origins if needed
];

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (like mobile apps or curl requests)
      if (!origin) return callback(null, true);

      if (allowedOrigins.indexOf(origin) === -1) {
        const msg =
          "The CORS policy for this site does not allow access from the specified Origin.";
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

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
