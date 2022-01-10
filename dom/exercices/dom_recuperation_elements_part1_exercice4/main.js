let exo1 = document.getElementsByTagName("h1")[1]
console.log(exo1);
let exo2 = document.getElementsByTagName("li")[3]
console.log(exo2)
let exo3 = document.getElementsByTagName("p")[1]
console.log(exo3.innerHTML.toUpperCase());
let exo4 = document.getElementsByTagName("li")
console.log(exo4)

let tableau = Array.from(exo4)

tableau.forEach(element => console.log(element.innerText.toUpperCase()))
