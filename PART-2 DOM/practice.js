console.log("------------- DOM Practice ---------------");

//! Ques- 1 : Use querySelectorAll to select all button with class "buy-now".

// let buyNow = document.querySelectorAll(".buy-now");
// console.log(buyNow);

//! Ques:- 2 : T1: Select the heading of a page by ID and change its text to "Welcome to Aditya"?

// let heading = document.querySelector("#heading");
// heading.textContent = "Hello Aditya Ji Kaishi Hai Aap....";

    
// ! Ques:- 3 Select all <li> elements and printy their text using a loop?
// 1st way
// let lis = document.querySelectorAll("li");
// lis.forEach(function(val){
//     console.log(val.textContent);  
// });

// 2nd Way:-

// let lis = document.querySelectorAll("li");
// for ( let i = 0; i < lis.length; i++){
//     console.log(lis[i].textContent); 
// };

// ! Ques:- 4 What is difference between innerText, textContent and innerHTML ?

//  esme jo innerText aur innerContent hai ye text ko bass badalte hai aur aagar esme ham koe tag ko dale ge to vaese hi print ho jata hai but innerHTML me ham koe tag ko pass krege to vo tag bhi apply hoga.

// ! Ques:- 5 Why should we use textContent insted of innerText?
// textContent faster hai aur ye sare tag ko nikalta hai jo show ho rhe vo bhi aur jo hide hai vo bhi show karata hai aur jo innerText hai ye jo show ho raha hai vhi show karta hai bass jaise div ke andar span tag hai to innertext bass div ko his how karta hai aur textContentb pure text aur tag ko show karta hai.

// ! Ques:- 6 Select the paragraph and replace its content with : /* <b>Update</b> by JavaScript */

// let p = document.querySelector("p");
// p.innerHTML = "<b>Updated By JavaScript</b>"

// ! Ques:- 7 How did you src of an image using JavaScript ?
// let img = document.querySelector("img");
// // console.log(img.src);
// console.log(img.getAttribute("src"));

// ! Ques:- 8 What does setAttribute do?

// document.querySelector("img").setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFYqoKTu_o3Zns2yExbst2Co84Gpc2Q1RJbA&s")

// ! Ques:- 9 Select s link and update its href to point to https://sheryians.com ?

// document.querySelector("a").setAttribute("href", "https://aditya-portfolio-orpin.vercel.app/")

// let a = document.querySelector("a");
// a.href = "https://aditya-portfolio-orpin.vercel.app/"

// ! Ques:- 10 Add a title attribute to a div dynamically?

// let div = document.querySelector("div");
// div.setAttribute("title","Some info");

// ! Ques:- 11 Remove the disable attribute from a button ?

// let btn = document.querySelector("button");
// btn.removeAttribute("disabled");

// ! Ques:- 12 What does createElement() do ? What's returned?
// ye html tag create karta hai aur usko display karta.

// ! Ques:- 13 What's the difference between appendChild() and prepend()?
// appendChail() ye element ko last me add karta hai aur prepend() ye element ko starting me add karta hai.

// ! Can you remove an element using removeChild()?

// document.querySelector("div").removeChild("elementNode");

// !