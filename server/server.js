const express = require("express");
const cors = require("cors");
require("dotenv").config();
const favoriteRoutes = require("./routes/favoriteRoutes");
const reviewRoutes = require("./routes/reviewRoutes");
const connectDB = require("./config/db"); // <-- Add this
const vendorRoutes = require("./routes/vendorRoutes");
const authRoutes = require("./routes/authRoutes");
const uploadRoutes = require("./routes/uploadRoutes");
const aiRoutes = require("./routes/aiRoutes");

connectDB(); // <-- Add this

const app = express();

app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
  res.send("🚀 Street Vendor API is Running...");
});

app.use("/api/vendors", vendorRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/favorites", favoriteRoutes);
app.use("/api/ai", aiRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});