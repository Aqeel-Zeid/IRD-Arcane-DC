
const express = require('express')
, router = express.Router()


  router.get('/testRoute1', (req, res) => {
    console.log(__dirname)
    res.send('Test Route').status(200);
  })



module.exports = router