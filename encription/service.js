const fs = require('fs');
const app = require('fastify')({
    https: {
        key: fs.readFileSync(__dirname + '/private/basic-private-key.key'),
        cert: fs.readFileSync(__dirname + '/public/basic-certificate.cert')
    }
});

const PORT = 4002;
const HOST = '127.0.0.1';

app.get('/', (req, res) => {
    res.send([
        {
            id: 1,
            name: "Katherin Turney"
        },
        {
            id: 2,
            name: "Jacob Nelson"
        }
    ]);
});

app.listen(PORT, HOST, function () {
    console.log(`Service is listening on https://${HOST}:${PORT}`);
});
