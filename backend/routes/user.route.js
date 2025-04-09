const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const userController = require("../controllers/user.controller");

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

module.exports = router;
