"use strict"



console.log("Lets learn OOPs in JS \n ---------------------");

// Notes by the video Tutorial on OOPS https://www.youtube.com/watch?v=PFmuCDHHpwk


const circle = {
    radius: 1,
    location : {
        x: 1,
        y: 1
    },
    draw : function(){
        console.log("Draw");
    }
};

circle.draw();

// Note that the objects when have one or more methods then the objects are said to have behaviour
// Duplicating such objects with different behaviour then is not such a good thing to do.
// so there is easier way in order to create objects with the object literal syntax: i.e by using the factory function
// Suppose the circle need only radius as the required property

// Factory Function example:

function CreateCircle(radius) {
    return {
        radius : radius,
        draw : function(){
            console.log("Draw in factory Function for a circle of  %i radius", radius);
        }
    }
}

const circle1 = CreateCircle(1);
circle1.draw();

const circle2 = CreateCircle(2);
circle1.draw();

// constructor function
function Circle(radius){
    this.radius = radius; 
    // this keyword use to set the property of the object
    // this is the reference to the object that is executing this piece of code.
    // So here using this keyword means that we assuming there is an empty object in the memory,
    // and we are using dot notation to set the property of the radius
    this.draw = function(){
        console.log("draw");
    }
}
const another = new Circle(1);
// The new operator is used to create the empty object as we have assumed previously, note that this empty object is local to this function Circle.
// If new is not added to then the global object is created and that is not a good practice

// note that 
Circle.call({}, 1);
// notice here the Call is used to call the function with some arguments
// note that the arguments here is one empty object {}, and then it is followed by 1 which is argument needed to call the function
//  so using Circle.call({}, 1) is same as const another = new Circle(1)
// recall we add new to create the empty object and this empty object is refered to the property by using this keyword
// this exact thing is done by the Circle.call({}, 1). There is an empty object created before the argument of the radius.

Circle.apply({}, [1,2,3]);
// The circle.apply is same as circle.call except here the array of arguments are used.
// so apply is beneficial when we have array in the arguments


another.location = {x:1, y:2};

another["circumference"] = "2 pi r";

// See how easily the properties are added to the circle object named as another here.

// The dot notation and the bracket notation both can be easily apply, except the dot notation doesnt tales special charachters
// also dot notation not works if the variable is defined for the property example if there is variable
// let property = "location" then we do another[property] = {x:1, y:2}

for (let key in another){
    console.log(key);
}
// this is how all the properties are printed in the consol, can also see the added properties here

// lets suppose we need all the keys in an array 

const keys = Object.keys(another);
console.log(keys);

// understanding Abstraction

function CircleNew(radius){
    this.radius = radius;

    let defaultLocation = { x: 0, y: 0};

    this.getDefaultLocation = function(){
        return defaultLocation;
    };

    this.draw = function(){
        console.log("DRAW CIRCLE");
    };

    Object.defineProperty(this, 'defaultLocation', {
        get: function(){
            return defaultLocation;
        },
        set: function(value){
            if(!value.x || !value.y){
                throw new Error("Invalid Location");
            }
            defaultLocation = value;
        }
    })

}

const circleA = new CircleNew(10);

// Note here the defaultLocation is the object which is set as a variable so it cannot be accessed outside of the function and its scope islimited to the function
// Therefore such properties which have only the implementation requirement to the creation of object and not for the whole logic, such propoerties need to be hidden
// And this hiding of property is known as abstraction of the function.

// But if need to just read the property, we need to assign it as a property with this keyword that can read the defaultlocation

console.log(circleA.getDefaultLocation());

// then the property can be readable as above.

// Other method is to set the get function. the getter function provides only the read only property
// And define property method also provide a set function that takes the value argument that can be set to that default location property
// Note: that here since the function is taking value as and argument we can actually add the validation to that value [109, 110]

//  This will give the error circleA.defaultLocation = 1;




