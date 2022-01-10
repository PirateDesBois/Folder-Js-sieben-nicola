let myObject = {
    nom: 'nicolas',
    age: 18,
}
let exo1 = document.querySelector("#object").children
console.log(exo1);
myElements=Array.from(exo1);
console.log(myElements);

myObject = Object.keys(myObject);
console.log(myObject);

for (const key in myObject) {
    console.log(myObject[key]);
} 





