const express = require('express')
const router = express.Router();
const controller = require('../controllers/users.js')

// need to make a GET to get all users
router.get('/users', controller.listUsers)
//need to be able to get users by ID
router.get('/users/:id', controller.showUser)
//make a post to find user by id then increment by 1
router.post('/users', controller.createUser)
//dont foorget to try sample user
router.put('/users/:id', controller.updateUser)
//be able to delete user by id
router.delete('/users/:id', controller.deleteUser)

module.exports = router;