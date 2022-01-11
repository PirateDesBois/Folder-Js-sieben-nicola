let exo1=document.getElementById("content");
let exo1_1=document.getElementsByTagName("p")[0];
let border = (e) =>{
    e.target.style.border="1px solid red "
}
let grasRouge = (e) => {
    e.target.style.fontWeight="bolder";
    e.target.style.color="red";
}
exo1.addEventListener("click",border);
exo1_1.addEventListener("click",grasRouge);

let para = document.querySelector('section>p')[0];
let text = (e) =>{
    e.target.innerText= "Il est possible de passer des parametres dans la function utilisé dans l'écouteur d'événement et nous verrons ça dans le prochain exercice !"
}
para.addEventListener("click",text)