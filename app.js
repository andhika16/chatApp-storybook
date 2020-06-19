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


// Node js file system from w3school


const http = require('http');
const fs = require('fs');

// http.createServer((req, res) => {

//     fs.readFile('./demoFile1.html', (err, data) => {
//         res.writeHead(200, { 'Content-Type': 'Text/html' });
//         res.write(data);
//         return res.end();
//     })

// }).listen(8080);


// const fs = require('fs');

fs.appendFile('newFile1.txt', 'Hello content', (err) => {
    if (err) throw err;
    console.log('saved!');
});


fs.open('newFile2.txt', 'w', (err, file) => {
    if (err) throw err;
    console.log('Saved!');
});
let txt = 'halo nama saya andhika saya dari ponorogo saya seorang web developer dan impian saya menjadi founder dari profil desa.com';


fs.writeFile('newFile2.txt', txt, err => {
    if (err) throw err;
    console.log('Saved!');

});

fs.appendFile('newFile2.txt', txt, (err) => {
    if (err) throw err;
    console.log('Saved!');

})


fs.unlink('newFile2.txt', (err) => {
    if (err) throw err;
    console.log('File Deleted !');

})

