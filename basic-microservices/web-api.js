// Downstream

const app = require('express')();

const PORT = 6000;
const HOST = '127.0.0.1';

const TARGET = '127.0.0.1:7000';

app.get('/users', (request, response) => {

});

app.listen(PORT, HOST, () => {
    console.log(`Web API is listening on port ${PORT}`);
});