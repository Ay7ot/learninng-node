const http = require('http');

const port = 5000;

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.end('Welcome to our home page');
    }else if(req.url === '/about'){
        res.end('Here is out short history')
        return;
    }else {
        res.end(`
            <h1>Oops!</h1>
            <p>We can't seem to find the page you are looking for</p>
            <a href='/'>Go back home</a>
        `)
    }
})

server.listen(port)