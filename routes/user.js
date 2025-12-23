const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");

const usersController = require("../controllers/users.js");
const { route } = require("./listing.js");

router
  .route("/signup")
  .get(usersController.randerSignupForm)
  .post(wrapAsync(usersController.signup));

router
  .route("/login")
  .get(usersController.randerLoginForm)
  .post(
    saveRedirectUrl,
    passport.authenticate("local", {
      failureRedirect: "/login",
      failureFlash: true,
    }),
    usersController.login
  );

router.get("/logout", usersController.logout);

module.exports = router;
