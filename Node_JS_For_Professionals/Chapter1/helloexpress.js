const express = require('express'); //Import express module
const app     = express();          //Create express app
const port    = 1111;               //Port number

app.get('/', function(request, response){
  response.send('Hello Earth [express version].');
});

app.listen(port, function(){
  debugger;
  console.log(`Server listening on port ${port}.`);
})
