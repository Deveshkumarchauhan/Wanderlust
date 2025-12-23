const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const { validateReview, isLoggedIn,isreviewAuthor } = require("../middleware.js");
const reviewController = require("../controllers/reviews.js");


// Reviews
// Post route
router.post(
  "/",
  isLoggedIn,
  validateReview,
  wrapAsync(reviewController.createReview)
);

// Delect Review route
router.delete(
  "/:reviewId",
  isLoggedIn,
  isreviewAuthor,
  wrapAsync(reviewController.deleteReview)
);

module.exports = router;
