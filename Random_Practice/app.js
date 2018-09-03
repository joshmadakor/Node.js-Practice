var express = require('express');
var app     = express();

app.get('/', function(req, res){
  res.send('This is the homepage.');
});
app.get('/contact', function(req, res){
  res.send('Wow, this is the contact page.');
});

app.get('/profile/:id', function(req, res){
  res.send(`Wow, this is a cool profile with id ${req.params.id}`);

});
app.listen(3000);
