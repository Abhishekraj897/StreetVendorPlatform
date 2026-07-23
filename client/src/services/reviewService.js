import axios from "axios";

const API = "http://localhost:5000/api/reviews";

// Get reviews of a vendor
export const getReviews = async (vendorId) => {
  const res = await axios.get(`${API}/${vendorId}`);
  return res.data;
};

// Add review
export const addReview = async (reviewData) => {
  const token = localStorage.getItem("token");

  const res = await axios.post(API, reviewData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data;
};