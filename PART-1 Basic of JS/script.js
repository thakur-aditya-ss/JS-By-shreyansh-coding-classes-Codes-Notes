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
    
//! FUNCTIONS :------->

// //!
// function dance(){
//     console.log("Dance");
//     console.log("Dance");
//     console.log("Dance");
//     console.log("Dance");
//     console.log("Dance");
//     console.log("Dance");
// };
// dance();
// dance();
// dance();


//! 

// let fnc = function(){
//     console.log("HeLLo");
// }
// fnc();

//! Function decleration,exopression, and arrow function:---->



//! function statement
// function abcd(){
// }


//! function expression
// let fnc = function(){
// }

//! fat arrow function 
// let abcde = ()=>{
// }

//! parameter And arguments:----->

//!
// function dance(v1){  //. Yaha ham Parameter set karte hai 
// console.log(` ${v1} Nach Raha Hai `);
// }
// dance("Ghoda") ; // yaha ham arguments Set karte hai 
// dance("Morr");
// dance("Bandar");
// dance("Harsh");


//! default, rest, spread parameters :---->

//! default:-

// function add(v1, v2){
//     console.log(v1 + v2);  // undefined
// }
// add();

//! Jab arguments kai saare ho ton humein utne hi parameter banaana padega, isse bachne ke liye, hum rest ka use karte hai (...) using this triple dot,aggar ... function ke parameter space ,ein lage to wo rest operator hai and agar wo array and object mein laghe to wo spread operator.



//! rest (...val):--->


// function data(...val){    // here ve rest method
//     console.log(val);
// }
// data(1,2,3,4,5,6,7,8,9,10);


//! return matlap jaha se aaya hai vahi daal denge

// function abcd(val){
//     return 12 + val;
// }
// let v = abcd(12);  // yaha poar ham kuch bhi return karege to vo ja ke jaha se aur jiss name se function ko call kre hai vo uaski jagha replace ho jayega.
// console.log(v); // 24


//! first class function :-->
// aaese function jinkjo values ki tarah print krr skte hai ham.jaha jaha ham value likh sakte hai vaha vaha ham function likh sakte hai .
//!
// function abcd(val){
//     val();
// }
// abcd(function(){
//     console.log("Heyyyyyy");
    
// })

//!
// function abcd(){
//     let val = 0;
//     return function(){
//         console.log(val);
//     }
// }
// abcd()();

//! HOF (Higher Order Function):----->
// hof wo function hota hai jo ki return kare function ya fir accept kare ek function aapne parameter mein

// function abcd(){
//     return function(){
//         console.log("HELLO Adi");
        
//     }
// }
// abcd()();


//! Pure And Impure Function:----->
//! Pure ----> aaisa function jo ki baahar ki value ko naa badle wo hai pre function.

// let a = 12;
// function abce(){
//     console.log("hehehehehe");
// }


//! Impure ----> aaisha funtion jo bahar ki value ko badal de wo hai impure functions.

// function hui(){
//     a++;
// }


//! CLOUSERS :--->
// YE ek function hai jo return karta hai ek function ko joki use karta hai hai (andar vala function use karta hai kisshi bahar vale function ke variable ko )parents functio ka koe  variable. Returning function use some variabkle of therir parents function in the child function.
//! Ex:--->

// function abcd(){
//     let a = 10;
//     return function(){
//         console.log(a);
//     }
// };
// abcd()();

//! 
// function outer(){
//     let count = 0;
//     return function (){
//         count ++;
//         console.log(count);
//     }
// }
// const counter = outer();
// console.log(counter); // it gives funtion
// counter(); //1
// counter();//2



//! LEXICAL SCOPING :--->
 //Ya ek function ke bahar ke scope me define kiye gaye variable ko access krr sakta hai .
 //! Ex--->
// function abcd(){
//     let a = 10;
//     console.log("abcd() - a :",a);
//     function efgh(){
//         let b = 13;
//           console.log("efgh() - a  :",a);
//           console.log("efgh() - b :",b);
//         function ijkl(){
//             let c = 16;
//                console.log("ijkl() - a :",a);
//                console.log("ijkl() - b :",b);
//                console.log("ijkl() - c :",c);
//         }
//         ijkl();
//     }
//     efgh();
// }
// abcd();


