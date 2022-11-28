const express = require("express");
const {
  newexperience,
  getAllexperience,
  getSingleexperience,
  updateexperience,
  deleteexperience,
} = require("../controllers/experienceContoller");
const { isAuthenticatedUser } = require("../middleware/auth");

const router = express.Router();

router.route("/newExperience").post(isAuthenticatedUser, newexperience);

router.route("/Experiences").get(isAuthenticatedUser, getAllexperience);

router
  .route("/Experience/:id")
  .get(isAuthenticatedUser, getSingleexperience)
  .put(isAuthenticatedUser, updateexperience)
  .delete(isAuthenticatedUser, deleteexperience);

module.exports = router;
