const express = require('express');
const router = express.Router();
const conn = require('../mariadb');
const {StatusCodes} = require('http-status-codes');
const {getAllAnimations,getSitesByAnimation} = require("../controllers/SiteController");
router.use(express.json()); //post는 값이 필요해서 이거 해줌

router.get('/animations', getAllAnimations);

router.get('/sites/:ani_idx', getSitesByAnimation);

router.get('/filtered-sites/:user_idx', getFilteredSites);

module.exports = router;