const express = require('express')
  , router = express.Router()

//router.use('/comments', require('./comments'))
router.use('/users', require('./users'))

router.get('/', (req, res) => {
  res.send('sdsds').status(200);
})

module.exports = router