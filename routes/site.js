const express = require('express');
const router = express.Router();
const { getAllAnimations, getSitesByAnimation, getFilteredSites, getTagsBySite } = require('../controllers/SiteController');

router.use(express.json()); // POST는 값이 필요해서 이거 해줌

router.get('/animations', getAllAnimations);
router.get('/sites/:ani_idx', getSitesByAnimation);
router.get('/filtered-sites/:user_idx', getFilteredSites);
router.get('/tags/:site_idx', getTagsBySite);

module.exports = router;