const express = require('express')
const authController = require('../controllers/authController');
const authMiddleware = require("../middlewears/authmiddlleweare")
const router = express.Router();

router.route('/signup').post(authController.createUser); // http://localhost:4000/users/signup
router.route('/login').post(authController.loginUser)
router.route('/logout').get(authController.logoutUser)
router.route('/dashboard').get(authMiddleware,authController.getDashboardPage)

module.exports = router;