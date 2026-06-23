

// Example 1 (Function Declaration)

// function greet(){

//     console.log("Hello World")

// }

// greet();


// Example 2 (Function Expression)

// const greetMsg = function greet(){

//     console.log("Hello World from Anonymous function")

// }

// greet();

//  

// Example 3 (Anonymous Function)

// const AnonymousFunction = function(){

//     console.log("Hello World from Anonymous function")

// }

// AnonymousFunction();


// Example 4 (Anonymous Function)

// function greetMessage(){

//     console.log("Hello World from Anonymous function")

// }

// greetMessage();


// Example 5 (Arrow Function)

// const greetMessage = () => {

//     console.log("Hello World from Arrow function")

// }

// greetMessage();


// Example 6 (Arrow Function with single arguement)

// const cube = (x) => {

//     return x*x*x

// }

// const result = cube(4);

// console.log(result)


// Example 7 (Arrow Function with Multiple arguements)

// const sum = (a,b) => {

//     return a*b;

// }

// const result = sum(20,30)

// console.log(result)

//(or)

// const sum = (a,b) => a*b;

// const result = sum(20,30)

// console.log(result)


// Example 8 (Arrow Function in objects)


// const car = {

//     brand : "Skoda",
//     model : "Slavia",
//     varient : "prestige",
//     getfullName: () => {
//         return car.brand + ' ' + car.model + ' ' + car.varient;
//     }
// };


// console.log(car.getfullName())

const car = {

    brand : "Skoda",
    model : "Slavia",
    varient : "prestige",

    getfullName() {
        return this.brand + ' ' + this.model + ' ' + this.varient;
    }

}


console.log(car.getfullName())

