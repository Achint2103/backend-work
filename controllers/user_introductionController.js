const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const User_Introduction = require("../models/user_introductionModel");

//Create new extra_experience
exports.newuserIntroduction = catchAsyncErrors(async (req, res, next) => {
  const {
    user_role,
    current_ctc,
    fixed_ctc,
    minimum_expected_ctc,
    total_expected_ctc,
    starting_notice_period,
    how_long_notice_period,
    negotiable_notice_period,
    current_location,
    okay_with_remote_job,
    desire_cities_working,
    near_delhi_cities,
  } = req.body;

  const user_introduction = await User_Introduction.create({
    user_role,
    current_ctc,
    fixed_ctc,
    minimum_expected_ctc,
    total_expected_ctc,
    starting_notice_period,
    how_long_notice_period,
    negotiable_notice_period,
    current_location,
    okay_with_remote_job,
    desire_cities_working,
    near_delhi_cities,
    user: req.user._id,
  });

  res.status(201).json({
    success: true,
    user_introduction,
  });
});

// Get all user intriduction
exports.getAlluserIntroduction = catchAsyncErrors(async (req, res, next) => {
  const user_introduction = await User_Introduction.find();

  res.status(200).json({
    success: true,
    user_introduction,
  });
});

//Get single user introduction
exports.getSingleuserIntroduction = catchAsyncErrors(async (req, res, next) => {
  const user_introduction = await User_Introduction.findById(req.params.id);

  if (!user_introduction) {
    return next(
      new ErrorHander(
        `User introduction does not exist with Id: ${req.params.id}`
      )
    );
  }

  res.status(200).json({
    success: true,
    user_introduction,
  });
});

// update Extra Experience
exports.updateuserIntroduction = catchAsyncErrors(async (req, res, next) => {
  const newUserIntroductionData = {
    user_role: req.body.user_role,
    current_ctc: req.body.current_ctc,
    fixed_ctc: req.body.fixed_ctc,
    minimum_expected_ctc: req.body.minimum_expected_ctc,
    total_expected_ctc: req.body.total_expected_ctc,
    starting_notice_period: req.body.starting_notice_period,
    how_long_notice_period: req.body.how_long_notice_period,
    negotiable_notice_period: req.body.negotiable_notice_period,
    current_location: req.body.current_location,
    okay_with_remote_job: req.body.okay_with_remote_job,
    desire_cities_working: req.body.desire_cities_working,
    near_delhi_cities: req.body.near_delhi_cities,
  };

  await User_Introduction.findByIdAndUpdate(
    req.params.id,
    newUserIntroductionData,
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
exports.deleteuserIntroduction = catchAsyncErrors(async (req, res, next) => {
  const user_introduction = await User_Introduction.findById(req.params.id);

  if (!user_introduction) {
    return next(
      new ErrorHander(
        `User introduction does not exist with Id: ${req.params.id}`,
        400
      )
    );
  }

  await user_introduction.remove();

  res.status(200).json({
    success: true,
    message: "User introduction Deleted Successfully",
  });
});
