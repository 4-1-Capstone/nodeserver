const conn = require('../mariadb');
const { StatusCodes } = require('http-status-codes');

// 기존 getAllAnimations 함수
const getAllAnimations = (req, res) => {
    let sql = 'SELECT * FROM Animation';
    
    conn.query(sql, (err, results) => {
        if (err) {
            console.log(err);
            return res.status(StatusCodes.BAD_REQUEST).end(); // BAD REQUEST
        }
        
        res.status(StatusCodes.OK).json(results); // SUCCESS
    });
};

// ani_idx로 여행지 조회 함수
const getSitesByAnimation = (req, res) => {
    const ani_idx = req.params.ani_idx;
    let sql = 'SELECT * FROM Site WHERE ani_idx = ?';
    
    conn.query(sql, [ani_idx], (err, results) => {
        if (err) {
            console.log(err);
            return res.status(StatusCodes.BAD_REQUEST).end(); // BAD REQUEST
        }
        
        res.status(StatusCodes.OK).json(results); // SUCCESS
    });
};

// user_idx로 좋아요 및 싫어요 제외한 여행지 조회 함수
const getFilteredSites = (req, res) => {
    const user_idx = req.params.user_idx;
    
    let sql = `
        SELECT * FROM Site 
        WHERE idx NOT IN (
            SELECT site_idx FROM Favorites WHERE user_idx = ?
            UNION
            SELECT site_idx FROM Dislikes WHERE user_idx = ?
        )
    `;
    
    conn.query(sql, [user_idx, user_idx], (err, results) => {
        if (err) {
            console.log(err);
            return res.status(StatusCodes.BAD_REQUEST).end(); // BAD REQUEST
        }
        
        res.status(StatusCodes.OK).json(results); // SUCCESS
    });
};

// site_idx로 태그 조회 함수
const getTagsBySite = (req, res) => {
    const site_idx = req.params.site_idx;
    let sql = 'SELECT tags FROM Tags WHERE site_idx = ?';
    
    conn.query(sql, [site_idx], (err, results) => {
        if (err) {
            console.log(err);
            return res.status(StatusCodes.BAD_REQUEST).end(); // BAD REQUEST
        }
        
        res.status(StatusCodes.OK).json(results); // SUCCESS
    });
};

module.exports = {
    getAllAnimations,
    getSitesByAnimation,
    getFilteredSites,
    getTagsBySite
};