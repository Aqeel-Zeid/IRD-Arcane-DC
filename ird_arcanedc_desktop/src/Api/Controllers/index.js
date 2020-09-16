const express = require('express')
  , router = express.Router()

//router.use('/comments', require('./comments'))
router.use('/users', require('./users'))
router.use('/testRoutes', require('./testRouts'))




module.exports = router