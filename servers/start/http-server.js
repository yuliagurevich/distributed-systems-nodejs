const http = require('http');

const PORT = 3002;
const HOST = '127.0.0.1';

server.listen({
    host: HOST,
    port: PORT
}, function () {
    console.log(`HTTP server running at ${HOST}:${PORT}`);
});