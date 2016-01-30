var express = require("express");
var app = express();

app.use('/', function(req, res) {
    console.log('Hey it works');
    res.send({ msg: 'Cool'});
    res.end();
});

app.listen(process.env.PORT);