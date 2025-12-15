const express = require('express');
const router = express.Router();


class User {
  constructor({name, age, address,location}){
    this.age = age;
    this.name = name;
    this.address = address;
    this.location = location
  }
}

router.get('/users/:id', (req, res) => {
  const userID = req.params.id;
  const filter = req.query.filter;

  if (userId!== "123") {
    return res.status(400).send(`user with ID ${userID} not found`);
  }
  
  res.send(`User ID is ${userID} and filter is ${filter}`);
});

router.post('/users', (req, res) => {
  // const{name, age}= req.body;
  // if(!name || !age){
  //   console.log('Invalid data');
  // }

  const user = new User(req.body);

  // if(!name || !age) {
  //   return res.status(400).json({error: "Name is required"});
  // }
  // const user = {name, age};
  res.status(201).json({
    message: "User created successfully",
    user: user
    })   
});
module.exports = router;