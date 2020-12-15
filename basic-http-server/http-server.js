const http = require('http');

const PORT = 3002;
const HOST = '127.0.0.1';

const server = http.createServer(function (request, response) {
    if (request.method === 'GET' && request.url === '/echo') {
        response.end('Hit GET');
    }
})

server.listen({
    host: HOST,
    port: PORT
}, function () {
    console.log(`HTTP server running at port ${PORT}`);
});