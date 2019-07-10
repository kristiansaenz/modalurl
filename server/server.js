const express = require('express')


var cors = require('cors');
const fetch = require('node-fetch');
var https = require('https');
var http = require('http');

const app = express()
const port = 5000



// console.log that your server is running
app.listen(port, () => console.log(`Listening on port ${port}`));

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}

app.get('/me', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.send({
        status: 'Its connected!!',
    });
    next()
  });

// // GET route
//     app.get('/cocoturtles', (req, res) => {
//     res.send({status});
// });


