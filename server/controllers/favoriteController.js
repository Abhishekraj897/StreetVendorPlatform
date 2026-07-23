const Favorite = require("../models/Favorite");

// Add to favorites
const addFavorite = async (req, res) => {
  try {
    const { vendorId } = req.body;

    const favorite = await Favorite.create({
      user: req.user._id,
      vendor: vendorId,
    });

    res.status(201).json(favorite);
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({
        message: "Vendor already in favorites",
      });
    }

    res.status(500).json({
      message: error.message,
    });
  }
};

// Remove from favorites
const removeFavorite = async (req, res) => {
  try {
    const { vendorId } = req.params;

    await Favorite.findOneAndDelete({
      user: req.user._id,
      vendor: vendorId,
    });

    res.json({
      message: "Removed from favorites",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get logged-in user's favorites
const getFavorites = async (req, res) => {
  try {
    const favorites = await Favorite.find({
      user: req.user._id,
    }).populate("vendor");

    res.json(favorites);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  addFavorite,
  removeFavorite,
  getFavorites,
};