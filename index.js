var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.set('port', (process.env.PORT || 5000));
app.use(express.static('public'))

app.post('/phish', (req, res) => {
	res.send('You sent the  code: ' + req.body.Code + " !");
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
