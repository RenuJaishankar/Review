//This is how you write comment in js
/*You can also write a block comment like this */
//In coding language , you would declare something called a variable
//variables are symbols that represent a value
//think of a variables as pointing to the value you assigned it
//to declare a variable, you need the declaration syntax 
//you can use let, const, or var(var is discouraged)
//all variables need an identifier when declared,think of this as a "name"
//variables should be assigned a value but they can be declared without one
let x=4
let y
//semicolons will allow you to chain codelet x=4;let y

//take note that we don't need semicolon's in JS.
// js will still parse the semicolon as the end of the statement
//statements can be referred to as single line of code.

//console.log() is what we used to print something to the console
//below will print as undefined because this variable was undefined
//note that undefined is a value unto itself
console.log(y)
//variables can be mutable or imutable, meaning they be altered or not
//const does not mean immutable,it means that the variable will always have reference to the same value
const z=3;
//below will throw an error
try{
    // this is a try-catch block
    // we attempt the code in the try block
    // if this code throws an error, we can catch it below
    z=2
} catch(e){
    //here we catch the error thrown as the variable "e"
    //this variable can be declared whatever, its best practice to call it 'e' or whatever
    console.log(`${e} You can't do that` )

}
//because we caught our error, our code will continue to run
try{
   //you can explicitly throw an eroor
   //thus can be useful for debugging and learning coding practices
   //here we're throwing the generic error e
   throw "This is a custom error" 
//This code will never be reached because an was previously thrown
throw 500
} catch(e) {
    //e will always refer to the error thrown above
   console.log(`${e} Thank you for the error`) 
}
console.log(z+1)
/* Data structures */
//Javascript has many kinds of data structures that can be utilized.
// Variables are assigned by value 
//other major data structures are assigned by reference
//reference variables points to an object in memory
//variable values can be what we call a primitive type
//primitive types are data that are not considered objects and have no methods.
//The seven major primitives are:

//string
//number
//bigint
//boolean
//null
//undefined
//symbol

//the major reference data structures include but are not limited to:
//array
let arr = [1,3,3,5,6]
console.log(arr)
//object
//note that objects are chiefly composed of key value pairs
//the values ac be anything including other objects
let obj = {
    name:"James",
    age:30
}
console.log(obj)
//class
//classes are an object oriented data structure that can be thought of as a blueprint of an object
class Dog{
//these variables are what we call memebers of the class    
age
name
// this method can be called on the object constructed from this class 
doesBark(){
    return "Dog barked!"
}
//this defines the "contract"-- or what we need -- when we construct a new constructor
//note the parameters aligning with our memeber variables
constructor(age,name){
this.age = age
this.name = name
};

}
//below is how you would construct a new dog
//note that you can specify arguments for your parameters in the constructor
let newDog = new Dog(4, "Rover");
console.log(newDog.doesBark())
//function
//functions are blocks of code that are ran
//they can describe an inpiut and return an output
//you get the retiurn value by simply stating return inside the function
//if the return statement is hit,the function will stop
function myFunc(){
    return 3;
}
console.log(myFunc())

//functions are considered objects in javascipt
//they can be declared anonymously to a variable as such
// it is called an anonymous function because the function itself does not have a name
// arrow functions can be another name for it in specific instances
// arrow functions will mostly refer to what we call lambdas
// note the arrow => notation
const anonFunc = () => {
    return "this is an anonymous function"
}

console.log(anonFunc())

// tuple 
//tuples aren't supported in vanilla javascript,but are supported in typescript
//check the mod.ts for more in fo!
//promises
//a promise is an object that represents the eventual completiion of an asynchronous operation
//especialy it represents a value that will be return in the future.
//a promise can be in three states
//pending which is the initial state
//fulfilled meaning that the promise is completed successfully
//rejected meaning that the promise failed

let myPromise = new Promise((resolve, reject) => {
    setTimeout(function() {
        resolve("Sucess! This promise resolved")
    },5000)
    })
//promises are sometimes referred to as "thenables"
//this means you can call the .then() higher order functions
myPromise
.then(response => console.log(response))
//.catch() will catch any errors including rejections
// .finally() will run any code after everything else has been evaluated

//there are the async and await keywords that are currently being encouraged
async function f(){

    return 1
}

// async functions return promises so they therefore are thenables 
// this captures the return value and then console.log()s that value
f().then(result => console.log(result))


