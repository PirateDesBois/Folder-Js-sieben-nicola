let exo1 = document.querySelector("h1");
exo1.innerHTML = "Les attributs class et id"
console.log(exo1);

let exo2 = document.querySelector("h2");
exo2.innerHTML = 'Exercice 2 partie A'

let exo3 = document.querySelectorAll("h2")[1];
exo3.innerHTML = 'Exercice 2 partie B'

let exo4 = document.querySelector('h2').nextElementSibling;
exo4.innerHTML = "Lajout de class et d'ID est assez simple, il suffit de connaitre les methodes 	&lt;b&gt;par coeur	&lt;/b&gt; "

let exo5 = document.querySelectorAll("h2")[1].nextElementSibling;
exo5.textContent = "La manipulation de l'attribut Style peut-être une <i>solution</i> rapide"

let exo216 = document.querySelector("h1");
exo216.setAttribute("id","bigTitle");
console.log(exo216);

let exo217 = document.querySelector("div");
exo217.setAttribute("class","container");


let exo218 = document.querySelectorAll("h2");
exo218.forEach(element => element.setAttribute("class","title"));

let exo219 = document.querySelectorAll("p");
exo219.forEach(element => element.setAttribute("class","text"));


let exo220 = document.querySelector("section");
exo220.setAttribute("class","margin-bottom border-black padding");

let exo221 = document.querySelectorAll("section")[1];
exo221.setAttribute("class","margin-top border-black padding");

let exo222 = document.querySelector("section>div");
exo222.setAttribute("style","background-color:blue;border: 5px solid red; height:20px; width:20px")

