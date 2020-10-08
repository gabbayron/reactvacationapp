const mysql = require('mysql');

let db = mysql.createConnection(process.env.JAWSDB_URL || {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'vacations_project'
});


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