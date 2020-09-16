const FileAndFolderHelper = require("../helpers/FileAndFolderHelper.js")

const express = require('express')
, router = express.Router()


  router.get('/testRoute1', (req, res) => {
    //console.log(req.app.locals.folderPath)
    FileAndFolderHelper.initializeAppFolderStructure(req.app.locals.folderPath);
    res.send('Test Route Folder Path = ' + req.app.locals.folderPath ).status(200);
  })



module.exports = router