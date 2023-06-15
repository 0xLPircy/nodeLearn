const path = require('path'); //ppath is inbuilt mdoule

// Base file name
console.log(path.basename(__filename)); //path_demo.js

// just directory name
console.log(path.dirname(__filename)); ///Users/L_Pircy/testcvscode/node/reference

// file extension
console.log(path.extname(__filename)); //.js

// create path object
console.log(path.parse(__filename));
// {
//   root: '/',
//   dir: '/Users/L_Pircy/testcvscode/node/reference',
//   base: 'path_demo.js',
//   ext: '.js',
//   name: 'path_demo'
// }
// can access any from above
console.log(path.parse(__filename).base);

// concatenate paths
console.log(path.join(__dirname, 'test', 'hello.html'));///Users/L_Pircy/testcvscode/node/reference/test/hello.html
