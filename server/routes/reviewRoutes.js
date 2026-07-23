const { protect } = require("../middleware/authMiddleware");
const express = require("express");
const {
  addReview,
  getReviews,
} = require("../controllers/reviewController");

const router = express.Router();

// Get all reviews for a vendor
router.get("/:vendorId", getReviews);

// Add a review (Login Required)
router.post("/", protect, addReview);

module.exports = router;