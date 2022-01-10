let style = document.getElementsByTagName("h1")[0]
console.log(style);
style.addEventListener("click",() =>{
    style.setAttribute("style","color:blue;font-size:50px;border:2px solid purple;")
});

// or

// let exo1=document.getElementsByTagName("h1")[0];
// let mettreEnBleu=() => {
//     exo1.style.color="blue"
// }
// mettreEnBleu()

// exo1.addEventListener("click",mettreEnBleu)