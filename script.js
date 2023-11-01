// Create an HTML and JS file and link them with the script tag
// Create at least 3 different elements in the body of your html file

// In your JS file select each element and log them to the console 
let firstHeading = document.getElementById("firstHeading");

console.log(document.querySelector("h1"));
console.log(firstHeading.innerHTML);
console.log(document.getElementById("secondHeading"));
console.log(document.getElementsByClassName("information"));
console.log(document.getElementById("button"))

// Select multiple elements with querySelectorAll() and log them to the console 
console.log(document.querySelectorAll("p"));
console.log(document.querySelectorAll("div"));