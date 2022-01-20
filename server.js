//requiring http
const http = require('http');
//requiring eventlistener
let {requestListener} = require('./callbackFunction.js');
//defining port
const PORT = process.env.PORT || 3000;

//creating server
const server = http.createServer(requestListener);

//hooking local interface to loacal server 4001
server.listen(PORT, () => {
    console.log(`Server runing on port: ${PORT}`);
});