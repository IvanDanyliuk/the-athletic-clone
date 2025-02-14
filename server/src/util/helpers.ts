import cloudinary from "./cloudinary";

export const setQueryParams = (params: any) => {
  const modifiedParams = Object.entries(params).filter(item => item[1] !== '');
  return Object.fromEntries(modifiedParams);
};

export const getFilenameFromUrl = (url: string) => {
  const parsedFilename = new URL(url).pathname.split('/').pop();
  if(parsedFilename) {
    return parsedFilename.split('.')[0];
  }

  return null;
};

export const uploadImage = async (imageUrl: string) => {
  const { url } = await cloudinary.uploader.upload(
    imageUrl,
    {},
    function(error, response) {
      console.log(error, response);
    }
  );
  return url;
};

export const updateImage = async (newImageUrl: string, prevImageUrl: string) => {
  const { url } = await cloudinary.uploader.upload(
    newImageUrl,
    {},
    function(error, response) {
      console.log(error, response);
    }
  );

  const prevImagePublicId = getFilenameFromUrl(prevImageUrl);
  if(prevImagePublicId) {
    await cloudinary.uploader.destroy(prevImagePublicId, function(error, response) {
      console.log(response);
    });
  }

  return url;
};

export const deleteImage = async (imageUrl: string) => {
  const imagePublicId = getFilenameFromUrl(imageUrl);
  if(imagePublicId) {
    await cloudinary.uploader.destroy(imagePublicId, function(error, response) {
      console.log(response);
    });
  } else {
    throw new Error('Cannot get an image public ID');
  }
};