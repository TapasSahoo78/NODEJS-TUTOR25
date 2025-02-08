const http = require('http');
const connection = require('./db')
const PORT = 5000;

//Insert data into table
const insertUser = (name, email) => {
    const sql = `INSERT INTO users (name,email) VALUES (?,?)`;
    connection.query(sql, [name, email], (err, result) => {
        if (err) {
            console.error('Insert Failed', err);
        } else {
            console.log('User Added Successfully', result.insertId);
        }
    })
}

//Fetch data into table
const fetchUsers = () => {
    const sql = `SELECT * FROM users`;
    connection.query(sql, (err, result) => {
        if (err) {
            console.error('Fetch Failed', err);
        } else {
            console.log('Users List', result);
        }
    })
}

//Update user email
const updateUser = (id, newMail) => {
    const sql = `UPDATE users SET email = ? WHERE id = ?`;
    connection.query(sql, [newMail, id], (err, result) => {
        if (err) {
            console.error('Update Failed', err);
        } else {
            console.log('User updated successfully');
        }
    })
}

//Delete a user
const deleteUser = (id) => {
    const sql = `DELETE FROM users WHERE id = ?`;
    connection.query(sql, [id], (err, result) => {
        if (err) {
            console.error('Delete Failed', err);
        } else {
            console.log('User deleted successfully');
        }
    })
}


// insertUser('John doe', 'johndoe@gmail.com');
// updateUser(1, "abc@gmail.com");
deleteUser(1);
fetchUsers();

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'content-type': 'text/plain' });
    res.end('Server is running');
});

//Server Listen
server.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
})