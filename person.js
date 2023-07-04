// const person = {
//     name: 'Jane Doe',
//     age: 30
// }
// module wrapper function 
// (function (exports, require, module, __filename, __dirname) {

// })

// console.log(exports);
// console.log(require);
// console.log(module);
// console.log(__filename);
// console.log(__dirname);

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greeting() {
        console.log(`My name is ${this.name} and i am ${this.age}`)
    }
}

module.exports = Person;