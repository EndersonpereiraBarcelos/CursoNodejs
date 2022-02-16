const http = require('http');
const { stringify } = require('querystring');
const port = 4000;

const server = http.createServer((req, res) => {
    if (req.url === '/home') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Hello world krl</h1>');
    }

    if (req.url === '/users') {
        const users = [
            {
                name: 'Jhony shelby',
                email: 'ltdashelby@hotmail.com',
            },
            {
                name: 'Jhony shelddadby',
                email: 'lLLtdashelby@hotmail.com',
            },
        ];
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(users));
    }
});

server.listen(port, () => console.log(`rodando na porta ${port}!`));
