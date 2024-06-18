const cloudinary = require("cloudinary").v2
const fs = require("fs")

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
})


const uploadOnCloudinary = async (localfilePath) => {
    if (!localfilePath) return null;
    try {
        const res = await cloudinary.uploader.upload(localfilePath, { resource_type: "auto" })
        // console.log("file has been uploaded ", res.secure_url);
        return res.secure_url
    }
    catch (error) {
        fs.unlinkSync(localfilePath)
        return null;
    }
    finally {
        fs.unlinkSync(localfilePath)
    }
}

module.exports = uploadOnCloudinary