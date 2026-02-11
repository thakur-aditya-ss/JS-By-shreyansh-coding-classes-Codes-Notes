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
// let a = document.querySelector("a");
// a.setAttribute("href","https://www.google.com");

// let img = document.querySelector("img");
// img.setAttribute("src","https://images.unsplash.com/photo-1770110000509-6c8298224699?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"); // yaha pe ham log  setAttribute ki help se js se html me link ya value provides krr sakte hai


//! getAttribute:----> getAttribute(name): yaha pe ham tag ke attribute ka name dalte hai aur hame uski value milti hai.


// let a = document.querySelector("a");
// console.log(a.getAttribute("href"));

//! removeAttribute():--->

// let a = document.querySelector("a");
// a.removeAttribute("href"); // yaha pe ham tag ke attribut ko delete krr dete hai  


//! DYNAMIC DOM MANUPULATION:

// createElement:
// append Child/prepend: jaha bhi element chahiye vaha
// removeChild: 

//! Example:
// let h1 = document.createElement("h1")
// h1.textContent = " Hello Create Element";
// console.log(h1);

// document.body.appendChild(h1); // ye append karne pe script tag ke bad dikhega inspect me 

// document.body.prepend(h1); // ye append karne pe script tag ke pahele dikhega inspect me.

//! document.createElement():

// let h1 = document.createElement("h1")
// console.log(h1);
// h1.textContent = " Hello Sir , How Are You....";
// document.querySelector("body").prepend(h1); // agar hame querry selector use karna hgai to hame body likhn HI Hoga.


//!  remove element: esme ham ghtlm me koe code likhege yaha se remove() likh ke delete krr dege.

// let h1 = document.querySelector("h1");
// h1.remove(); // eska kam hai remove karna 

//! line 24:
// yaha ham 4th element jko add karege JS ke through
 
// let h1 = document.createElement("h1");
// h1.textContent = " Hello Kaiso Ho aap - 4";
// // document.querySelector("div").append(h1); // ye Tag ko last me lane ka kam karta hai 
// document.querySelector("div").prepend(h1); // eska kam hota hai tag ko upar lane ka ya print karane ka.

//! Style Updates via . style and classList (add,remove,toggle):---->

// ! line - 30:---?

// let h1 = document.querySelector("h1");
// console.dir(h1);
// h1.style.color = "red";  // yaha se ham css apply krr sakte hai yaha 
// h1.style.backgroundColor = "blue";
// h1.style.fontFamily = "Gilroy";
// h1.style.textTransform = "capitalize";
// console.dir(h1);

// ! line - 41  
/**
let h1 = document.querySelector("h1");
console.dir(h1);

//! remove :-
h1.classList.remove("abcd"); // eska kam hota hai class ko hatane ka .

//! add :-
h1.classList.add("hulu"); // yaha ham classList property use karte hai jisme add() funtion use karte hai 

//! toggle :- eska kam hota hai aagar koe class lagi hai to hata deta hai aur hati hue hoti hai to lagadte hai

// h1.classList.toggle("hulu"); // ye jhata raha hai kyuki ham yaha same class dal rhe ghai jo hamne html me dali hai 

h1.classList.toggle("abcd"); // different class pass karege to add krr dega 

 */




 
