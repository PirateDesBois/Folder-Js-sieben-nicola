let inp = document.getElementsByTagName("input")[0];
let mettreFondBleu = () => {
    inp.style.background="blue"
}
inp.addEventListener("focus",mettreFondBleu);

let inp2 = document.getElementsByTagName("input")[1];
let mettreFondBleu2 = () => {
    inp2.style.background="blue"
}
let mettreEnBlanc2 = () => {
    inp2.style.background="white"
}
inp2.addEventListener("focus",mettreFondBleu2);

inp2.addEventListener("focusout",mettreEnBlanc2);




let pun=document.getElementsByClassName("premierParagraphe")[0];
let pdeux=document.getElementsByClassName("secondParagraphe")[0];
let ptrois=document.getElementsByClassName("dernierParagraphe")[0];
let but=document.getElementsByClassName("buttonExo")[0];
console.log(but);
let changeText = (prout) =>{
    prout.innerHTML =pdeux.innerHTML
    console.log(prout);
}
pun.addEventListener("click",()=>changeText(pun));
ptrois.addEventListener("click",()=>changeText(ptrois));
but.addEventListener("click",()=>changeText(but));


exo4 = document.getElementById("exo4");
console.log(exo4)
let plop=(gnu) =>{
    gnu.innerText="bbbbblablabla"
}
exo4.addEventListener("click",()=>plop(exo4))

// exo5

let exo5=document.getElementsByClassName("btn")[2];
let image1=document.getElementsByClassName("img-responsive")[0];
let pushh=(x) =>{
x.src="./src/image/tartine.png"
}
exo5.addEventListener("click",()=>pushh(image1));

// exo6
let exo6=document.getElementsByClassName("img-responsive")[1];
let exo61=document.getElementsByClassName("img-responsive")[2];
let recup=(x) =>{
x.src=exo6.src
}
exo61.addEventListener("click",()=>recup(exo61))


// exo7
let exo7=document.getElementsByClassName("btn")[3];
let textDessus=document.getElementsByTagName("p")[5];
let textDessous=document.getElementsByTagName("p")[6];

let interChange =(x,y)=>{
let a=x.innerText
x.innerText=y.innerText
y.innerText=a.innerText
}
exo7.addEventListener("click",()=>interChange(textDessus,textDessous));