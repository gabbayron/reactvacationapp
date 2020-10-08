const mysql = require('mysql');

let db;

if (process.env.JAWSDB_URL) {
    mysql.createConnection(process.env.JAWSDB_URL)
} else {
    db = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'vacations_project'
    });
}

db.connect(err => {
    if (err) return console.log(err);
    console.log('DB Connected')
})

let Query = (q, params) => {
    return new Promise((resolve, reject) => {
        db.query(q, params, (err, result) => {
            if (err) {
                reject(err)
                console.log(err)
            } else {
                resolve(result)
            }
        })
    })
}

module.exports = Query