var express        = require('express');
var todoController = require('./controllers/todoController');
var app     = express();
var port    = 3000;

//setup template engine
app.set('view engine', 'ejs');

//static files, every route put into the URL bar will look in ./public
app.use(express.static('./public'));

//fire controllers
todoController(app);

//listen to port
app.listen(port);
console.log(`You are listening on port ${port}`);
