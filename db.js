const mysql = require('mysql2');

//MySQl Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'testnodedb'
});

//Check MySQl Connection
db.connect((err) => {
    if (err) {
        console.error('MySQl Connection Failed', err);
    } else {
        console.log('Connected to MySQl Database');
    }
});

module.exports = db;