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

/**
//!Ques:-----> Create an array with 3 fruit and print the second fruit.

let fruit = ["Apple" , "Guava" ,"Banana"];
console.log(fruit[1]);


//!Ques:-----> Add "Mango" at the end and "Pineapple" at the starting af this array.
let fruit1 = ["Apple" , "Guava" ,"Banana"];
fruit1.push("Mango");
fruit1.unshift("Pineapple");
console.log(fruit1);




//!Ques:-----> Replace Banana with kiwi in the array above
//Ans:--->
let fruit2 = ["Apple" , "Guava" ,"Banana"];
//! 1st way
fruit2.pop();
fruit2.push("Kiwi");
console.log(fruit2);

//! 2nd Way
fruit2.splice(4,5,"Kiwi");
console.log(fruit2);





// !Ques:-----> Remove last element
let fruit3= ["Apple" , "Guava" ,"Banana"];
fruit3.pop();
console.log(fruit3);


//!Ques:-----> Insert "Red" and "blue" at index 1 at this array.

let arr1 = ["Green","Yellow","Bargandi","Pink"];
arr1.splice(1,0,"Red","Blue");
console.log(arr1);




// !Ques:-----> Extract only the middle 3 element from this element.
let arr2 = ["Green","Yellow","Bargandi","Pink","Lightpink"];
let newArr1 = arr2.slice(1,4);
console.log(newArr1);


//! Ques:----->Sort This array alphabatically and then reverse it:
let arr3 = ["Green","Yellow","Bargandi","Pink","Lightpink"];
let newArr3 = arr3.sort();
console.log(newArr3);


// !Ques:-----> Use map() to square each number.

let arr4 = [10,20,30,40,50,60];
let newArr4 = arr4.map(function (val){
    return val *val;
});
console.log(newArr4);




// !Ques:-----> Use filter() to keep number greater than 10.
let arr5 = [5,20,30,4,50,6];
let newArr5 = arr5.filter(function (val){
    if(val>10) return val;
});
console.log(newArr5);





// !Ques:-----> Use reduce Method to find the sum of this array.
let arr6 = [5,20,30,4,50,6];
let newArr6 = arr6.reduce(function(accumulator,val){
    return accumulator + val;
},0);

console.log(newArr6);


// !Ques:-----> Use find () to get the first number less than 10

let arr7 = [5,20,30,4,50,6];
let newArr7 = arr7.find(function (val){
    // if(val>10) return val;
    return val>10;
});
console.log(newArr7);



// !Ques:-----> Use some() to check if any student has scored below 35.

let mark = [5,20,30,4,50,6,80];
let newMark = mark.some(function(val){
    return val<35;
});
console.log(newMark);



// !Ques:-----> Use every to check if all number are even.

let arr8= [8,20,30,4,50,6,80];
let newArr8 = arr8.every(function(val){
    return val%2 ===0;
});
console.log(newArr8);


// !Ques:-----> Destruncture this array to get firstName and Lastname.

let fullName = ["Harsh", "Yadav"];
let [firstName,lastName] = fullName;
console.log(firstName);
console.log(lastName);




// !Ques:----->  Merge two array using spread operator
let a= [1,2];
let b = [3,4];

let c = [...a,...b];
console.log(c);



// !Ques:-----> Add "India" at the start of this array using spread operator

let countries = ["USA","UK"];
 countries = ["India",...countries];
 console.log(countries);
 

// !Ques:-----> Clone this Array properly(not by refernce)
 let arr9 = [1,2,3,4,5,6,7,8];
 newArr9 = [...arr9];
 console.log(newArr9);
 
*/


//! <------- OBJECT : --------->


// ! Create an object for a student with name age and isEnrolled.
let obj1 = {
    name : "Aditya",
    age:23,
    isEnrolled: true,
}
console.log(obj1);

//! Can an object key be a number or boolean?
//Yeas it can be.

const obj2 ={
    true: "Yes",
    43: "Age",
};
console.log(obj2);


// ! Acces the valueof first-name from this object
const user ={
    "first-name": "Harsh",
};
console.log(user["first-name"]);
// console.log(user."first-name"); // this is wrong method





//! Given a dynamic key let key="age", how will you acess user[key].


let key="age";

const user1 ={
    age:26,
};
console.log(user1[key]);




// ! From object below print the lattitude

const locationss = {
    city : "Sultanpur",
    coordinates:{
        lat: 23.2,
        lng: 77.4,
    },
};
console.log(locationss.coordinates.lat);




// ! What will happen is coordinates is missing ?  how can you prevent errors?


// ! Destructure the "first-name" as a variable called firstName

// ! Use for-in to log all keys in this object



// ! Use Object.entries() to print all key-value pairs as :


// ! Copy this object using spread operator

// ! Question

// ! Deep clone objec1 safely

