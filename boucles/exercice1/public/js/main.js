// 1. Exo 1 Boucles FOR
//     - Creer une varaible de type array et inserez toutes les personnes de la classe
//     - A l'aide d'une boucle for, dites `bonjour + prenom` à chaque personne du tableau

// let tableau =['tinkiwikie','dipsie','lala','po'];

// for (let i = 0; i < tableau.length; i++) {
//     console.log("coucou "+ tableau[i]); 
// }


// 2. Exo 2 Boucles FOR (let)
//     - Dans un prompt inserés un nombre 
//     - A l'aide d'une boucle for, affichez les nombres de 0 jusqu'au nombre que vous avez choisi.

// let nbr = +prompt("inserez un nombre")

// for (let index = 0; index <= nbr ; index++) {
//     console.log(index);
// }


// 3. Exo 3 Boucles FOREACH
//      - Creer une varaible de type array et inserez toutes les personnes de la classe
//      - A l'aide d'une boucle foreach, dites bonjour + prenom à chaque personne du tableau

// let tableau =['tinkiwikie','dipsie','lala','po'];
// tableau.forEach(element => {
//     console.log("bonjour "+ element)
// });


// 4. Exo 4 Boucle FOREACH
//     - Créez un un array qui contient 5 éléments
//     - Affichez touts les éléments a l'aide d'une boucle foreach

// let tableau = ["atos","portos","aramis","daraniant"];
// tableau.forEach(element => {
//     console.log(element)
// });


///////////////////////////////////////////////////////////////////////////////////




// 1. Exo 1 
//     ## Déclarer une variable qui se nomme 'multiplicateur' valant 5
//     ## Utiliser une boucle for pour créer une table de multiplication allant jusqu'a 9 et apparaissant dans la console sous le format 5 x 1 = 5 etc.

// let mutliplicator = 5 ;
// for (let index = 0; index < 10; index++) {
//     console.log(`${mutliplicator} x ${index} = ${multiplicator*index}`);
// }

// 2. Exo 2
//     ## La même chose sauf qu'on incrémente par deux

// let mutliplicator = 5 ;

// for (let index = 0; index < 10; index= index +2) {
//     console.log(`${mutliplicator} x ${index} = ${multiplicator*(index+2)}`);

// }

// 3. Exo 3
//    - Faire une boucle descendante pour les nombres pairs de 20 à 0
//         // Ex: 20-18-16, ect.

// for (let index = 20; index >=0; index = index -2) {
//     console.log(index);

// }

// 4. Exo 4
//     - Créer un tableau avec les prénoms des gens de la classe
//     - Avec l'aide d'une boucle, mettre les prénoms ayant plus de 5 caractères dans un second tableau qui se nomme 'longPrenoms'


// let tableau = ['tinkiwikie', 'dipsie', 'lala', 'po'];
// let longprenoms = [];
// for (let i = 0; i<tableau.length; i++) {
//     if (tableau[i].length > 5) {
//         longprenoms.push(tableau[i]);
//     }
// }
// console.log(longprenoms);

// 5. Exo 5
//     - Créer un tableau qui se nomme 'sommes' avec une multitude de valeurs numérique
//         let sommes = [14, 7 , 97, 65 , 247 , 67 , 101 , 4 , 34 ,78 , 1 ,900 , 0, 11 , 32 , 23 , 61];
//     - créer un tableau qui se nomme 'grossesSommes'. Si la valeur excède 60, pousser les dans ce tableau et les retirer du tableau sommes


// let sommes = [14, 7 , 97, 65 , 247 , 67 , 101 , 4 , 34 ,78 , 1 ,900 , 0, 11 , 32 , 23 , 61];
// let grossesSommes=[];
// for (let i = 0; i < sommes.length ; i++){
//     if(sommes[i] > 60){
//         grossesSommes.push(sommes[i]);
//         sommes.splice(i, 1);
//         i--; 'car àpres la première suppression, l'index change du coup il fait revenir en arrière d'un cran'
//     }
// }
// console.log(grossesSommes);
// console.log(sommes);
// 6. Exo 6
//     - Voici un tableau :
//     let donnees = [14, 7 , 97, {} , "247" , 67 , 101 , true , 34 ,78 , [] ,'coding school' , 0, 11 , 32 , "italie" , 61,null,'cent',100];

