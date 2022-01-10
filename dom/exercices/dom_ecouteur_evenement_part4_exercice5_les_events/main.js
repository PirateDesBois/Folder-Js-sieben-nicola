// let div1 = document.getElementById("content");
// let premierH1=document.getElementsByTagName("h1")[0];
// let secondH1=document.getElementsByTagName("h1")[1];
// let e = (x) => {
//     console.log(x)
// }
// div1.addEventListener("click",()=>e(div1));
// premierH1.addEventListener("click",()=>e(premierH1));
// secondH1.addEventListener("click",()=>e(secondH1));

let div1 = document.getElementById("content");
let premierH1=document.getElementsByTagName("h1")[0];
let secondH1=document.getElementsByTagName("h1")[1];
let c = (e) => {
  e.target.style.border="1px solid red"
  console.log(e.target);
}
div1.addEventListener("click",c);









