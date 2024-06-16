const cloudinary = require('cloudinary').v2


exports.uploadImageToCloudinary = async (filePath) => {
    try {
        const result = await cloudinary.uploader.upload(filePath)
        console.log(result);
        return result;
    } catch (error) {
        console.log("Something went wrong uploading the image", error);
    }
}
