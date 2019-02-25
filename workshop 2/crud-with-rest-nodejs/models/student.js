const mysql = require('mysql');

connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'progra',
});

let studentModel = {};

studentModel.read = (callback) => {
    if (connection) {
        connection.query('SELECT * FROM students ORDER BY id',
        (err, rows) => {
            if (err) {
                throw err;
            } else {
                callback(null, rows);
            }
        });
    }
};

studentModel.create = (data, callback) => {
    if (connection) {
        connection.query('INSERT INTO students SET ?', data, 
        (err, res) => {
            if (err) {
                throw err;
            } else {
                console.log(res);
                callback(null, {id: res.insertId});
            }
        });
    }
};

studentModel.update = (data, callback) => {
    if (connection) {
        const sql = `
            UPDATE students SET 
            firstname = ${connection.escape(data.firstname)},
            lastname = ${connection.escape(data.lastname)},
            email = ${connection.escape(data.email)},
            address = ${connection.escape(data.address)}
            WHERE id = ${connection.escape(data.id)}
        `;
        connection.query(sql, (err, res) => {
            if (err) {
                throw err;
            } else {
                callback(null, {success: 'true'});
            }
        });
    }
};

studentModel.delete = (id, callback) => {
    if (connection) {
        const sql = `
        DELETE FROM students`
    }
};

module.exports = studentModel;
