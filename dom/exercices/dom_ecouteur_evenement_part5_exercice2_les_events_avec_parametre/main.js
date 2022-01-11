// Pour l'exercice 2
let pContent = "Il est possible de passer des parametres dans la function utilisée dans l'écouteur d'événement !"

// exo1

let elements = document.querySelector("div").children
console.log(elements);
elements=Array.from(elements)
console.log(elements);
elements.forEach(element => {
    element.addEventListener("click",()=>console.log(element));
});

//exo2

let maj= document.getElementById('content')
let prog = (e) =>{
    e.target.textContent=e.target.textContent.toUpperCase()
}
maj.addEventListener("dblclick",prog);

//exo3

//variables
let prop1="border:1px solid gold;"
let prop2="background-color: blue;"
let prop3="background-color: red;"
let prop4="border: 5px dotted gold;"
let h1=document.getElementsByTagName("h1")[0];
let h2=document.getElementsByTagName("h2")[0];
let p = document.getElementsByTagName("p")[0];
let bouton=document.getElementsByTagName("input")[0];

//tableau
let tableau=[prop1,prop2,prop3,prop4];

//random
let random=Math.floor(Math.random()*4);
random=tableau[random];

//fontion
let plop=() =>{
    //random
    let random=Math.floor(Math.random()*4);
    random=tableau[random];
    h1.style=random
    h2.style=random
    p.style=random
}

//ecouteur d'évenement
bouton.addEventListener("click",plop);





// let div1 = document.getElementById("content");
// let premierH1=document.getElementsByTagName("h1")[0];
// let secondH1=document.getElementsByTagName("h1")[1];
// let c = (e) => {
//   e.target.style.border="1px solid red"
//   console.log(e.target);
// }
// div1.addEventListener("click",c);