//     - Triez le contenu du tableau donnees en verifiant le type de chaque donnée
//     - Creez 4 Tableaux : 'typeString' , 'typeNumber' , 'typeObject' , 'typeAutre.
//     - Videz le tableau "donnees" en redistribuant avec l'aide de condition et d'une function prédéfinie trouvée sur internet, dans les bons tableaux.

// let donnees = [14, 7, 97, {}, "247", 67, 101, true, 34, 78, [], 'coding school', 0, 11, 32, "italie", 61, null, 'cent', 100];

// let typeString = [];
// let typeNumber = [];
// let typeObject = [];
// let typeAutre = [];
// for (let i = 0; i < donnees.length; i++) {
//     switch (typeof donnees[i]) {                   

//         case "string":
//             typeString.push(donnees[i]);
//             donnees.splice(i, 1);
//             i--
//             break;
//         case "number":
//             typeNumber.push(donnees[i]);
//             donnees.splice(i, 1);
//             i--
//             break;
//         case "object":
//             typeObject.push(donnees[i]);
//             donnees.splice(i, 1);
//             i--
//             break;
//         default:
//             typeAutre.push(donnees[i]);
//             donnees.splice(i, 1);
//             i--
//             break;

//     }

// }
// console.log(typeString);
// console.log(typeNumber);
// console.log(typeObject);
// console.log(typeAutre);
//    --> dans ce cas -ci, pour trier, l'utilisation d'un switch est plus simple qu'un if


// 7. Exo 7
//    - Créez un tableau avec les prénoms de toute la classe, et mettez leur première lettre en majuscule, la dernière lettre aussi, et le reste en minuscule

// let classe = ['tinkiwikie', 'dipsie', 'lala', 'po'];
// for (let i = 0; i<classe.length; i++) {
//     classe[i] = classe[i].slice(0,1).toUpperCase() + classe[i].slice(1,classe[i].length -1) + classe[i].slice(-1).toUpperCase()
// }
// console.log(classe);



// 8. Exo 8
//    - Créez une variable avec cette valeur = "Bonjour à tous"
//    - Vous devez faire en sorte d'avoir ce resultat à la fin : BoNjOuR A ToUs


// let bjr = "bonjour a tous"

// bjr = bjr.split("")
// for (let i = 0; i < bjr.length; i += 2) {
//    bjr[i] = bjr[i].toUpperCase()
// };bjr = bjr.join("")

// console.log(bjr);




// ou 




// let coucou = "Bonjour à tous"

// console.log(coucou.length)
// for ( let i = 0 ; i < coucou.length ; i = i + 2) {

//     coucou = coucou.slice(0,i) + coucou.slice(i, i+1).toUpperCase() + coucou.slice(i+1,coucou.length)
//     console.log(coucou)
// }


// 9. Exercice de puissance (Si vous le réussissez vous êtes des montres)

// Voici le tableau :

// let tab = [1440, 1511, 1731, 1400, 1542, 1571, 1768, 1730, 1959, 1342, 1744, 872, 1237, 1846, 1597, 1583, 1711, 1499, 1679, 1895, 1875, 1928, 1728, 1673, 481, 1934, 673, 1704, 1916, 1958, 1821, 1649, 1640, 1802, 1732, 121, 1924, 1438, 1748, 1046, 1905, 1566, 1152, 1964, 1518, 1603, 1414, 1785, 1993, 1594, 1761, 1455, 1738, 1699, 1507, 1483, 1450, 1653, 1644, 19, 1340, 1227, 1353, 2009, 1188, 1228, 1898, 1941, 1515, 1766, 1351, 1980, 1378, 1702, 1620, 1729, 1279, 1384, 1894, 1770, 1853, 1161, 1970, 1986, 1669, 1938, 1602, 1190, 1822, 425, 1750, 1632, 1613, 1805, 1718, 1990, 1762, 1242, 1485, 1598, 1893, 1995, 1823, 1786, 1506, 1464, 1467, 1639, 1674, 1903, 1961, 1478, 1847, 1760, 1997, 2010, 899, 2000, 1488, 1243, 1891, 1504, 1693, 1176, 1391, 1563, 692, 1497, 1428, 1745, 1368, 1723, 1989, 1930, 1171, 1840, 1372, 1987, 1952, 1842, 1967, 1759, 1929, 1945, 1919, 1333, 1692, 1811, 1221, 1520, 1920, 1093, 1618, 1795, 1686, 1369, 1820, 1857, 1356, 1562, 2004, 1519, 1628, 1831, 1687, 1792, 1948, 927, 1789, 1546, 1338, 1614, 1472, 1494, 1979, 1936, 1577, 1147, 1446, 1683, 1375, 856, 1787, 1517, 1724, 1334, 1642, 1496, 1668, 1725, 1800, 1708, 1814, 1585, 1827, 1801, 1208, 1839, 1596, 1925];


