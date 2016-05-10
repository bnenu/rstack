var express = require('express')

// load configuration
var env = process.env.NODE_ENV || 'dev';
var port = process.env.PORT || 8080;

var app = express();

// express settings
app.set('port', port);
app.set('view engine', 'html');
app.set('views', __dirname + '/dist/');
app.use(express.static('./dist'));
// routes
app.get('/', function (req, res) {
  return res.render('index',{});
});

// start server
app.listen(port, function () {
  console.log('Server running in ' + env + ' mode, on port ' + port);
});

module.exports.getapp = app;
