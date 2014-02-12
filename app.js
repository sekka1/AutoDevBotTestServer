/**
 * AutoDevBot.com Test Monitoring Server
 *
 * This server is used for a test endpoint for AutoDevBot.com to monitor against.
 *
 */

var http    = require('http'),
    express = require('express');

var PORT = process.env.PORT || 8080,
    HOST = process.env.HOST || '0.0.0.0';

var app = express();
app.use(express.bodyParser());

//
// Configure routes
//

/**
 *
 */
app.get('/sample', function (req, res) {


    var returnObj = new Object();

    returnObj.user_name = 'John Smith';
    returnObj.has_credit_card = true;
    returnObj.age = 2;

    res.json(returnObj);
});

app.post('/sample', function (req, res) {


    var returnObj = new Object();

    returnObj.status = 'success';

    if( req.body.user_name == undefined)
        returnObj.status = 'failed';
    if( req.body.age == undefined)
        returnObj.status = 'failed';

    res.json(returnObj);
});

//
// Create HTTP server
//
server = http.createServer(app);

server.listen(PORT, HOST, null, function() {
    console.log('Server listening on port %d in %s mode', this.address().port, app.settings.env);
});