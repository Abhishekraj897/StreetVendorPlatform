const API = "http://localhost:5000/api/ai";

export const askAI = async (question) => {
  const token = localStorage.getItem("token");

  const response = await fetch(API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ question }),
  });

  return await response.json();
};