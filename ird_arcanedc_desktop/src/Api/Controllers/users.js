
const express = require('express')
, router = express.Router()

// Define routes handling profile requests

//User Login 
  router.post('/loginLeadCoordinator', (req, res) => {
    let {username , password } = req.body;
    res.send(`Login in ${username} with password ${password}`).status(200);
  })


  //Create User 
  router.post('/createLeadCoordinator', (req, res) => {
    //Return Status and The User JSON Object
    res.send('Login User Route').status(200);
  })
  

  //Get Lead Coordinator 
  router.post('/getLeadCoordinator', (req, res) => {
    //Return All info of Lead Coordinatior exept his password
    res.send('Login User Route').status(200);
  })

  //Update Recovery Key Password
  router.patch('/updateRecoveryPassword', (req, res) => {
    //Return All info of Lead Coordinatior exept his password
    res.send('Login User Route').status(200);
  })

  //UpdatePassword
  router.patch('/updatePassword', (req, res) => {
    //Return All info of Lead Coordinatior exept his password
    res.send('Login User Route').status(200);
  })


  //Update User Info 

  //Delete User

  //Send Password Recovery Email

module.exports = router