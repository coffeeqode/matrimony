const express = require('express');
const router = express.Router();
const faker = require('faker');
const user = require('../user');
const db = require('../db/dbApi')


/* GET api listing. */
router.get('/', (req, res) => {
  console.log("Invoked default")
  res.send('api works');
});

router.get('/db/saveuser', (req, res) => {
  console.log("Invoked saveuser")
  var user = { "last_name": "Nawale", "first_name": "Snehal" };

  db.query('INSERT INTO "user".user_detail( user_first_name, user_last_name,  doc) VALUES ($1,$2,$3)',
    ['Snehal', 'Nawale', user], (err, res1) => {
      console.log(res1)
      res.send("Insert Complete: " + JSON.stringify(user));
    }
  );

})


router.get('/db/savefaker', (req, res) => {
  console.log("Invoked savefaker")

  var u = new user.User(faker.internet.userName(), faker.internet.email(), faker.internet.password(),
    faker.name.firstName(), faker.name.lastName(), faker.date.future(), "Unmarried", faker.name.jobArea,
    faker.address.city(), faker.address.country(), faker.phone.phoneNumber());

  db.query('INSERT INTO "user".user_detail( user_first_name, user_last_name,  doc) VALUES ($1,$2,$3)',
    [u.first, u.last, u], (err, res1) => {
      console.log(res1)
      res.send("Insert Complete: " + JSON.stringify(u));
    }
  );

})



module.exports = router;