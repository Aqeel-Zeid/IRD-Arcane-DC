function runExpressServer(applicationFolderPath) {

    var express = require('express')
    var cors = require('cors')

    var express_app = express();
    var bodyParser = require('body-parser');


    express_app.use(cors());
    //start body-parser configuration
    express_app.use(bodyParser.json());       // to support JSON-encoded bodies
    express_app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
        extended: true
    }));
    //end body-parser configuration

    //app.engine('jade', require('jade').__express)
    //app.set('view engine', 'jade')

    //app.use(express.static(__dirname + '/public'))
    //app.use(require('./middlewares/users'))
    express_app.use(require('./Controllers/index'))

   express_app.locals.folderPath = applicationFolderPath

    express_app.listen(5000, function () {
        console.log('Listening on port 5000...' , applicationFolderPath)
    })
}

module.exports = runExpressServer
