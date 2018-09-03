var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.use('/assets', express.static('./assets/'));
app.use('/elephant',   express.static('./temp/'));

app.get(`/`,function(req, res){
  res.render(`index`);
});

app.get('/contact', function(req, res){
  res.render('contact',{queryString: req.query});
});

app.get('/profile/:name', function(req, res){
  var data = {age: 29, job: 'burger flipper', hobbies: ['harassing', 'eating', 'robbing']};
  res.render(`profile`,{person: req.params.name, data: data});
});
app.listen(801);
