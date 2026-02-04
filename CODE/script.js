//! Daste - 02 Feb 2026
//! 1 VARIABLE AND DECLERATION :
// vasr , let , const - lime_by_line compasrision

// declasration asnd initializastion

// var a = 12;
// {
//     var c = 14;
// }
// function abcd(){
//     if(true){
//     var b = 22;
//     }
// }

// Window ,ein asdd hotas hai
// function scoped hotas hai

//! Temporal Red Zone : (TDZ)
// udna area jitne mein js ko pata to hai ki variable exist karta hai par aapko value nahi de sakta hai
// console.log(a);

// let a = 12;

//! Hoisting impact per type:
// hoistiong : ek variable ko jab js mein banaate hai to xo variable do hisso mein toot jaata hai and uska declare part upar chala jata hai and uska initialization part neeche rhe jata hai.

// console.log(a);

// var a = 12;
/**
 * line 38 is divide like this then
var a =  undefined; is go to top of the code asnd initiallized pasrt is ast sasme plasce where it casn be written.
so this is hoisting 
a = 12;
 */

/**
 * var --> hoist --> undefined
 * let --> hoist --> X Not define value
 * const --> hoist --> x Not define value
 */

//! Data Types + Type System :

// There are two main data types

//! Primitives : aaishi sari values jinko copy karne par tumhe ek real copy mil jaaye
// string,number, boolean, null, undefined, symbol, bigint
//!Example
// let a = 12;

// let b = a;

// a = a + 12;
//  b= b +2;

//! References : inko copy karne par real copy nhi milegi but aapko referenece milega parents ka
// arrays[] , object{} , functions()
//!Example
// let a = [10,20,30];
// let b = a;
// b.pop(10);

// string, number, boolean, null, undefined, symbol, bigint
// arrays[] , object{} , functions()

// ! Primitive :

//! Strings :

// '' - single quotes
// "" - double quotes
// `` - backticks

//!  Number:
// let a=10;
// let b = 10.33;

//! Boolean:

// let a = true;
// let b = false;

//! null: jan krr koe value na dena , ye null or empaty space ham khud dete hai
// let selectedValue = null;

//! undefined : ek variable banaya phir use koe value na dena hota hai , jo value by default js engine ke jariye milti hai
// let a;
// console.log(a);

//! symbol: unique immutable value

// future me ham koe libraries use karege ab is case mein un librarie mein kai baar kuch fiels hoti hai jinse similar hum bhi banaa dete hai aur galti se humaari banaai hue fiels us library ki original fields ko chnge krr dete hai .
/**
let obj = {
    uid : 1,
    name: "Harsh",
    age: 12,
    email : "test@test.com",
};

// obj.uid = '001';
console.log(obj);
let u1 = Symbol("uid");
obj[u1] = "001";
 */

//! bigInt
/**
 let a = Number.MAX_SAFE_INTEGER;
 let a1 = a + 4;
 console.log(a1); // it is a maximun value  safe integer - 9007199254740991
 
let b = 9007199254740991n;
let b1 = b + 4n; // here we can add bigInt Values
console.log(b1);
 */

//! Referance Type :

//! Array:

// let a = [1,2,3,4,5];
// let b = a;
// console.log(b);
// console.log(a);

// b.pop();
// console.log(b);
// console.log(a);

//! Object:
// let a= {
//     name: "Rohan",
// };
// let b = a;
// console.log(a);
// console.log(b);

// b.name = "Sohit";
// console.log(b);
// console.log(a);

//! Dynamic Typing --> js me static typing nhu hai hai yaha par dynamic typing hai jiska mtl ye hai ki aap data ko change krr sakte ho kyuki yaha par dynamic data types hai.
// here we can change the values with the same data type and also with different data type.

//  let a = true;
//   console.log(a);
//  a = "harsh";
//   console.log(a);
//  a =  [];
//   console.log(a);
//  a = null;
//   console.log(a);
//  a = undefined;
//   console.log(a);
// let a = 12;
//  console.log(a);

//! typeof quirks (e.g., typeof null === 'object)

