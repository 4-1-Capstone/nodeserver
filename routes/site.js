const express = require('express');
const router = express.Router();
const { getAllAnimations, getSitesByAnimation, getFilteredSites, getTagsBySite } = require('../controllers/SiteController');

router.use(express.json()); // POST 요청에서 JSON 형식의 데이터를 처리할 수 있게 함

router.get('/animations', getAllAnimations);
router.get('/sites/:ani_idx', getSitesByAnimation);
router.get('/filtered-sites/:user_idx', getFilteredSites);
router.get('/tags/:site_idx', getTagsBySite);

module.exports = router;