const http = require('http');
const fs = require('fs');

http.createServer(function (req, res){

    const fileReadStream = fs.createReadStream('./content/big.txt', { encoding: "utf-8"})
    fileReadStream.on('open', data=>{
        console.log("sending");
        fileReadStream.pipe(res);
    })
    fileReadStream.on('error', e => {
        res.end(e);
    })

}).listen(5000)
