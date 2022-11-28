const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Experience = require("../models/experienceModel");

//Create new experience
exports.newexperience = catchAsyncErrors(async (req, res, next) => {
  const {
    education_history,
    employment_history,
    full_time_job_experience,
    top_skills,
  } = req.body;

  const experience = await Experience.create({
    education_history,
    employment_history,
    full_time_job_experience,
    top_skills,
    resume: {
      public_id: "This is a sample id",
      url: "This is sample url",
    },
    user: req.user._id,
  });

  res.status(201).json({
    success: true,
    experience,
  });
});

// Get all experience
exports.getAllexperience = catchAsyncErrors(async (req, res, next) => {
  const experience = await Experience.find();

  res.status(200).json({
    success: true,
    experience,
  });
});

//Get single experience
exports.getSingleexperience = catchAsyncErrors(async (req, res, next) => {
  const experience = await Experience.findById(req.params.id);

  if (!experience) {
    return next(
      new ErrorHander(`Experience does not exist with Id: ${req.params.id}`)
    );
  }

  res.status(200).json({
    success: true,
    experience,
  });
});

// update Extra Experience
exports.updateexperience = catchAsyncErrors(async (req, res, next) => {
  const newExperienceData = {
    education_history: req.body.education_history,
    employment_history: req.body.employment_history,
    full_time_job_experience: req.body.full_time_job_experience,
    top_skills: req.body.top_skills,
  };

  await Experience.findByIdAndUpdate(req.params.id, newExperienceData, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
  });
});

// Delete experience
exports.deleteexperience = catchAsyncErrors(async (req, res, next) => {
  const experience = await Experience.findById(req.params.id);

  if (!experience) {
    return next(
      new ErrorHander(
        `Experience does not exist with Id: ${req.params.id}`,
        400
      )
    );
  }

  await experience.remove();

  res.status(200).json({
    success: true,
    message: "Experience Deleted Successfully",
  });
});
