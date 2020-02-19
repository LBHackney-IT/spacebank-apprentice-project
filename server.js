var path = require('path');
var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var ROOT = path.normalize(__dirname + '/');

app.use('/', express.static(ROOT + 'build'));

app.listen(PORT, function () {
    console.log('Frontend server listening on port ' + PORT);
});
