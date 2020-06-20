// // kode dibawah ini untuk parsing URL
// const http = require('http');
// const url = require('url');

// http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text-html' });
//     const q = url.parse(req.url, true).query;
//     const txt = q.year + " " + q.month;
//     res.end(txt);
// }).listen(8080)

// console.log('menjalankan server...8080');

// URL module w3school

// const url = require('url');
// const adr = 'http://localhost:8080/default.htm?year=2020&month=juni'
// const q = url.parse(adr, true);


// console.log(q.host);
// console.log(q.pathname);
// console.log(q.search);

// const qdata = q.query;
// console.log(qdata.year);

// const http = require('http');
// const fs = require('fs');
// const url = require('url');

// const uc = require('upper-case')

// http.createServer((req, res) => {
//     const q = url.parse(req.url, true);
//     const fileName = `.${q.pathname}`;
//     fs.readFile(fileName, (err, data) => {
//         if (err) {
//             res.writeHead(404, { 'Content-Type': 'text-html' });
//             return res.end('404 Not Found!');
//         }
//         res.writeHead(200, { 'Content-Type': 'text-html' });
//         res.write(data);
//         return res.end();
//     });
// }).listen(8080);
let txt = `halo david disini saya akan mereview samsung note 10 dengan performa yang gahar dan legit`
// http.createServer((req, res) => {
//     res.writeHead(404, { 'Content-Type': 'text-html' });
//     res.write(uc.upperCase(txt));
//     res.end();

// }).listen(3000);


// Event emitter node js w3school


const http = require('http');
const fs = require('fs');
const url = require('url');

http.createServer((req, res) => {
    const q = url.parse(req.url, true);
    const fileName = `./${q.pathName}`;
    fs.readFile(fileName, (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'Text-Type' });
            console.log('404 Not Found !');

        }
        res.writeHead(200, { 'Content-Type': 'Text-Type' });
        res.write(data);
        res.end();
    })

}).listen(3000);
console.log('listening server 3000....');
