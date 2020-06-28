// STREAM AND BUFFER
const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog2.txt', { encoding: "utf-8" });
const writeStream = fs.createWriteStream('./docs/blog4.txt');

// readStream.on('data', (chunk) => {

//     // console.log('---- NEW CHUNKS ----');
//     // console.log(chunk);

//     writeStream.write('\nNEW CHUNK\n');
//     writeStream.write(chunk);

// });

//  PIPING
readStream.pipe(writeStream)