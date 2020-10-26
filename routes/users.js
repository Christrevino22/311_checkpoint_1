const express = require('express')
const router = express.Router();
const users = require('../data/index')

// need to make a GET to get all users
router.get('/users', (req, res) =>{
  res.json(users)
})
//need to be able to get users by ID
router.get('/users/:id', (req, res) => {
  res.json(users.find(user => user.id == req.params.id))
})

router.post('/users', (req, res) => {
  let newUsers = req.body;
  newUsers.id = 1;

  users.map(user => {
  user.id = user.id + 1;
  })
  users.push(payload)
  res.json(users)
})

router.put('/users/:id', (req, res) => {
  let userId = parseInt(req.params.id);
  let payload = req.body;
  // need to look a user up
  let user = users.find(user => user.id === userId)

  //change the values on a user
  Object.keys[payload].map(key => {
    user[key] = payload[key];
  });
  res.json(user)

  //change value on user
})

module.exports = router;