//!  IIFE (Immediately Invoke Function Expression):----->

// IIFE SYNTEX TO WRITE THE EXPRESSION

// (function(){   
//     console.log("heyheyhey");
// })();


//! HOISTING DIFFERENCE B\W DECLARATION AND EXPRESSION:--->


//! Functiopn Declaration : it can be work ,if we can call the function before the declaration , here hoisting can be work
// abcd();


// function abcd(){
//     console.log("Hello");
    
// }

//! Function Expression : yaha par ham kishi variable se ham pure function se usko declera krr dete jisse function se sari value ham uss variable me store krr saktehai, it can be produce error

// abcd();


// let a = function abcd(){
//     console.log("Hello"); //script.js:567 Uncaught ReferenceError: abcd is not defined 
// }


//! Ques -> Whst's the difference b\w function decleration and expression in terms of hoistiong
// Ans:--->


//! Functiopn Declaration : it can be work ,if we can call the function before the declaration , here hoisting can be work
// abcd();


// function abcd(){
//     console.log("Hello");
    
// }

//! Function Expression : yaha par ham kishi variable se ham pure function se usko declera krr dete jisse function se sari value ham uss variable me store krr saktehai, it can be produce error

// abcd();


//!Ques-2--> Convert this function into arrow function : 
// function multiply(a, b){
//     return a * b;
// }
    //! Ans:-->
    // let  multiply = (a,b)=>{
    //     return a*b;}

//! Ques-> Identify paerameter and Arguments ?
// function ke aage jo likha hotan hai parameter hota hai aur jisse se ham call karte hai use ham arguments bolte hai.


// function welcome(name){ // yaha parameter declere karte hai ham 
//     console.log(name);
// }
// welcome("Harsh"); // ese ham argumnets bolte hai

//!Ques:--> What does the ...Operator mean in parameter?
// Ans:--> yaha par ... (rest parameterhai ) ye array return karta hai jaha se ska use hota hai.

// function abcd(a,b,c,...val){
//     console.log(a,b,c,val);
// }
// abcd(10,20,30,40,50,60,)


//!Question :--> Use rest parameter to accept any number of score and return the total?

// function getScore(...score){
//     let total = 0;
//     score.forEach(function (val){
//         total = total + val;
//     })
//     return total;
// }
// console.log(getScore(10,20,30,40,50,60,70));








//! Ques: make this function short?
// function checkAge(age){
//     if(age<18){
//         console.log("Too Young");   
//     }
//     else{
//         console.log("Allowed"); 
//     }
// }
// checkAge(23);

//! Ans:--> 
// function checkAge(age){
//     if(age<18) return "To Young";
//     return "Allowed"
// }
// console.log(checkAge(17));

//!Ques:--> Ek Function jo kuch bhi nhinreturn nhi karte useme result Undefined aayega:--
// function f(){
//     return;
// }
// console.log(f()); // Undefined


//! Ques:---> What does it Means When we say "functions are first-class citizens"?
// Ans:--> eska ye mtlb hai ki ham jaha jaha value ko initilized krr sakte hai ham vaha vaha function ko bhi initilized krr saktr hai ham. Functions are treate like value. mtlb ki arguments me ham jaha value ko dal sakte hai vaha ham function ko bhidal sakte hai.

//!Ques:-->  Can you assign a function to a variable and then call it? Show How.
//! ANs:--> yes we can assign-
// let a = function(){
//     console.log("Function assign to a variablre");
// }
// a();


//!Ques:--> Pass a function into another function and execute it inside.

// function abcd(val){
//     val();
 
// }
// abcd(function (){
//     console.log("Passing a Function to another Function ");
// }); // yaha par ham jo abcd ke andar function call kre hai vo val ke value me ja ke store ho gaya hai aur vo val() karne pe ess liye call ho raha hai kyu ham yaha ham same function expression vala logic laga rhe hai.

//! What is HIgher Order Function (HOF)?
//! Ans:- 
// HOD function usse kahete hai jo ek function ke andar dusre function ko return kare ya phir ye accept kre parameter me ek function ya phir dono hio jaye .

//! Ex:--> 1
// function abcd(){
//     return function (){     
//     }
// }
//! :---> 2
// function abcd(val){
//     val();
 
