// for (initialization; condition; increment) {
//     // code to execute
// }

// Example 1 (Print 2 to 10)

// for(let i=2; i<=10; i++) {

//     console.log(i)

// }

// Example 2 (Print Even Numbers)

// for(let i=0; i<=10; i+=2) {

//     console.log(i)

// }

// Example 3 (Print Odd Numbers)

// for(let i=1; i<=10; i+=2) {

//     console.log(i)

// }

// Example 4 (10th multiplication table)

// let num = 10;

// for(let i=1; i<=10; i++) {

//     console.log(`${num} *${i} : ${num*i}`)

// }

// Example 5 (13th multiplication table)

// let num = 13;

// for(let i=1; i<=20; i++){

//     console.log(`${num}* ${i} = ${num*i}`)

// }

// Example 6 (Sum of Numbers)

// let sum = 0;

// for(let i=1; i <= 20; i++) {

//     sum += i ;
    
// }

// console.log("sum===>",sum)

//  Example 7 (Count Down)

// for(let i=10; i>=1; i--){

//     console.log(i)

// }

//  console.log("CountDown Ends")

// Example 8 (Loop Through an array)

// const fruits = ["apple","orange","mango","Banana","Watermelon","Jackfruit","Strawberry","Blueberry"] 

// for(let i=0; i<fruits.length; i++) {

//     console.log(fruits[i])

// }


// Example 9 (Print Number 1 to 20)

// for(let i=1; i <= 20 ; i++) {

//     console.log(i)

// }

// Example 10 (Print Number 20 to 1)

// for(let i=20; i>= 1 ; i--) {

//     console.log(i)

// }

// Example 11 (Print all even numbers between 1 to 50)

// for(let i=2; i<=50 ; i+=2) {


//    console.log(i)

// }

// Example 11 (Print all Odd numbers between 1 to 50)

// for(let i=1; i<=50 ; i+=2) {


//    console.log(i)

// }

// Example 12 (Print Multiplication table 7)

// let num = 7;

// for(let i=1; i<=20 ; i++) {

//     console.log(`${num}*${i} = ${num*i}`)

// }

// Example 13 (how many numbers divisible by 3 from 1 to 30)

// let count = 0;

// for(let i=1; i<=30; i++) {

//     if( i % 3 === 0) {

//         count ++;
//     }
// }

// console.log(count)


// Example 14 (how many numbers divisible by 7 from 1 to 50)

// let count = 0;

// for(let i=1; i<= 50; i++) {

//     if( i % 7 === 0) {

//         count ++;
//     }

// }

// console.log(count)


// Example 15 (Loop through Array using Car Brand Name)

// let Cars = ["Audi","BMW","Maruti","Hyundai","Mahindra","Skoda","VW","Kia","Tata"];

// for(let i=1; i<+Cars.length;i++) {

//     console.log(Cars[i])

// }

// Example 16 (Print the Pattern){

for(let i = 1; i <=5; i++) {

    let pattern = "";

    for(let j=1; j<=i ; j++){ 

        pattern += "*";
    }

    console.log(pattern)
}














