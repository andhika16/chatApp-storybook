const fs = require('fs');
// this how to create read write and delete the file system
// reading file
// fs.readFile('./docs/blog1.txt', (err, data) => {
//     if (err) console.log(err);
//     console.log(data.toString());
// })
// writing file

// const txt = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam maxime beatae earum molestiae tempore porro facere rerum impedit voluptatum magni dolore, fugit velit deserunt, dolorum in iste necessitatibus, ipsum natus.'
// if (!fs.existsSync('./docs/blog1.txt')) {
//     fs.writeFile('./docs/blog1.txt', txt, () => {
//         console.log('file was written');
//     });
// } else {
//     fs.unlink('./docs/blog1.txt', () => {
//         console.log('file deleted');
//     });

// }

// // directory 
// if (!fs.existsSync('./assets')) {
//     fs.mkdir('./assets', (err) => {
//         if (err) {
//             console.log(err);
//         }
//         console.log('file created');
//     });

// } else {
//     fs.rmdir('./assets', () => {
//         console.log('file deleted !');

//     })
// }


