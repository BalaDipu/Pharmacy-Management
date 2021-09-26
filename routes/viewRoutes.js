const express = require('express');
const viewController = require('../controllers/viewController');
const router = express.Router();


router.get('/',viewController.getOverview);
router.get('/medicine/:slug',viewController.getMedicine);

module.exports= router;
