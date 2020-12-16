const fastify = require('fastify')();

const PORT = 3001;
const HOST = '127.0.0.1';

fastify.listen(PORT, HOST, function () {
    console.log(`Fastify server running at port ${PORT}`);
});