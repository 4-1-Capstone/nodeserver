const  mariadb = require('mysql2');

const connection = mariadb.createConnection({
    host : '127.0.0.1',
    user : 'root',
    password : 'isekai00',
    database : 'isekai',
    dateStrings : true,
    port : 19991
});

module.exports = connection;