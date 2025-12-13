const express = require('express');
const router = express.Router();


router.get('/users/:id/payment', (req, res) => {
  const userID = req.params.id;
  const filter = req.query.filter;
  console.log('Payment done');
    res.send(`User ID is ${userID} and filter is ${filter}`);
});

module.exports = router;



