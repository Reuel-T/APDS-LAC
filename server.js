
const app = require('./backend/app');
const debug = require("debug")("node-angular");
const http = require('https');
const fs = require('fs');

const server = http.createServer(
    {
        key:  fs.readFileSync('./keys/privatekey.pem'),
        cert: fs.readFileSync('./keys/certificate.pem') 
    }, app
);

console.log('Server Created');

const port = (process.env.PORT || 3000);

app.set('port', port);

server.listen(port);

console.log(`Server listening on PORT: ${port}`);