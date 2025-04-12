const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const wasteController = require("../controllers/waste.controller");
const authUser = require("../middlewares/auth.middleware");

router.post(
  "/listwaste",
  [body("wasteId").isLength({ min: 5 }).withMessage("Invalid waste ID")],
  async (req, res, next) => {
    // Handle validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // Call the controller function
    try {
      await wasteController.listWaste(req, res, next);
    } catch (err) {
      next(err); // Pass errors to the error-handling middleware
    }
  }
);

router.post(
  "/verifywaste",
  authUser.authUser, // Authentication middleware
  [body("wasteId").notEmpty().withMessage("Waste ID is required")],
  async (req, res, next) => {
    // Handle validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // Call the controller function
    try {
      await wasteController.wasteIdValidater(req, res, next);
    } catch (err) {
      next(err); // Pass errors to the error-handling middleware
    }
  }
);

module.exports = router;
