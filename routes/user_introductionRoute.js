const express = require("express");
const {
  newuserIntroduction,
  getAlluserIntroduction,
  getSingleuserIntroduction,
  updateuserIntroduction,
  deleteuserIntroduction,
} = require("../controllers/user_introductionController");
const { isAuthenticatedUser } = require("../middleware/auth");

const router = express.Router();

router
  .route("/newuserIntroduction")
  .post(isAuthenticatedUser, newuserIntroduction);

router
  .route("/userIntroduction")
  .get(isAuthenticatedUser, getAlluserIntroduction);

router
  .route("/userIntroduction/:id")
  .get(isAuthenticatedUser, getSingleuserIntroduction)
  .put(isAuthenticatedUser, updateuserIntroduction)
  .delete(isAuthenticatedUser, deleteuserIntroduction);

module.exports = router;
