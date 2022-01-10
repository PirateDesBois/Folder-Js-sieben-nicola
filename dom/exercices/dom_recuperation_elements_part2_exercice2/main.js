let h3 = document.getElementsByTagName("div")[0];
console.log(h3.firstElementChild)

let titrelvl3 = document.getElementsByTagName("h3")[1];
console.log(titrelvl3)

let next = document.getElementsByTagName("p")[1].nextElementSibling;
console.log(next);

let important = document.getElementsByClassName("important");
console.log(important);
let tableau = Array.from(important)
tableau.forEach(element => console.log(element.parentElement))

let succsucc = document.getElementsByTagName("p")[3].previousElementSibling;
console.log(succsucc.previousElementSibling)

let prenom = document.getElementsByTagName("h1")[2].nextElementSibling
console.log(prenom.nextElementSibling);

// let primo = document.getElementsByTagName("b")[2]
// console.log(primo.previousSibling);

let exo11 = document.querySelector("div > p").nextElementSibling;
console.log(exo11.nextElementSibling);
//
let exo12 = document.querySelectorAll("li")
console.log(exo12)
let brout = Array.from(exo12)
brout.forEach(element => console.log(element.innerText))



