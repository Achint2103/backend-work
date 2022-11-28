const express = require("express");
const {
  newextraExperience,
  getAllextraExperience,
  getSingleextraExperience,
  updateextraExperience,
  deleteextraExperience,
} = require("../controllers/extra_experienceController");
const { isAuthenticatedUser } = require("../middleware/auth");

const router = express.Router();

router
  .route("/newextraExperience")
  .post(isAuthenticatedUser, newextraExperience);

router
  .route("/extraExperiences")
  .get(isAuthenticatedUser, getAllextraExperience);

router
  .route("/extraExperience/:id")
  .get(isAuthenticatedUser, getSingleextraExperience)
  .put(isAuthenticatedUser, updateextraExperience)
  .delete(isAuthenticatedUser, deleteextraExperience);

module.exports = router;
