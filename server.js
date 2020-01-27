var path = require('path');
var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var ROOT = path.normalize(__dirname + '/../');

app.use('/', express.static(ROOT + 'build', {
    // maxAge: 86400000
}));

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.post('/', (req, res, next) => { res.send('{"success": true}')})

app.listen(PORT, function () {
    console.log('Frontend server listening on port ' + PORT);
});
