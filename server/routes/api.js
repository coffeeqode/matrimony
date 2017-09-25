const express = require('express');
const router = express.Router();
const { Pool, Client } = require('pg')

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'matrimonial',
  password: 'sandesh',
  port: 5432,
})


/* GET api listing. */
router.get('/', (req, res) => {
  console.log("Invoked default")
  res.send('api works');
});

router.get('/db', (req, res) => {

  console.log("Invoked DB path")

  var result;
  /*  pool.query('SELECT * FROM "user".user_detail', (err, res1) => {
      console.log(res.rowCount, res1.rows[0])
      result = res1.rows[0].doc;
      pool.end()
  
  
      result.last_name = "Patil 2"
      res.send(result);
  
  
    })
  */

  var user = { "last_name": "Nawale", "first_name": "Snehal" };

  pool.query('INSERT INTO "user".user_detail( user_first_name, user_last_name,  doc) VALUES ($1,$2,$3)',
    ['Snehal', 'Nawale', user], (err, res1) => {
      console.log(res1)
      pool.end()

      res.send("Insert Complete");

    }
  );





})



module.exports = router;