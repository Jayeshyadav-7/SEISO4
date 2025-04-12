const mongoose = require("mongoose");

const wasteSchema = new mongoose.Schema({
  wasteId: {
    type: String,
    required: true,
    unique: true,
  },
  wasteWeight: {
    type: Number,
  },
  status: {
    type: String,
    enum: ["pending", "verified", "rejected"],
    default: "pending",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Waste", wasteSchema);
