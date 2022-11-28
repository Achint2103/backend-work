const mongoose = require("mongoose");

const extra_experienceSchema = new mongoose.Schema({
  biggest_Achievement: {
    type: String,
    required: [true, "Please Enter Your Achievement"],
    minLength: [4, "Achievement should have more than 4 characters"],
  },
  work_at_company_size: {
    type: String,
    required: [true, "Please Enter Your work at company size"],
  },
  linkedIn: {
    type: String,
    required: [true, "Please Enter Your linkedin profile url"],
  },
  github: {
    type: String,
    required: [true, "Please Enter Your github profile url"],
  },
  portfolio: {
    type: String,
    required: [true, "Please Enter Your portfolio url"],
  },
  stackoverflow: {
    type: String,
    required: [true, "Please Enter Your stackoverflow profile url"],
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Extra_Experience", extra_experienceSchema);
