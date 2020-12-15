// Upstream

const app = require('express')();

const PORT = 7000;
const HOST = '127.0.0.1';

app.get('/', (req, res) => {
    console.log(`Get`);
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

app.listen(PORT, HOST, () => {
    console.log(`Service is listening on port ${PORT}`);
});