const express = require("express");
const {
  registerUser,
  loginUser,
  logout,
  getAllUser,
  getSingleUser,
  updateUser,
  deleteUser,
} = require("../controllers/userController");
const { isAuthenticatedUser } = require("../middleware/auth");

const router = express.Router();

router.route("/register").post(registerUser);

router.route("/login").post(loginUser);

router.route("/logout").get(logout);

router.route("/users").get(isAuthenticatedUser, getAllUser);

router
  .route("/user/:id")
  .get(isAuthenticatedUser, getSingleUser)
  .put(isAuthenticatedUser, updateUser)
  .delete(isAuthenticatedUser, deleteUser);

module.exports = router;
