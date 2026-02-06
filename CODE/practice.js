//! 1 VARIABLE AND DECLERATION :
/**
console.log(nm); // undefined 
var nm = " Harsh";
 */

//! Example:
/** 
//! For var
var person = { name: "Harsh"};
person.name = " Sharma"; // Allowed
person = {name : 77}; // allowed
console.log(person);

//! For let
let person = { name: "Harsh"};
person.name = " Sharma"; // Allowed
person = {name : 77}; // allowed
console.log(person);

//! For Const
const person = { name: "Harsh"};
person.name = " Sharma"; // Allowed
person = {} // not allowed
*/

//! predict the result : true + false , null + 1 , 5 + "5", !!undefined

// let a = true + false;
// let b = null + 1;
// let c = 5 + "5";
// let d = !!undefined
// console.log(a); //1
// console.log(b); //1 
// console.log(c); // 55
// console.log(d); // false

//! Why NaN is a Number?
// Nan is Failed Mathematical Numerical Operation its tyee is null

//! What is the difference b\n undefine and null?
// let x ;
// console.log(x); // undefined
// let y = null;
// console.log(y);  // null



//! OPERATORS :
//! Practice Questions :

//! 1:-

// let x = 10;
// let y = 20;

// if (x > 5 && y < 25){
//     console.log("A");
// } else {
//     console.log("B"); 
// }

//! 2:-

// let a = 0;

// if (a){
//     console.log("Truthy");
// } else{
//     console.log("False");
// };

//! 3:-

// let score =  78;
// let grade = score >= 90 ? "A" : score >=75 ? "B" : score >= 60 ? "C" : "Fail";
// console.log(grade);

//! 4 :-

// let likes = 100;

// function likePost(){
//     return ++likes;
// };

// console.log(likePost);
// console.log(likes);


//!    CONTROL FLOW STATEMENT :-->

//! 1 ---->
/**
 * Write as function getGrade(score) that :
 *   - Take a student's masrk (0 tp 100)
 *   - Return the grade bassed on this logic:
 * 90-100 A+
 * 80-89 A
 * 70 - 79 B
 * 60-69 C
 * 33-59 D
 * 0-32 fail
 * Anything else    Invalid Marks
 */
// //!
// function getGrade(score){
//  if(score>= 0 && score<=32) return "Fail";
//  else if(score>=33 && score<=59) return "D";
//  else if(score>=60 && score<=69) return "C";
//  else if(score>=70 && score<=79) return "B";
//  else if(score>=80 && score<=89) return "A";
//  else if (score>= 90 && score<=100) return "A+"
//  else return " Invalid Marks";
// }
// console.log(getGrade(799));


//!Rock Paper - Scissors Logic

//  function rps(user , computer){
//     if (user === computer) return "Draw";
//     if (user == "scissor" && computer == "paper")  return "user" ;
//     if (user == "rock" && computer == "scissor") return "user" ;
//     if (user == "paper" && computer == "rock") return "user" ;
//          return "computer";
//  }

// console.log(rps(pasper , rock));
 
//! LOOPS--->

//! Q1. Print numbers from 1 to 10 using a for loop.
// for(i = 1;i<=10;i++){
//     console.log(i);  
// }


//! Q2. Print numbers from 10 to 1 using a while loop.
// let i = 10;
// while(i>=1){
//     console.log(i);
//     i--;
// }

//! Q3. Print even numbers from 1 to 20 using a for loop.

// for(i = 1; i<=20;i++){
//     if(i%2 === 0){
//         console.log(i);
//     }
// }

//! Q4. Print odd numbers from 1 to 15 using a while loop.

// for(i = 1; i<=15;i++){
//     if(i%2 === 1){
//         console.log(i);
//     }
// }

//! Q5. Print the multiplication table of 5 (i.e., 5 × 1 = 5 … 5 × 10 = 50)
// for(i = 1; i<=10;i++){
//     console.log(`5 * ${i} = ${5*i}`);
// }


//! Q6. Find the sum of numbers from 1 to 100 using a loop.
// let sum = 0;
// for(i = 1;i<=100;i++){
//     sum = sum + i; 
// }
//  console.log(sum); 
 
//! Q7. Print all numbers between 1 to 50 that are divisible by 3.
// for(i=1;i<=50;i++){
//     if(i%3 === 0){
//         console.log(`${i}`);
//     }
// }

//! Q8. Ask the user for a number and print whether each number from 1 to that number is odd or even.
//!     (e.g., “1 is odd”, “2 is even”, …)

// let val = prompt("Enter any number...")

// for(let i = 1; i<=val; i++){
//     if(i%2 === 0){
//         console.log(`${i} is a Even Number`);
//     }else{
//         console.log(`${i} is a Odd Number`);
//     }
// }

//! Q9. Count how many numbers between 1 to 100 are divisiable by 3 and 5 .
// count  = 0;
// for(let i =1;i<=100;i++){
//     if(i%3 === 0 && i%5 === 0){
//         console.log(i);
//         count++;
//     }
// }
// console.log(`Total Number are divisiable by 3 & 5 is ${count}`);

//! -------- LOOP KE QUESTIONS SOLVE KRNA HAI BY CHATGPT --------- !//

//! print number from 1 to 100 odd number but break after finding 5.


//! FUNCTION :------->------>

//! 1. Write BMI Calculator?

// function bmi(weight, height){
//     return weight/(height*height);
// }
// console.log(bmi(56,1.65).toFixed(2));


//! Ques:---> Create a reusable discount calculator (HOF)

// function discountCalculator(discount){
//     return function(price){
//         return price - price * (discount/100);
//     };

// }
// let discounterTen = discountCalculator(10);
// let discounterTwenty = discountCalculator(20);
// console.log("Discount 10% : ",discounterTen(100));
// console.log("Discount 20% : ",discounterTwenty(1000));

//! Solve clouser Questions by the help of CHatGPTL:-----.

//! Ques:--->  Create a pure function to transform a value.

// function double(val){
//     return val * 2;
// }
// console.log(double(15));

//! Use IIFE to isolate variable :---->
// IIFE is a private function. , here we create privae or isolated variables.


// (function (){
//     const password = "secret password";
//     console.log(password);
// })();
// console.log(password);


//! ARRAYS :-------->




