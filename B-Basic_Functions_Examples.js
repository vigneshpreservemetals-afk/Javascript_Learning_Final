// Example 1

function greet() {
    console.log("Hello World");
}

greet();

// Example 2

function add(a, b) {
    return a + b
}
const Addition = add(10, 20)

console.log(Addition)

// Example 3 

function mul(c, d) {
    return c * d
}
const multiplication = mul(10, 20)

console.log(multiplication)

// Example 4

function div(e, f) {
    return e / f
}
const division = div(20, 10)

console.log("division===>", division)

// Example 5 

function square(num) {

    return num * num
}
const SqaureFunction = square(5)

console.log("square===>", SqaureFunction)

// Example 5 

function cube(num) {

    return num * num * num
}
const CubeFunction = cube(5)

console.log("cube===>", CubeFunction)


// Example 6

// const firstName = "Vignesh";

// const lastName  ="Baskaran";

// const age =  25

// function details() {

//     fullName = firstName + ' ' + lastName

//     return fullName

     
// }
// details()

// console.log("Details===>", fullName)

// Example 7


function details(firstName,lastName) {

   fullName = firstName + ' ' + lastName

   return fullName
    
}

const PersonName = details("Vignesh","Baskaran") 

console.log("PersonName===>", PersonName)

// Example 7


// const realName = "Sabitha";

// const fatherName = "seshachalam";

// function familyName() {

//     FamilyName = realName + ' ' + fatherName

//     return FamilyName
// }

// familyName()

// console.log("FamilyName===>",FamilyName)

function familyName(realName,fatherName) {

    familyName = realName + ' ' + fatherName

    return familyName
}

const ActualName = familyName("Sabitha","Seshachalam")

console.log("Actual Name ===>", ActualName)


// Example 7


function modelName(carBrand,carName) {

    modelName = carBrand + ' ' + carName;

    return modelName
}

const name1 = modelName("Skoda","Slavia") 

console.log("BrandName===>", name1)


