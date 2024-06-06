const express = require('express');
const router = express.Router();
const { updatePrompt } = require('../controllers/promptController');

router.post('/', updatePrompt);

module.exports = router;

////
