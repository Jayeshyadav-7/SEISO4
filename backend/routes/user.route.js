const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const userController = require("../controllers/user.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const User = require("../models/user.model");

router.post(
  "/register",
  [
    body("phoneNumber")
      .isLength({ min: 10 })
      .withMessage("Invalid phone number"),
    body("name")
      .isLength({ min: 3 })
      .withMessage("Name must be at least 3 characters long"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
  ],
  async (req, res, next) => {
    // Handle validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // Call the controller function
    try {
      await userController.registerUser(req, res, next);
    } catch (err) {
      next(err); // Pass errors to the error-handling middleware
    }
  }
);

router.post(
  "/login",
  [
    body("phoneNumber")
      .isLength({ min: 10 })
      .withMessage("Invalid Phone Number"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
  ],
  async (req, res, next) => {
    // Handle validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // Call the controller function
    try {
      await userController.loginUser(req, res, next);
    } catch (err) {
      next(err); // Pass errors to the error-handling middleware
    }
  }
);

router.get("/profile", authMiddleware.authUser, async (req, res, next) => {
  // Handle validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  // Call the controller function
  try {
    await userController.getUserProfile(req, res, next);
  } catch (err) {
    next(err); // Pass errors to the error-handling middleware
  }
});

router.get("/topcontributers", async (req, res) => {
  try {
    const topUsers = await User.find()
      .sort({ totalWasteCollected: -1 }) // Sort by totalWasteCollected in descending order
      .limit(5) // Limit the result to the top 5 users
      .select(
        "name phoneNumber totalWasteCollected totalRewardsEarned profilePhoto"
      ); // Select only the fields you want to return

    res.status(200).json(topUsers);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
