const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.contentType('application/html');
    res.status(200).send('<h1>Hello world express</h1>');
});

app.get('/users', (req, res) => {
    const users = [
        {
            name: 'Enderson',
            email: 'souza2123',
        },
        {
            name: 'Scytheer',
            email: 'scytheer2121',
        },
    ];
    res.status(200).json(users);
});

const port = 8000;

app.listen(port, () => console.log(`Rodando na porta ${port}!`));
