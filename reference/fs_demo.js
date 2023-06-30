const fs = require('fs');
const path = require('path');

// create folder ((asyync))
fs.mkdir(path.join(__dirname, '/test'), {}, err => {
    if (err) throw err;
    console.log('Folder Created...');
});

// Create and write to file
fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello World!', err => {
    if (err) throw err;
    console.log('Folder Written to...');
    fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello World!', err => {
        if (err) throw err;
        console.log('Folder Written to...');

    });
});

// Reade file, utf8 converts raw buffer to actual data
fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});

// rename file, 2nd param is new name
fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'helloworld.txt'), (err) => {
    if (err) throw err;
    console.log('file renamed');
});
