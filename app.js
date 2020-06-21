const http = require('http');
const formidable = require('formidable')
const fs = require('fs');
// const formHtml = `<form action="belajarNodeJs" method="post" enctype="multipart/form-data">
//                     <input type="text" name="filetoupload" id=""><br>
//                     <input type="submit">
//                     </form>
//                     `






http.createServer(function (req, res) {
    if (req.url == './belajarNodeJs') {
        const form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files) {
            const oldpath = files.filetoupload.path;
            const newpath = 'D:/pindahan data C/Documents/sinau web' + files.filetoupload.name;
            fs.rename(oldpath, newpath, function (err) {
                if (err) throw err;
                res.write('File uploaded and moved!');
                res.end();
            });
        });
    } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<form action="belajarNodeJs" method="post" enctype="multipart/form-data">');
        res.write('<input type="file" name="filetoupload"><br>');
        res.write('<input type="submit">');
        res.write('</form>');
        return res.end();
    }
}).listen(8080);