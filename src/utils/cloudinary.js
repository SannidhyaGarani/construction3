import axios from 'axios';

const uploadToCloudinary = async (file) => {
  if (!file) return null;
  
  const data = new FormData();
  data.append('file', file);
  data.append('upload_preset', 'Mahirash');
  
  try {
    const res = await axios.post('https://api.cloudinary.com/v1_1/djmfxpemz/image/upload', data);
    return res.data.secure_url;
  } catch (error) {
    console.error("Error uploading to Cloudinary", error);
    throw error;
  }
};

export { uploadToCloudinary };
