const express = require('express');
const viewController = require('../controllers/viewController');
const authController = require('../controllers/authController')
const router = express.Router();

// router.use(authController.isLoggedIn);
router.get('/',viewController.getOverview);
router.get('/medicine/:slug',viewController.getMedicine);
router.get('/login',viewController.getLoginForm);
router.get('/signup',viewController.getSignupForm);

module.exports= router;
