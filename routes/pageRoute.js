const express = require("express")

const pageController = require("../controllers/pagecontrols");
const redirectMiddleware = require("../middlewears/redictMiddleware");

const router = express.Router();

router.route("/").get(pageController.getIndexPage);
router.route("/about").get(pageController.getAboutPage) 
router.route("/register").get(redirectMiddleware,pageController.getRegisterPage)
router.route("/login").get(redirectMiddleware,pageController.getLoginPage) 
router.route('/contact').get(pageController.getContactPage);
router.route('/contact').post(pageController.sendEmai);


module.exports =router;