//  -  Trouve la combinaison de deux nombres dont le résultat est “2020”.
// for (let i = 0; i < tab.length; index++) {
//     for (let a = 0; a < tab.length; a++) {
//         let somme = tab[i] + tab[a];
//         if (somme === 2020) {
//             console.log(`la somme entre ${tab[i]} et ${tab[a]} donne 2020`);
//         } 
//     }
// }




//  -  Trouve la combinaison de trois nombres dont le résultat est “2020”.
// for (let i = 0; i < tab.length; i++) {
//     for (let a = 0; a < tab.length; a++) {
//         for (let x = 0; x < tab.length; x++) {
//             let somme = tab[i] + tab[a];
//             if (somme === 2020) {
//                 console.log(`la somme entre ${tab[i]},${tab[a]} et ${tab[x]} donne 2020`);
//             }   
//         } 
//     }  
// }

//ou



// 10. Utilisez une boucle for pour avoir ce résultat :
// 1 
// 1 1
// 1 1 1
// 1 1 1 1 
// 1 1 1 1 1
// 1 1 1 1 1 1 
// 1 1 1 1 1 1 1

// let pyramide = [1];
// for (let index = 1; index <= 10; index++) {
//     console.log(pyramide.join(" "));
//     pyramide.push(1);

// }

// 11. 
//     - Vous allez créer un tableau avec 10 prénoms
//     - Vous allez créer un tableau avec 10 chiffres d'entre 0 et 20
//     - Vous devez combiner ces deux tableaux :
//      // console.log(`${lepremiereprenom} a eu ${lepremierchiffre}/20 en Math`

// let nom=["brut","bule","jean","pascale","adam","alfred","ilvis","gueunièvre","rutte","ralouf"];
// let note=[1,3,5,7,9,11,13,14,16,19];
// for (let index =0; index <10; index++) {
//     console.log(`${nom[index]} a eu ${note[index]}/20 en Math`)
// }



// 1. Exo 1 Boucles WHILE
//     - Créez une variable classe avec un array
//     - A l'aide d'un prompt, choisissez le nombre max d'étudiants dans la classe
//     - A l'aide d'une boucle while, inserez des étudiants dans la classe tant que la classe n'est pas remplie
//     - Après avoir rempli la classe, affichez tous les etudiants

// let classe=[];
// let nbr = +prompt("donnez moi un nombre d'étudiants maximum pour la classe")
// while (classe.length < nbr){
//     classe.push(prompt("ajoutez un étudiant"));
// }
// console.log(classe);


// 2. Exo 02
//     - Créer un tableau de 9 prénoms 
//     - Faire une boucle sur les prénoms précédé de Bonjour tant que 9 n'est pas atteint et les affiché dans la console
//     - Astuce : let i = 0;
//     - Astuce 2 : (i < 9)
// let array=["jean","phil","eddy","machin","much","truc","plop","patator","fistine"]
// let i=0;
// while (i<array.length) {
//     i++
//     console.log(`bonjour  ${array[i]}`)
// } 

// 3. Exo 03
//     - Créer un tableau de 6 fruits
//     - Avec l'aide d'une boucle while vider le tableau.
//     - Utilisez fruits.length

// let fruit =["litchi","banana","tomato","lime","corosol","papaya"]
// while (fruit.length>0) {
//     fruit.splice(0,1); 
// }
// console.log(fruit);