// }
// abcd(function (){
//     console.log("Passing a Function to another Function ");
// }); 

//!Ques :- esme pata   karna ki HOP hai ki nhin :--->
// [1, 2, 3].map(function(x){
//     return x * 2
// });
 //esme map ek function hai jisme ek function call kiya gaya hai ya retuirn karaya gaya hai to esme hHOF hai map

//! Ques :---> Convert the normal function into IIFE ?
// function init(){
//     console.log("Initialized");
// }
//! Ans:--->
// ( function init(){
//     console.log("Initialized");
// })();

//!Ques:---> What is the use of IIFE? Name one real-world use case.
// Ans:---> it is a private function



//!    ARRAYS [] :------->---------> 

//! Example of Creating Array:---->
// Way-1
// let marks = [10,20,30,40,50];
// console.log(marks[2]);

// Way-2
// let arr =new Array;

//! Modify arrays:---->
// let arr = [1,2,3,4,5]
// console.log(arr[2] = 12); //12
// console.log(arr); //[1, 2, 12, 4, 5]

//! ARRAY METHODS:----------->
/** 
//! push():---> eska kamm hota hai array ke last me  value ko add karna.

let arr1=[10,20,30,40];

arr1.push(12);
console.log(arr1);

//! pop():----> eska mtlb hota hai array ke last se  value ko hatana. 

let arr2 =[1,2,3,4,5];
arr2.pop();
console.log(arr2);

//! shift():---->eska mtlb hota hai array ke suruvat se  value ko hatana. 

let arr3 =[1,2,3,4,5];
arr3.shift();
console.log(arr3);


//! unshift():-----> eska kamm hota hai array ke suruvat me  value ko add karna.

let arr4=[10,20,30,40];

arr4.unshift(0);
console.log(arr4);

//! splice():---->eska kam hai ki bich se value ko hata ,esme ham ek index ki value pass karte hai pahele phir ham value pass karte hai ki kitne value hatani hai from the index
// ye actual array ko change karrr deta hai splice

let arr5=[10,20,30,40];

arr5.splice(2,2); // yaha pe jo pahela 2 hai vo index hai array ka aur dusra 2 jo ghai vo vale hai ki kitna hatana hai ham logo ko from index which we pass.

console.log(arr5);


//! slice():----> eska use hota hai ek naya array lane ke liye aur ham yaha pe pahele initial value ko dete hai mtlb jaha se hame start  karana hai esme ham index value dete hai phir dursre argument me ham number of value dete hI KI STARTING POINT SE HAME KITENE VAKE CHAHIYE 

// ye ek new array deta hai ham logo ko
let arr6=[10,20,30,40];

let newArr6 = arr6.slice(0,2); // yaha 0 starting index dikhata hai ki ha hame kaha se value ki priniting start karna hai aur 2 number of value ko batata hai 

console.log(newArr6);


//! reverse():----> eska kam hota hai array ko reverse karne ka , main array ko change karega

let arr7= [1,2,3,4,5];
arr7.reverse();
console.log(arr7);


//! sort():----->  eska kam hota hai ascending or descending order me array ko arrange karna aur ham eske andar ek function ko apply karte hai ye eska syntex hota hai , esme ham as a parameter (a,b) ko pass karte hai aur ham return karate hai 2 tarah se value ,pahela ye return karta hai a - b jisse hame value ascending iorder me milti hai aur dusra return karte ghai b - a jisse hame descending order me value milti hai

let arr8= [23,23,13,54,2,33,11,7];
// Ascending Order:--->
let aoo = arr8.sort(function(a,b){
    return a - b;
});
console.log(aoo);
// Descending Order:--->
let doo = arr8.sort(function(a,b){
    return b-a;
});
console.log(doo);

//! forEach():------> ye har ek value ke liye function ko chalata hai aur print karta kata hai

let arr9 = [10,20,30,40,50];

arr9.forEach(function(val){
    console.log(val*2);
});
console.log(arr9);


//! map():---> ye bhi har ek array ke value ke pass jata hai fark bass etna hai ki ham raha rerturn bhi kara sakte hai , ye condition jo di gaye hai usko bhi print karta hai aur  jo satisfied nhi karti hai usko undefined krr deta hai
// jab bhi aapko aaisa koe case dikh jaye jaha par ek array se naya array banega and wo naya array kuch values ko rakhega tab map lagega
// map sirf tab use karna hai jab hamko ek naya array banana hai pichala array ke data ke basis par.
// map dekhte ke sath hi ek blank array ko man liya kro


let arr10 = [12,21,43,56,88,90];
let newArr10 = arr10.map(function(){
    return 12;
});
console.log(newArr10);

let newarr10 = arr10.map(function(val){
    if (val>15) return val;
})
console.log(newarr10);



//! filter():---->filter ka kam hota hai ki value ko true ya false return karna , eska mtlb ye hai ki ham jo condition dete hai ye bass usko print karega jo usko satisfied karte hai.


let arr11 = [12,21,43,56,88,90];
let newArr11 = arr10.filter(function(){
    return true;
});
console.log(newArr11);

let newarr11 = arr10.filter(function(val){
    if (val>15) return val;
})
console.log(newarr11);



//! reduce():----> eska kam hota hai jitna bhi array ke andar value hota hai ye uske value ko eksath le aata hai 

let arr12 = [1,2,3,4,5,6,7,8,9];
let newArr12 = arr12.reduce(function(accumulator,val){
    return accumulator + val;
},0);// yaha par accumulator ki value 0 hai aur ham bar bar jab function cghlate hai to accumulator me val ki value aad ho jati hai jab array ke sare vale added ho jate hai tab accumulator me jitne value store hue rheti hai usko vo return krr deta hai aapne variable ko .

console.log(newArr12);





//! find():----> ye value ko find karne ke kama ata hai aur ye starting se kam karta hai mtlb ki ye value ko starting se find karna suru jkarta hai jaha sko value mili ye band ho jata hai

let arr13 = [1,2,3,4,5,6];
let fi = arr13.find(function(val){
    return val ===1;
});
console.log(fi);



//! some():-----> eska kam ye hota hai ki ek array me koe bhi condition agar satisfied hoti to answer hame true milega hi to false milega, ye reslt true or false deta hai, 
// esme array ki koe bhi ek value satisfied hoti hai to true de deta hai

let arr14 = [10,20,30,50,70,80];

let any = arr14.some(function(val){
        return val>69
});
console.log(any);



//! every():-----> esme har ek condition ko satisfied karna hota hai aagar koe bhi ek condition nhi satisfied karta array ki value to ye false dega aur satiisfied karega to true dega

let arr15 = [10,20,30,50,70,80];

let all = arr15.every(function(val){
        return val>10
});
console.log(all);




    //! ARRAY DESTRUCTURING, :----->

    let arr16 = [1,2,3,4,5,6,7,8,9];

    let [a,b, , c] = arr16;

    console.log(a);
    console.log(b);
    console.log(c);
    
    //! SPREAD OPERATOR:----> 
    // spred ka use hota hai ek naya array banane me ya ek array copy of original array hota hai ham aagar copy vale array me kuch changes krege to ye original array pe koe effect nhi dalega.

    let arr17 = [1,2,3,4,5,6,7,8,9];
    console.log(arr17);
    
    let newArr17 = [...arr17];
    console.log(newArr17);
    newArr17.pop();
    console.log(newArr17);// it can changed
      console.log(arr17); // it can not change
    
*/

            //! OBJECTS :----->

