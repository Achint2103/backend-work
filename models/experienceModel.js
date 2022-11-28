const mongoose = require("mongoose");

const experienceSchema = new mongoose.Schema({
  education_history: [
    {
      school_name: {
        type: String,
        required: true,
      },
      school_marks: {
        type: String,
        required: true,
      },
      college_name: {
        type: String,
        required: true,
      },
      college_marks: {
        type: String,
        required: true,
      },
    },
  ],

  employment_history: [
    {
      organization_name: {
        type: String,
        required: true,
      },
      employment_duration: {
        type: String,
        required: true,
      },
      role: {
        type: String,
        required: true,
      },
      responsibilities: {
        type: String,
        required: true,
      },
    },
  ],
  full_time_job_experience: {
    type: String,
    required: true,
  },
  top_skills: {
    type: String,
    required: true,
  },
  resume: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
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

module.exports = mongoose.model("Experience", experienceSchema);
