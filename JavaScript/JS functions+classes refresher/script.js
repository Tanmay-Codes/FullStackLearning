"use strict"

alert("Hello Coders, Open up Your Console ctrl+I in browser")

// Basics refresher method of the JavaScript.
// *********************************
// ES6 Functions here:
// *********************************

const callme = function(name){
    console.log(name);
}

callme("Tanmay")

// also can be written by using the arrow method

const callme2 = () => {
    console.log("Hello");
}

callme2()

// if there is a parameter in arrow function then

const greet = name =>{
    console.log("Hello "+ name);
}

greet("Tanmay")

// ********************************
// JS Classes now
// ********************************

// Classes are a feature which basically replace constructor functions
// and prototypes. You can define blueprints for JS objects in them.

// old Syntax of class using constructor
class Person {
    constructor(){
        this.name = 'Tanmay';
    }
}

const person = new Person();
console.log(person);
// above command will output an object with a property name

// in order to print the name, have to use the dot notation
console.log(person.name);

// In classes methods can be defined as follows:


// New Syntax of class without using constructor
class Person2 {
    name = 'Tanmay';
    displayMyName (){
        console.log("Inside Class Method " + this.name + " Is Printed");
    }
}

const person2 = new Person2;
console.log(person2.name);
person2.displayMyName();

// ***********************
// The Spread Operator ...
// ***********************
// ... these three dots are the syntax of the spread operator
// The spread operator allows you to pull elements out of an array
// or pull out the properties from the objects.

const oldArray = [1, 2, 3, 4];
const newArray = [...oldArray, 5, 6, 7, 8];
console.log(newArray);

// how does it is used on the objects? see below: 

const oldObject = {
    name: 'Tanmay',
    gender: 'male'
}

const newObject = {
    ...oldObject,
    age: '29',
    nationality: 'Indian'
}

console.log(newObject);

// now understanding what kind of copy it does? because the here array / objects are being cloned
// so lets find what happens if we change the value of oldArray here

oldArray.push(22)
console.log(oldArray);

console.log(newArray);
// note that here the changes made to the old array is not reflected into the new Array
// Why? because it is basically a clone and so the shallow copy of the oldArray inside the newArray
// so changes in the oldArray is not reflected inside newArray.

// ***************************
// Destructuring of an Array
// ***************************

// Destructuring allows you to easily access the values of arrays or objects
// and assign them to variables, lets see and example here:

const array = [1, 2, 3];
const [a, b, c] = array;
console.log(a);
console.log(b);
console.log(c);

// Destructuring in functions and objects

const printName = ({name}) => {
    console.log(name);
}
printName({name: 'Tanmay', gender: 'Male'})