/**
//! Example Of Array:--->

// let obj = {
//     name : "Harsh",
//     age : 44,
// };
// console.log(obj.name); // yaha pe ham dot ker bad jo use karege ushi ko ye object me khojega or print karayegga
// console.log(obj['name']);

 
//! Ex:---->

let obj1 = {
    id :1,
    name: "Aditya",
    address: {
        city : "Sultanpur",
        pin: 227808,
        locations: {
            lat:23.3,
            lng:77.4,
        },
    },
}; // this is a nesting array
console.log(obj1.address.locations.lat);  // it is a deep access


//! Object Destructuring :---->

let {lat,lng} = obj1.address.locations;  // this is a object destructuring
console.log(lat);
console.log(lng);

//! <---- Looping In Object :--->


//! for-in :
let obj2 = {
    name: "Harsh",
    age: 26,
    email: "test@test.com",
}
for(let key in obj2){
    // console.log(key); // ye hamre object se key value ko print karayega 
    // console.log(obj2[key]); // ye hamara key ki values ko print karayega 
    console.log(key,":",obj2[key]);
}

// ham yaha pe aagar sirfh key likhege to key ki value ko access krr sakte hai  aur obj[key] ko liklhege to ham uski value ko bhi access krr skate hai.
 
 
 //! Object.keys: ye sari keys ko ek array me daal deta hai 

let obj3 = {
    name: "Harsh",
    age: 26,
    email: "test@test.com",
};
console.log(Object.keys(obj3));


 //! Object.entries: ye Array ke andar array banata hai hai

 console.log(Object.entries(obj3));



 //!<-------Copy Objects ----->

 //! Spread:eska kam hota hai ek object ke data ko dusre array me store karna without changing there original object
 
let obj4 = {
    name: "Harsh",
    age: 26,
    email: "test@test.com",
};
console.log(obj4);

let newObj4 = {...obj4};
console.log(newObj4);


 //! Object.assign(): eska kam hota hai original object me ek naya object ko likhna yaha add karna 

 let newOBJ4 = Object.assign({price: Infinity}, obj4);
 console.log(newOBJ4);
 

 //! Deep Clone: 
 // ye help karna hai nested object me se data ko copy karne me kyuki spread ke through ham original object ko copy to krr lete hai but jo object ke andar object banayaga gaya hai uske data ko nhi krr opate ghai copy kyuki vo reference dene klagta hai aagar ham object ke andar ke object ko chamge kare ge copy vale object me to ye original array bhi change krr dega.

 let obj5 = {
    name: "Harsh",
    age: 26,
    email: "test@test.com",
    address:{
        city : "SUltanpur",
        locations: {
            lat:23.33,
            lng:78.8,
        },
    },
};
console.log(obj5);

let newObj5 = {...obj5};
console.log(newObj5);
obj5.address.city = "Lko"; // eske trough ham object me change krr sdakte hai uski values me 
console.log(newObj5);
console.log(obj5);
// ye ek galat tarika hai nested object ko copy kartne ka kyuki yaha pe obj ke andar jo ek obj hai uska data by reference aata hai original obj se cop object , aur jab ham copy object me change karte hai to  original object me bhi ho jata hai

//! to hame yaha object Clone ki jarurat hoti hai
 // object ke exact copy banane ke liye ham JSON ka use krege ham jisme stringify() se ham object ko String me comnvert karte hai aur pasre() Method se ham usko object me convert karte hai esse ham exact copoy mil jata hai original object ka.

 let obj6 = JSON.parse(JSON.stringify(newObj5));
 console.log(obj6);
 obj6.address.city = "Delhi";
 console.log(obj5);
 console.log(obj6);
 
 // copy object me changes karne pe koe change nhi ho raha hai original object me 





 //! <-----  Optional Chaining ------->

 let obj7 = {
    name: "Harsh",
    age: 26,
    email: "test@test.com",
    addresses:{
        city : "SUltanpur",
        locations: {
            lat:23.33,
            lng:78.8,
        },
    },
};
// !obj7.address.city = "Lko"; 
// esse ham object mechanges krr sakte hai but aagar jaise address hai vo bad me change ho ke addresses ho jkayega to ye error batayege 
// tab ham yaha obtional chaining karte hai ye bass d=sara key value ke last me ye ? lag jayta hai 

console.log(obj7?.address?.city); // ye pahekle check karne ke liye use hota hai

 // yaha par es ? ka kam hai error se bachane ka ki ha aagar addresses hai to thik nhi hai to undefine dega error nhi .



 //! <---- Coumputed Properties ------>
// eska kam hai bahar koe vakue jo assign hue ho usko ek object ke andar add karne ke liye hota hai 
// ye Starting me ja ke add hota hai
 let role = "admin";

 let obj8 = {
    name: "Harsh",
    age: 26,
    email: "test@test.com",
    addresses:{
        city : "SUltanpur",
        locations: {
            lat:23.33,
            lng:78.8,
        },
    },
    [role] : "Harsh", // ye ek tarah se syantax hai bahar ki ksihi value ko fetch karne ka 
};

console.log(obj8);

*/









