import http from 'http';

const server = http.createServer();

server.listen(8080);

server.on('request', (req, res) => {
    res.write('hello http');
    setTimeout(() => {
        res.write('\nI can stream \n')
        res.end();
    }, 3000);
});

// console.log('hii')