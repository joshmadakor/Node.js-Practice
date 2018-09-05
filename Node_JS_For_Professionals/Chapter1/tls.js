/* Generate Certificate:
    wget https://raw.githubusercontent.com/anders94/https-authorized-clients/master/keys/ca.cnf
    openssl req -new -x509 -days 9999 -config ca.cnf -keyout ca-key.pem -out ca-cert.pem
    openssl genrsa -out key.pem 4096
    wget https://raw.githubusercontent.com/anders94/https-authorized-clients/master/keys/server.cnf
    openssl req -new -config server.cnf -key key.pem -out csr.pem
    openssl x509 -req -extfile server.cnf -days 999 -passin "pass:password" -in csr.pem -CA cacert.pem -CAkey ca-key.pem -CAcreateserial -out cert.pem
    Install ca-crt into trusted root store.
*/

var https = require('https');
var fs    = require('fs');

var httpsOptions = {
  key:  fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
};

var app = function (request, response) {
  response.writeHead(200);
  response.end('Hello Earth\n');
}

https.createServer(httpsOptions, app).listen(4433);
