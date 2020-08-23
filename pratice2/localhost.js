
let host = require('http');

host.createServer((req, resp) => {
    let json = {
        fname:"sanam",
        lname:"mulla",
        state:"MH"
    };

    resp.end(JSON.stringify(json));

}).listen(5500);