// 4. Exo 04
//     - Créer un tableau de 4 légumes du nom de 'panierLegumes'
//     - Stocker la longueur du tableau dans une variable du nom de 'longeur'
//     - Vider le tableau panierLegumes pour mettre son contenu dans un second tableau du nom de 'caisseLegumes'

// let panier =["carottes","patates","courgette","aubergine"];
// let longueur = panier.length
// let Caisse=[];
// let i=0;
// while (longueur>0) {
//     Caisse.push(panier[i]);
//     panier.splice(0,1);  
// }
// console.log(Caisse);
// console.log(panier);

// 5. Exo 05
//     - Préparez une énigme, et faites une boucle WHILE qui va vérifier si l'utilisateur répond correctement à l'énigme via un prompt, tant qu'il se trompe, vous lui reposer la question. S'il a juste, faites une alerte qui le félicite
// let enigma = prompt("Pour me manger on doit m'enlever l'extérieur, cuire mon intérieur, manger mon extérieur et jeter mon intérieur. Qui suis-je ?")
// while (enigma!=="maïs") {
//       enigma= prompt("Plus je suis chaud, plus je suis frais. Qui suis-je ?");
// }
// if (enigma==="pain") {
    
// }
// alert("félicitation, tu as répondu à l'énigme correctement, tu es très fort");


// 6. Exo 06
//     - Re faire l'exo 4 avec DO WHILE


// 7. Exo 07
//     - Créer une variable avec l'année actuelle
//     - Créer un programme qui génère une année de façon aléatoire entre 1970 et 2018. L’utilisateur doit donner le bon age en répondant à la question suivante
//     - : “Si je suis née en 1988(année généré aléatoirement), quel age ai-je aujourd’hui ? ”
//     - L’utilisateur a trois essais. S’il donne la bonne réponse, on sort et s’il arrive à trois essaies on sort également.
//     - Finir avec un affichage.

// let annee = 2021;
// let min=1970; 
// let max=2018;  
// let random = Math.round(Math.random() * (max - min)) + min;
// let answer =2021 - random;
// let indice = 2;
// let ask = +prompt(`Si je suis née en ${random}, quel age ai-je aujourd’hui ?`);
// while (ask!==answer && indice !== 0) {
//     alert(`il vous reste ${indice} essais`)
//     ask = +prompt(`Si je suis née en ${random}, quel age ai-je aujourd’hui ?`);
//     indice--
// }
// if (ask===answer) {
//     alert("bonne réponse");
// }else{
//     alert("echec");
// }

// 8. Exo 08
//     - Demandez a l'utlisateur de remplir un panier de fruit jusqu'a en obtenir 8
//     - Quand son panier est rempli montrez lui, puis demandez lui si il désire retirer un fruit
//     - Si il met le nom d'un fruit alors le fruit est retiré, on lui montre son nouveau panier puis on lui repose la question, si il met autre chose que le nom d'un fruit alors on lui dit "Merci bon appetit"
//     - Chaque fruit entré par l'utilisateur doit finir par etre ortographié avec une premiere lettre majuscule et le reste en minuscule 
//     - Lui montrer son panier avec la première lettre en majuscule
let panier=[];
let ask;
let indice=8;
while (indice!==0) {
    alert(`il te reste ${indice} légume(s) à ajouter`)
    ask = prompt("Ajoute tes légumes dans le panier à légumes");
    panier.push(ask);
    indice--
}
alert(panier)
let question=window.confirm("voulez vous retirer un légume?")
if (question ===  true) {
    let question2 = prompt("Quel légume voulez-vous retirer?");

    for (let i =0; i< panier.length; i++){
      if (question2 === panier[i]) {
          panier.splice(panier[i],1);
          alert(panier);
      }else if (question2!==panier[i]) {
          alert(panier);
          question2 = prompt("Quel légume voulez-vous retirer?");
          for (let i =0; i< panier.length; i++){
            if (question2 === panier[i]) {
                panier.splice(panier[i],1);
                alert(panier);   
            }
        }

} else {
    alert("Bon appétit")
}
}
}
