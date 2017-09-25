
const { Pool, Client } = require('pg')

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'mydb',
  password: 'sandesh',
  port: 5432,
})

pool.query('SELECT * FROM public.first_table', (err, res) => {
  //console.log(err, res)
  console.log(res.rowCount,res.rows[0] )
  pool.end()
})
/*
const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'mydb',
  password: 'sandesh',
  port: 5432,
})
client.connect()

client.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  client.end()
})*/