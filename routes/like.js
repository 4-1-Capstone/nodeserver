const express = require('express');
const router = express.Router();
const { addFavorite, addDislike } = require('../controllers/LikeController');

router.use(express.json()); // POST는 값이 필요해서 이거 해줌

// 좋아요 추가 엔드포인트
router.post('/favorite', addFavorite);

// 싫어요 추가 엔드포인트
router.post('/dislike', addDislike);

module.exports = router;