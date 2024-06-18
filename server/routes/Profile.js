const express = require("express")
const router = express.Router()
const { auth, isInstructor } = require("../middlewares/auth")
const { deleteAccount, updateProfile, getAllUserDetails, updateDisplayPicture, getEnrolledCourses, instructorDashboard, } = require("../controllers/Profile")
const upload = require("../utils/multer")
// const upload = require("../utils/imageUploader")

// ********************************************************************************************************
//                                      Profile routes
// ********************************************************************************************************
// Delete User Account
router.delete("/deleteProfile", auth, deleteAccount)
router.put("/updateProfile", auth, updateProfile)
router.get("/getUserDetails", auth, getAllUserDetails)
// Get Enrolled Courses
router.get("/getEnrolledCourses", auth, getEnrolledCourses)
// Route definition
router.put("/updateDisplayPicture", upload.single('displayPicture'),  auth,  updateDisplayPicture);

router.get("/instructorDashboard", auth, isInstructor, instructorDashboard)

module.exports = router