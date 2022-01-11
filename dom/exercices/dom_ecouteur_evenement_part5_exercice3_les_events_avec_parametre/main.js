// exo1

// let liste = document.querySelectorAll("ul>li");
// let sayMyName = (e) =>{
//     alert(e.target.textContent);
// }
// liste.forEach(element => {
//     addEventListener("click",sayMyName)
// });

// exo2

let liste2 = document.querySelectorAll("ul>li");
let modif = (e) =>{
    e.target.textContent = prompt("ajouter du texte sur ce li")
    alert(e.target.textContent +" " + "a bien été Ajouté");
}
liste2.forEach(element => {
    addEventListener("dblclick",modif)
});

//exo3

let firstLi = document.getElementById("li-one")
console.log(firstLi);
let secondLi = document.getElementById("li-two")
console.log(secondLi);
let bouton = document.getElementsByTagName("input")[2];
console.log(bouton)

let invert = (x,y) =>{
    let a=x.value
    x.value=y.value
    y.value=a
    console.log(x, y);
}
bouton = addEventListener("click",()=>invert(firstLi,secondLi));
