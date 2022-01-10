let exo1 = document.querySelector("#content");
console.log(exo1);

let exo2 = document.querySelectorAll("#content");
console.log(exo2);

let exo3 = document.querySelector(".important");
console.log(exo3);
// console.log(exo3.nextElementSibling);
// console.log(exo3.nextElementSibling.nextElementSibling);
// console.log(exo3.nextElementSibling.nextElementSibling.nextElementSibling);
// console.log(exo3.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling);
// console.log(exo3.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling);

let exo4 = document.querySelectorAll(".important");
console.log(exo4);

let exo5 = document.querySelectorAll("li");

console.log(exo5);

exo5.forEach(element => console.log(element.innerText.substring(0,element.innerText.length-1)+element.innerText.charAt(element.innerText.length-1).toUpperCase()))

console.log(document.getElementById("content").getElementsByClassName("grandParagraphe")[0].innerText);

