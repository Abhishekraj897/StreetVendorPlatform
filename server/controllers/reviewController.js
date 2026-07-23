const Review = require("../models/Review");
const Vendor = require("../models/Vendor");

// Add Review
const addReview = async (req, res) => {
  try {
    const { vendorId, rating, comment } = req.body;

    // Create review
    const review = await Review.create({
      vendor: vendorId,
      user: req.user._id,
      rating,
      comment,
    });

    // Get all reviews for this vendor
    const reviews = await Review.find({
      vendor: vendorId,
    });

    // Calculate average rating
    const totalRating = reviews.reduce(
      (sum, review) => sum + review.rating,
      0
    );

    const averageRating =
      totalRating / reviews.length;

    // Update vendor rating
    await Vendor.findByIdAndUpdate(
      vendorId,
      {
        rating: Number(averageRating.toFixed(1)),
      }
    );

    res.status(201).json(review);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get Reviews for a Vendor
const getReviews = async (req, res) => {
  try {
    const reviews = await Review.find({
      vendor: req.params.vendorId,
    }).populate("user", "name");

    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  addReview,
  getReviews,
};