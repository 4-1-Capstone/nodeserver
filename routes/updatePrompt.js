const express = require('express');
const router = express.Router();
const { updatePrompt } = require('../controllers/promptController');
//const {}

router.post('/', updatePrompt);

module.exports = router;

////
