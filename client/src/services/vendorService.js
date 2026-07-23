const API_URL = "http://localhost:5000/api/vendors";

// Get all vendors
export const getVendors = async () => {
  const response = await fetch(API_URL);
  return response.json();
};

// Get Vendor By ID
export const getVendorById = async (id) => {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
};

// Create vendor
export const createVendor = async (vendor) => {
  const token = localStorage.getItem("token");

  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(vendor),
  });

  return await response.json();
};

// Update vendor
export const updateVendor = async (id, vendor) => {
  const token = localStorage.getItem("token");

  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(vendor),
  });

  return await response.json();
};

// Delete vendor
export const deleteVendor = async (id) => {
  const token = localStorage.getItem("token");

  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return await response.json();
};

export const getMyVendors = async (ownerId) => {
  const response = await fetch(
    `http://localhost:5000/api/vendors/owner/${ownerId}`
  );

  return await response.json();
};

