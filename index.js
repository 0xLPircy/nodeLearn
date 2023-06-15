const Person = require('./person'); //is called COMMON JS
// import Person from './person'; NOT A THING IN NODE its called es6
// console.log(person);

const person1 = new Person('jane doe', 27);
person1.greeting();