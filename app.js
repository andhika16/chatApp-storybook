// const log = require('./logger');

// log('andhika');


// const url = require('./logger')

// url('HTTP://google.com');

// kode dibawah salah satu dari dokumentasi untuk melakukan suatu path folder dan berbagai fungsi lainya

// const path = require('path');



// const directory = path.parse(__filename);

// console.log(directory);

// kode dibawah ini untuk menampilkan total memory

// const os = require('os');

// const freeMemory = os.freemem();
// const totaMemory = os.totalmem();


// console.log(freeMemory);
// console.log(totaMemory);

// kode dibawah ini untuk menampilkan isi folder yang dibuka sekarang metode asynchronus

// const fs = require('fs');

// const inifile = fs.readdirSync('./');

// console.log(inifile);

// 

// const hasil = fs.readdir('./', function (err, res) {

//     if (res) console.log("Hasil : ", res);
//     else console.log("Error : ", err);


// })


// console.log(hasil);


// const EventEmmiter = require('events');
// const Logger = require('./logger');


// const logger = new Logger;

// logger.on('messageLogged', (e) => {
//     console.log('message received', e);
// });

// logger.log('hallo');


// kode dibawah ini hanya mengulang kode diatas

// const Called = require('./logger');

// const called = new Called;


// called.on('turnOn', e => console.log('Running on port :', e));

// called.call(200);



const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('<h1>Welcome</h1>');
        res.end();
    }
    if (req.url === '/api/courses') {
        res.write(JSON.stringify([nama = "andhika", email = "moh.andhika16@gmail.com", nim = 19533080]));
        res.end();
    }
}).listen(3000);
console.log('Listening on port 3000..');










