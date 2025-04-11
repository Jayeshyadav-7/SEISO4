const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: [3, "First name must be at least 3 characters long"],
  },
  phoneNumber: {
    type: Number,
    required: true,
    unique: true,
    minlength: [10, "Phone number must be at least 10 characters long"],
  },
  email: {
    type: String,
    unique: true,
    sparse: true,
    minlength: [5, "Email must be at least 5 characters long"],
  },
  profilePhoto: {
    type: String,
    match: [
      /^https?:\/\/.+\.(jpg|jpeg|png|webp|gif)$/,
      "Please enter a valid image URL",
    ],
    default: null,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  totalWasteCollected: {
    type: String,
    default: 0,
  },
  totalRewardsEarned: {
    type: String,
    default: 0,
  },
  socketId: {
    type: String,
  },
});

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
    expiresIn: "24h",
  });
  return token;
};

userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.statics.hashPassword = async function (password) {
  return await bcrypt.hash(password, 10);
};

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