// console.log(typeof 10);
// console.log(typeof Nan);
// console.log(typeof "Adi");
// console.log(NaN = NaN);
// console.log([] + []);
// console.log('' + '');
// console.log(1 == "1");
// console.log(1 === "1");

//! Type Coercion (== vs ===): cocept jismein aapko ek type automatically convert ho jayega 
//  let a = "5" + 1; // concatination ho raha hai 
//  console.log(a);

//  let b = "5" - 1;
//  console.log(b);
 

//! Truthy vs falsy values  : (!!- we can use this symbole to check the true or false value)

// Falsy Value
// 0 , false,"",null,undefined, NaN , doucument.all --> false

// if (null){} // falsy value because here null nature is falsy so here ut pretend  like falsy value and give false.



//! OPERATORS :

// arithmetic
// Comarison
// Assignment
// Logical
// unary
// ternary


//! Arithmetic :
//  +, -,  /, *, %, **(Use for power)


//! Comparision:
// =, ==,  ===,  !=,   !==,  >=,  <=,  <,  >


//! Assignment Operator :

// =
// +=
// -=
// *=
// /=
// %=

// let a = 12;
// console.log(a);
// a+= 3;
// console.log(a);
// a-=11;
// console.log(a);
// a*=2;
// console.log(a);
// a/=2;
// console.log(a);
// a%=3;
// console.log(a);


//! Logical operator:
// &&(AND), ||(OR), !(Not)



//! Unary Operator:
//! Note : for any thing converting in nuber we added + symbole best the exsisting number
// +, -, !(typeof), ++, --

//! Ternary Operator:
// condition ? true hua ti ye code: false hua to ye code;
// 12>13 ? console.log("True"): console.log("False");

//! typeof : I help to Fine type of any any number, object , function etc
// typeof generaly use with primitive values

// it can be provided wrong answer for some case like :-
// typeof null;  // object
// typeof [];    // object
// tyoeof NaN;   // number
//  let a = [];
// console.log(typeof a);

//! instanceOf: it work on only references Value


// let a = [];
// console.log(a instanceof Array);/ // true

// let b = {};
// console.log(b instanceof Object); // true
// console.log(b instanceof Array);  // false




//!    CONTROL FLOW STATEMENT :-->

// if-else else-if
// switch case
// early return Pattern


//! if-else ,else-if
// if(loggedin && admin){
//     console.log("Case 1");
// }
// else if (loggedin){
// console.log(" Case 2");
// }
// else{
//     console.log("Case 3");
// }

//! switch  case :

// switch (1){
//     case 1:
//         console.log("Hiiiiii");
//         break;
//     case 2:
//         console.log("Byeeeeee");
        
//         break;
//     case 3:
//         break;  
// }

//! early return pattern

// function getVal(val){
//     if (val < 25) return "D";
//     else if (val < 50) return "C";
//     else if(val < 75) return "B";
//     else return "A";
// };
// console.log(getVal(75));


//! LOOPS--->

// for, while, forEach, 

//! for Loop--->
// kaha se jana hai --> kaha tak jana hai -->  Kaise jana hai
 // 1 - 40 for
 // 20 - 30 for

//! while Loop--->
// kaha se jana hai --> kaha rukna hai -->  Kaise jana hai
// hello na aajaye - while
// laal color ka ped na dikh jaye - while


// ! For Loop :-------->
/**
 * ! Syntax
 *  for ( start; end; change){};
 */

//! To print 1-100

//  for(i = 1; i <= 100 ; i++){
//     console.log("Number is : ",i);
//  }

//! While Loop :---->

/**
 * start
 * while(end){
 * // code
 * change
 * }
 */
// //! print 1 - 32
// let i = 1;
// while(i<=32){
//     console.log(i);
//     i++;
// }

//! do-while loop:---->
// start
// do{
// }
// while(end)
//!
// let i = 1;
// do{
//     console.log(i);
//     i++;
// }
// while(i<30);

//! break: i can break the code from ehich value we passed there;


// for(i=1; i<200;i++){
//     console.log(i);
//     if(i ===20){
//         break;
//     }   
// }

//! continue:----> it can't print those value which we don't print the value

// for(i=1; i<200;i++){
//     if(i ===20){
//         continue;
//     }   
//     console.log(i);
// }
    



