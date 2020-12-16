const express = require('express')();

const PORT = 3000;
const HOST = '127.0.0.1';

express.get('/', function (request, response) {
    response.send(`Hit GET`);
});

express.listen(PORT, HOST, function () {
    console.log(`Web API is listening on port ${PORT}`);
});