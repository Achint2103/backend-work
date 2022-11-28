const mongoose = require("mongoose");

const user_introductionSchema = new mongoose.Schema({
  user_role: {
    type: String,
    required: [true, "Please Enter user role"],
  },
  current_ctc: {
    type: String,
    required: [true, "Please Enter current ctc"],
  },
  fixed_ctc: {
    type: String,
    required: [true, "Please Enter fixed ctc"],
  },
  minimum_expected_ctc: {
    type: String,
    required: [true, "Please Enter minimum expected ctc"],
  },
  total_expected_ctc: {
    type: String,
    required: [true, "Please Enter total expected ctc"],
  },
  starting_notice_period: {
    type: String,
    required: [true, "Please Enter starting notice period"],
  },
  how_long_notice_period: {
    type: String,
    required: [true, "Please Enter how long notice period"],
  },
  negotiable_notice_period: {
    type: String,
    required: [true, "Please Enter negotiable notice period"],
  },
  current_location: {
    type: String,
    required: [true, "Please Enter current location"],
  },
  okay_with_remote_job: {
    type: String,
    required: [
      true,
      "Please Enter whether you are okay with remote job or not",
    ],
  },
  desire_cities_working: {
    type: String,
    required: [true, "Please Enter your desired cities"],
  },
  near_delhi_cities: {
    type: String,
    required: [true, "Please Enter near delhi cities"],
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

module.exports = mongoose.model("User_Introduction", user_introductionSchema);
