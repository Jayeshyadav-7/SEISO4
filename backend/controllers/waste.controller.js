const wasteModel = require("../models/waste.model");
const { validationResult } = require("express-validator");
const User = require("../models/user.model");

module.exports.listWaste = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { wasteId, wasteWeight } = req.body;

  // Validate input
  if (!wasteId || !userId) {
    return res
      .status(400)
      .json({ success: false, message: "Waste ID and User ID are required" });
  }

  try {
    // Check if the waste ID already exists
    const isWasteAlready = await wasteModel.findOne({ wasteId });

    if (isWasteAlready) {
      return res.status(400).json({ message: "Waste already exists" });
    }

    // Validate wasteWeight
    if (!wasteWeight || isNaN(wasteWeight)) {
      return res.status(400).json({ message: "Invalid waste weight" });
    }

    // Create a new waste entry
    const newWaste = new wasteModel({
      wasteId,
      wasteWeight,
    });

    await newWaste.save();

    res
      .status(201)
      .json({ message: "Waste registered successfully", newWaste });
  } catch (error) {
    console.error("Error registering waste:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports.wasteIdValidater = async (req, res, next) => {
  const { wasteId, userId } = req.body;

  try {
    // Check if the waste ID exists in the database
    const waste = await wasteModel.findOne({ wasteId });

    if (!waste) {
      console.log("Incorrect waste ID");
      return res
        .status(400)
        .json({ success: false, message: "Invalid waste ID" });
    }

    // Check if the waste ID has already been verified
    if (waste.verified) {
      console.log("Waste ID already used");
      return res
        .status(400)
        .json({ success: false, message: "Waste ID already verified" });
    }

    // Fetch the user using the userId sent from the client
    const user = await User.findById(userId);

    if (!user) {
      console.log("User not found");
      return res
        .status(400)
        .json({ success: false, message: "User not found" });
    }

    const wasteWeight = waste.wasteWeight;

    let rewards = parseFloat(user.totalRewardsEarned) || 0;
    let totalWaste = parseFloat(user.totalWasteCollected) || 0;

    // Reward calculation based on waste category
    // if (waste.category === "plastic") {
    //   rewards += wasteWeight * 0.03;
    // } else if (waste.category === "e-waste") {
    //   rewards += wasteWeight * 0.1;
    // } else if (waste.category === "organic") {
    //   rewards += wasteWeight * 0.002;
    // }

    totalWaste += wasteWeight;
    rewards += 1;

    // Update user rewards and total waste
    await User.findByIdAndUpdate(userId, {
      totalRewardsEarned: rewards.toFixed(2),
      totalWasteCollected: totalWaste.toFixed(2),
    });

    // Mark waste as verified
    waste.status = "verified";
    await waste.save();

    return res.status(200).json({
      success: true,
      message: "Waste ID verified, rewards added!",
      rewards,
      totalWaste,
    });
  } catch (error) {
    console.error("Error in wasteIdValidater:", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};
