const conn = require('../mariadb');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const ctypto = require('crypto'); //암호화
dotenv.config();
const {StatusCodes} = require('http-status-codes');
// 좋아요 추가 함수
const addFavorite = (req, res) => {
    const { user_idx, site_idx } = req.body;

    let sql = 'INSERT INTO Favorites (user_idx, site_idx) VALUES (?, ?)';
    let values = [user_idx, site_idx];

    conn.query(sql, values, (err, results) => {
        if (err) {
            console.log(err);
            return res.status(StatusCodes.BAD_REQUEST).end(); // BAD REQUEST
        }
        
        res.status(StatusCodes.CREATED).json(results); // SUCCESS
    });
};

// 싫어요 추가 함수
const addDislike = (req, res) => {
    const { user_idx, site_idx } = req.body;

    let sql = 'INSERT INTO Dislikes (user_idx, site_idx) VALUES (?, ?)';
    let values = [user_idx, site_idx];

    conn.query(sql, values, (err, results) => {
        if (err) {
            console.log(err);
            return res.status(StatusCodes.BAD_REQUEST).end(); // BAD REQUEST
        }
        
        res.status(StatusCodes.CREATED).json(results); // SUCCESS
    });
};

module.exports = {
    addFavorite,
    addDislike
};