// fungsi node js dibawah ini dibawah ini mengikuti tutorial di w3school

// const http = require('http');
// const dt = require('./logger');

// http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.write(testServer());
//     res.end();
// }).listen(8080);

// console.log('listening on port ....');

// 

// const http = require('http');

// http.createServer((req, res) => {

//     res.write('hello world');
//     res.end();

// }).listen(8080);


// var http = require('http');
// http.createServer(function (req, res) {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.write('Hello World!');
//     res.end();
// }).listen(8080);

// Read the Query String
// var http = require('http');
// http.createServer(function (req, res) {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.write(req.url);
//     res.end();
// }).listen(8080);



// kode dibawah ini untuk parsing URL
const http = require('http');
const url = require('url');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text-html' });
    const q = url.parse(req.url, true).query;
    const txt = q.year + '' + q.month;
    res.end(txt);
}).listen(8080)





