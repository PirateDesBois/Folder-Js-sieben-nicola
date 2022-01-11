// Pour l'exercice 2
let theColor = "red";
let theBackground = "gold";
let pContent = "Il est possible de passer des parametres dans la function utilisé dans l'écouteur d'événement !"

let exo1=document.getElementsByTagName("input")[0];
let pSection=document.getElementsByTagName("p")[0];
console.log(exo1);
console.log(pSection);
let copy = (e) => {
    e.innerText=pContent
}
exo1.addEventListener("click",()=>copy(pSection));

let exo2=document.getElementsByTagName("h1")[0];
console.log(exo2)
let setColor= (e) => {
    e.style.background=theBackground
    e.style.color=theColor
}
exo2.addEventListener("click",()=>setColor(exo2))

