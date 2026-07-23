import axios from "axios";

const API = "http://localhost:5000/api/favorites";

const getToken = () => localStorage.getItem("token");

// Get all favorites
export const getFavorites = async () => {
  const res = await axios.get(API, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });

  return res.data;
};

// Add favorite
export const addFavorite = async (vendorId) => {
  const res = await axios.post(
    API,
    { vendorId },
    {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    }
  );

  return res.data;
};

// Remove favorite
export const removeFavorite = async (vendorId) => {
  const res = await axios.delete(
    `${API}/${vendorId}`,
    {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    }
  );

  return res.data;
};