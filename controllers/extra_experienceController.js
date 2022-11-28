const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Extra_Experience = require("../models/extra_experienceModel");

//Create new extra_experience
exports.newextraExperience = catchAsyncErrors(async (req, res, next) => {
  const {
    biggest_Achievement,
    work_at_company_size,
    linkedIn,
    github,
    portfolio,
    stackoverflow,
  } = req.body;

  const extra_experience = await Extra_Experience.create({
    biggest_Achievement,
    work_at_company_size,
    linkedIn,
    github,
    portfolio,
    stackoverflow,
    user: req.user._id,
  });

  res.status(201).json({
    success: true,
    extra_experience,
  });
});

// Get all extra_experience
exports.getAllextraExperience = catchAsyncErrors(async (req, res, next) => {
  const extra_experiences = await Extra_Experience.find();

  res.status(200).json({
    success: true,
    extra_experiences,
  });
});

//Get single extra_experience
exports.getSingleextraExperience = catchAsyncErrors(async (req, res, next) => {
  const extra_experience = await Extra_Experience.findById(req.params.id);

  if (!extra_experience) {
    return next(
      new ErrorHander(
        `Extra experience does not exist with Id: ${req.params.id}`
      )
    );
  }

  res.status(200).json({
    success: true,
    extra_experience,
  });
});

// update Extra Experience
exports.updateextraExperience = catchAsyncErrors(async (req, res, next) => {
  const newExtraExperienceData = {
    biggest_Achievement: req.body.biggest_Achievement,
    work_at_company_size: req.body.work_at_company_size,
    linkedIn: req.body.linkedIn,
    github: req.body.github,
    portfolio: req.body.portfolio,
    stackoverflow: req.body.stackoverflow,
  };

  await Extra_Experience.findByIdAndUpdate(
    req.params.id,
    newExtraExperienceData,
    {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    }
  );

  res.status(200).json({
    success: true,
  });
});

// Delete extra experience
exports.deleteextraExperience = catchAsyncErrors(async (req, res, next) => {
  const extra_experience = await Extra_Experience.findById(req.params.id);

  if (!extra_experience) {
    return next(
      new ErrorHander(`User does not exist with Id: ${req.params.id}`, 400)
    );
  }

  await extra_experience.remove();

  res.status(200).json({
    success: true,
    message: "Extra experience Deleted Successfully",
  });
});
