const FileAndFolderHelper = require("../helpers/FileAndFolderHelper.js")

const express = require('express')
, router = express.Router()


  router.get('/testRoute1', (req, res) => {
    //console.log(req.app.locals.folderPath)
    res.send('Test Route Folder Path = ' + req.app.locals.folderPath ).status(200);
  })

  router.get('/getBuiltReactApp', (req, res) => {
    console.log(''+__dirname)
    res.sendFile(path.join(__dirname, '../../', 'index.html'));
  })


module.exports = router