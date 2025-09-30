const http = require('http');
const fs = require('fs');
const port = 8081;

const HandleRequest = (req,res) => {
    let filename = '';

    switch(req.url)
    {
        case '/' :
            filename = './index.html';
            break;
        case '/home' :
            filename = './home.html';
            break;
        case '/about' :
            filename = './about.html';
            break;
        case '/contact' :
            filename = './contact.html';
            break;
        case '/blog' :
            filename = './blog.html';
            break;
        default :
            filename = './404.html';
            break;
    }

    fs.readFile(filename,(err,result) => {
        if(!err) {
            res.end(result);
        }
    })
}

const server = http.createServer(HandleRequest);

server.listen(port,(err) => {
    if(!err) {
        console.log("Server Start.");
        console.log('http://localhost:' + port);
    }
})