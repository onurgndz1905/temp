const express = require("express")

const categoryControlller = require("../controllers/categoryController");

const router = express.Router();


router.route("/").post(categoryControlller.createCategory);



module.exports =router;