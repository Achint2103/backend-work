const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const errorMiddleware = require("./middleware/error");

// Config
dotenv.config();

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

// Route Imports
const user = require("./routes/userRoute");
const extra_experience = require("./routes/extra_experienceRoute");
const user_introduction = require("./routes/user_introductionRoute");
const experience = require("./routes/experienceRoute");

app.use("/api/v1", user);
app.use("/api/v1", extra_experience);
app.use("/api/v1", user_introduction);
app.use("/api/v1", experience);

// Middleware for Errors
app.use(errorMiddleware);

module.exports = app;
