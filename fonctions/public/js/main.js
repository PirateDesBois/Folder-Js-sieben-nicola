// EXO1
// Créer une fonction qui prend deux paramètres, et les additionne, et fait un console.log du résultat.(Additionner)

// const somme = (nbr1,nbr2) => {
//     let somme= nbr1 + nbr2;
//     return somme;
// }
// console.log(somme(2,1));

// EXO2
// Créez une fonction qui prend deux paramètres, et soustrait le deuxième au premier, et faites un console.log du résultat.(Soustraction)

// const sous = (nbr1,nbr2) => {
// let sous = nbr1 -nbr2;
// return sous;
// }
// console.log(sous(4,2));
// EXO3  
// Créez une fonction qui prend deux paramètres, et les multiplie, et faites un console.log du résultat.(Multiplication)
// const multi = (nbr1,nbr2) => {
//     let multi = nbr1 *nbr2;
//     return multi;
//     }
//     console.log(multi(4,2));

// EXO4 
// Créez une fonction qui prend deux paramètres, et divise le premier par le deuxième, et faites un console.log du résultat.(Division)
// const div = (nbr1,nbr2) => {
//     let div = nbr1 /nbr2;
//     return div;
//     }
//     console.log(div(4,2));

// EXO5
// Créez une fonction qui prend deux paramètres, et retourne le reste de la division du premier par le deuxième, et faites un console.log du résultat.(Modulo)
// const div = (nbr1,nbr2) => {
//     let div = nbr1%nbr2;
//     return div;
//     }
//     console.log(div(10,3));


// EXO6
// Créez une fonction qui prend un paramètre, et retourne le carré de ce nombre, et faites un console.log du résultat.(Racine carrée)
// const racine = (nbr1) => {
//     let racine = Math.sqrt(nbr1)
//     return racine;
//     }
//     console.log(racine(25));


// EXO7
// Créez une fonction qui prend deux paramètres, et retourne le premier nombre à l'exposant du deuxième, et faites un console.log du résultat.(Exposant)

// const expo = (nbr1,nbr2) => {
//     let expo = Math.pow(nbr1,nbr2)
//     return expo;
//     }
//     console.log(expo(10,5));

// EXO8
// Créer une function [capitalize] qui transforme n'importe quelle chaine de caractères avec la première lettre en majuscule et le reste en minuscule;

// const capital = (chaine) => {
//     let capital = chaine.charAt(0).toUpperCase() + chaine.substring(1,chaine.length).toLowerCase();
//     return capital;
//     }
//     console.log(capital("coucou"));


// EXO9
// Créer une function [calcul] ayant 3 paramètres
// nbr1 , operator , nbr2
// Je dois pouvoir mettre un nombre choisir entre + - * ou / et un second nombre et obtenir une réponse (Utilisez un switch)



// const calcul=(nbr1,operator,nbr2) =>{
//     switch (operator) {
//         case "+":
//             let add = nbr1+nbr2;
//             return add;
//         case "-":
//             let sous = nbr1-nbr2;
//             return sous;       
//         case "*":
//             let fois = nbr1*nbr2;
//             return fois;
//         case "/":
//             let div = nbr1/nbr2;
//             return div;
//         default:
//             break;
//     }
// }
// nbr1 = +prompt("Choisissez un premier nombre");
// operator = prompt("Choisissez un operateur parmis: +,-,*,/");
// nbr2 = +prompt("Choisissez un deuxième nombre");
// alert(calcul(nbr1,operator,nbr2));

//PART2

// EXO1
// Créer une function [reverseNumber] qui retourne une série de nombre à l'envers (exemple si j'entre 851 elle me retourne 158)

// const reversenum=(n) =>{
// n = n + "";
// return n.split("").reverse().join("");
// }
// n = prompt("Donnez-moi un truc pour que je l'inverse")
// alert(reversenum(n));

// EXO2
// Créer une function [divPar2] contenant un switch qui vérifie si un nombre est divisible par 2
// Qui répond "Le num x est divisible par 2 x:2 = z"
// Dans le cas ou ce n'est pas divisible il répond : "Ce nombre n'est pas divisible par 2"
// const divpar2 = (x,y) =>{
//     if (Number.isInteger(x/y)){
//         return (`le nombre ${x} est divisible par ${y}`);
//     }
//     return (`le nombre ${x} n'est pas divisible par ${y}`)
    
// }
// x=prompt("donnez moi un nombre");
// y=prompt("donnez moi un deuxième nombre");
// alert(divpar2(x,y));


// EXO3
// Créer une fonction [logIn] qui va demander à l'utilisateur un mot de passe et vérifier s'il a bien entré "mdp" si oui, faites une alert "Vous êtes connecté", si non, redemander le mot de passe jusqu'à ce que l'utilisateur rentre "mdp"
// j'ai un peu aélioré le truc.


const login =() =>{
let x=prompt("insérer un mot de passe");
while (x.length<5) {
    alert("le mot de passe doit contenir un minimum de 5 caractères");
    x=prompt("insérer un mot de passe");
}
let y=prompt("veuillez répeter le mot de passe");

while (y!==x) {
            y=prompt(`Les deux mots de passe ne correspondent pas,

            - Votre premier mot de passe était : ${x}
            - Votre second mot de passe était : ${y}

            Veuillez réécrire correctement le premier mot de passe:`);
    }
    alert("Vous êtes connectés");
}
login();

