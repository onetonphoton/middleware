var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello Express');
});

app.get('/about', function (req, res){
  res.send('hi there');
})

app.use(express.static(__dirname + '/public'))

app.listen(3000);
