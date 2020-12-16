const http = require('http');
const app = require('express')();

const PORT = 4001;
const HOST = '127.0.0.1';

const TARGET_HOST = '127.0.0.1';
const TARGET_PORT = 4002;

app.get('/', (request, response) => {
    console.log("Hit web-api");
    
    const options = {
        hostname: TARGET_HOST,
        port: TARGET_PORT,
        method: 'GET'
    };

    const serviceRequest = http.request(options, function (serviceResponse) {
        let data = '';

        serviceResponse
            .setEncoding('utf8')
            .on('data', function (chunk) {
                data += chunk;
            })
            .on('end', function () {
                response.send(data);                // Actual response
            });
    });

    serviceRequest.on('error', function (error) {
        console.log(`Error: ${error.message}`);
    });

    serviceRequest.end();
});

app.listen(PORT, HOST, () => {
    console.log(`Web API is listening on http://${HOST}:${PORT}`);
});