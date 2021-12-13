// let jour = prompt("mettre un jour de la semaine");
// jour = jour.toLowerCase

// switch (jour) {
//     case "lundi":
//         console.log("Cours a molengeek"+"Sport en soirée");
//         break;
//     case "mardi":
//         console.log("escalade");
//         break;
//     case "mercredi":
//         console.log("sport de chambre");
//         break;
//     case "jeudi":
//         console.log(">Ramen");
//         break;
//     case "vendredi":
//         console.log("rien");
//         break;
//     case "samedi":
//         console.log("Opéra");
//         break;
//     case "dimanche":
//         console.log("Jour du seigneur Ctulhu");
//         break;
//     default:
//         console.log("rien de prévu");
//         break;
// }







// let value = +prompt("déclarez un nombre");
//     switch (value%2) {
//         case 0:
//             console.log(`${value} est un multiple de de 2`);
//             break;
//         case 1:
//             console.log(`${value} n'est pas un multiple de de 2`)
    
//         default:
//             console.log('je ne sais pas')
//             break;
//     }
    


let nbr1 = +prompt("déclarer un premier nombre");
let operator = prompt("choisissez parmis ces opérateurs : + , - , * , % ");
let nbr2 = +prompt("déclarer un deuxième nombre");
    switch (operator) {
        case"+" : alert(`${nbr1} + ${nbr2} = ${nbr1 + nbr2}`);
            break;
        case"-" : alert(nbr1 - nbr2);
            break;
        case"*" : alert(nbr1 * nbr2);
            break;
        case"/" : alert(nbr1 / nbr2);
            break;
    
        default:
                alert("Ceci n'est pas un opérateur connu de ma matrice")                  
            
            break;
    }

