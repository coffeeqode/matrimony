
const { Pool } = require('pg')

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'matrimonial',
    password: 'sandesh',
    port: 5432,
})

var query = function (text, params, callback) {
    return pool.query(text, params, callback)
}

 
module.exports.query = query;