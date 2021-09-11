const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.write('welcome to the home page');
    }
    else if (req.url == '/course'){
        res.write(JSON.stringify(['Node', 'React', 'Bootstrap']));
    } else {
        res.write('page not found');
    }
    res.end();
});

server.on('connection', () => {
    console.log('New Connection')
});

server.listen(4000);

console.log('Listening on port 4000')