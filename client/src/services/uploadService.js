export const uploadImage = async (imageFile) => {
  const formData = new FormData();

  formData.append("image", imageFile);

  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/api/upload`,
    {
      method: "POST",
      body: formData,
    }
  );

  return await response.json();
};