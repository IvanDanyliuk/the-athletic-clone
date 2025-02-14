import axios from 'axios';

export const uploadImage = async (image: any) => {
  const formData = new FormData();
    formData.append('file', image);
    formData.append('upload_preset', 'the_athletic');
    const { data } = await axios.post('https://api.cloudinary.com/v1_1/dsda5p1om/image/upload', formData);
    return data['secure_url'];
};