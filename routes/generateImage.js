const express = require('express');
const router = express.Router();
const { generateImage } = require('../controllers/promptController');

router.get('/', generateImage);

module.exports = router;