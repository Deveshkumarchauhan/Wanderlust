const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");

const Listing = require("../models/listing.js");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");

const listingsController = require("../controllers/listings.js");

// index route

router.get("/", wrapAsync(listingsController.index));

// new route

router.get("/new", isLoggedIn,listingsController.renderNewForm);      

// show route
router.get(
  "/:id",
  wrapAsync(listingsController.showListing)
);

// create route

router.post(
  "/",
  isLoggedIn,
  validateListing,
  wrapAsync(listingsController.createListing)
);

// Edit route

router.get(
  "/:id/edit",
  isLoggedIn,
  isOwner,
  wrapAsync(listingsController.editListing)
);

// updata route
router.put(
  "/:id",
  isLoggedIn,
  isOwner,
  validateListing,
  wrapAsync(listingsController.updateListing)
);

// Delete route

router.delete(
  "/:id",
  isLoggedIn,
  isOwner,
  wrapAsync(listingsController.deleteListing)
);

module.exports = router;
