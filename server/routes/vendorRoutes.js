const express = require("express");
const router = express.Router();

const {
  getVendors,
  getVendorById,
  createVendor,
  updateVendor,
  deleteVendor,
  getMyVendors,
} = require("../controllers/vendorController");

const { protect } = require("../middleware/authMiddleware");

router.get("/", getVendors);
router.get("/owner/:owner", getMyVendors);
router.get("/:id", getVendorById);

router.post("/", protect, createVendor);
router.put("/:id", protect, updateVendor);
router.delete("/:id", protect, deleteVendor);

module.exports = router;