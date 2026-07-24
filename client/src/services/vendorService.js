const API_URL = `${import.meta.env.VITE_API_URL}/api/vendors`;

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

// Create Vendor
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

// Update Vendor
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

// Delete Vendor
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

// Get My Vendors
export const getMyVendors = async (ownerId) => {
  const response = await fetch(`${API_URL}/owner/${ownerId}`);

  return await response.json();
};