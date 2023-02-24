const express = require("express")

const courseControlller = require("../controllers/courseController");
const roleMiddlleware = require("../middlewears/roleMiddlleware");
const router = express.Router();


router.route("/").post(roleMiddlleware(["teacher","admin"]),courseControlller.createCourse);
router.route("/").get(courseControlller.getAllCourses);
router.route("/:slug").get(courseControlller.getCourse);
router.route('/enroll').post(courseControlller.enrollCourse);
router.route("/release").post(courseControlller.releaseCourse)
router.route("/:slug").delete(courseControlller.deleteCourse);
router.route("/:slug").put(courseControlller.releaseCourse);


module.exports =router;