const http = require('http');

http.createServer((request, response) => {
    
    // response.end('hello world, I am Local Sercer...!!!!');
    let json ={
        name : "sanam",
        sname : "mulla"
    }

    response.end(JSON.stringify(json));

}).listen(5500);