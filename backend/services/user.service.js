const userModel = require("../models/user.model");

module.exports.createUser = async ({ name, phoneNumber, password }) => {
  if (!name || !phoneNumber || !password) {
    throw new Error("All fields are required");
  }
  const user = userModel.create({
    name,
    phoneNumber,
    password,
  });

  return user;
};
