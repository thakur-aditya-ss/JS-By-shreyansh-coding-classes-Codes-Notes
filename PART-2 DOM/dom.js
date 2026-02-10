console.log("========== DOM ==========");

//! Yaha pe ham DOM Samjhege aur DOM Manupulation Padhege.

//! DOM Monipulation: 

// html se element select karna 
// text badalna
// html badalna
// css badalna
// attribute
// event listeners

//! -------- SELECTING ELEMENTS --------!//


// ! document.getElementById():---->

// let abcd = document.getElementById("abcd");
// // console.log(abcd);
// console.dir(abcd);

// ! document.getElementsByClsssName():----> It isA array like structure but not array.

// let efgh = document.getElementsByClassName("efgh");
// // console.log(efgh);
// console.dir(efgh);


//! document.querySelector():----->it gives html collection

// let abcd = document.querySelector("h1"); // ye hamesa first element select karta hai
// console.dir(abcd);

//! document.querySelectorAll():---> it gives node list.

// let abcd = document.querySelectorAll("h1"); // ye hamesa first element select karta hai
// console.dir(abcd);

//! TEXT/CONTENT ACCESS: 
// innertext and textContent and innerHTML

//! Aagar hame kishi html ke tage me changes karna hoga to ham aaese karege :----->

// let h1 = document.querySelector("h1");
// // h1.textContent = "Hello Aditya Ji App kaise hai ";


//! innertext and textContent : ka kam hiota hai inner text ko badaklna html ke.
//! But innerHTML ka kam hota hai tage ke andar ke text ko hata ke vaha html text dalna :

// h1.innerHTML = "<i>Hello Aditya !!!!!</i>"
// h1.hidden = true; // eska kam hota hai html ke tag ko hidd karna jaha ham laga dege vo hide hio jayega aur display nhi nhi hoga.

//! ATTRIBUTE MANUPULATION :---->Jo hamara tag likh hota ghai uske aagr to likh hota hai usse attribut kahete hai:

// setAttribute:
// getAttribute:
// removeAttribute:

//! Example:---->

// let a = document.querySelector("a");
// h1.href = "https://www.google.com": // yaha se ham href ki value change krr pa rhe hai but jo a lage hai vo html hai but ham ye js se change krr pa rhe hai.


//! setAttribute: element.setAttribute(name,value);
let a = document.querySelector("a");
a.setAttribute("href","https://www.google.com");

let img = document.querySelector("img");
img.setAttribute("src", " ")




 
