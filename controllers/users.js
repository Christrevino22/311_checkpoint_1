const users = require('../data/index')

const  listUsers = (req,res,next) => {
  res.send(users)
}


const showUser = (req,res,next) => {
  // getting the id and returning an integer
  let id = parseInt(req.params.id)
  // finding the user by id and showing the user
  let user = users.find(user => user.id === id)
  res.send(user)
}

const createUser = (req,res,next) => {
  //this is the user info or payload
  let payload = req.body
  //the id should always increment over previous id
  payload.id = users.length + 1
  //finally push the payload 
  users.push(payload)
  res.send(payload)
}

const updateUser = (req,res,next) => {
  // getting id again 
  let id = parseInt(req.params.id)
  //getting payload again 
  let payload = req.body
  // this time we need to find the user by FINDING the id's
  let user = users.find(user => user.id === id)
  // alottle merky
  Object.keys[payload].map(key => {
    user[key] = payload[key];
  });
  payload.id = users[id].id - 1
  res.send(users)
}

const deleteUser = (req,res,next) => {
  // same
 let id = parseInt(req.params.id)
 // again// this time only id
 let user = users.find(user => user.id === req.params.id)
  //splice on user id
 users.splice(user, 1)
 res.send(users)  
}

module.exports = {listUsers, showUser, createUser, updateUser, deleteUser};