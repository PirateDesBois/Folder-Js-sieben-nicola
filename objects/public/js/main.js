// 1. Exo 1 
//   - Créez un objet avec vos valeurs
//   - 'Nom', 'prenom', 'age', 'taille'
//   - Affichez votre age via un console.log()


// 2. Exo 2 
//   - Créez un second et un 3eme personnage (le 3eme personnage doit rester vide)


// 3. Exo 3
//   - Remplir les propriétées du 3eme personnage
//   - Son nom doit valoir le nom du personnage1
//   - Son age doit valoir celui du personnage2
//   - Et sa taille doit être rempli avec la valeur que vous souhaitez
// let personne1={
//     nom:"Andra",
//     prenom:"adam",
//     age:27,
//     origine:"slovaquie",
// }
// console.log(personne1.nom)
// let personne2={
//     nom:"samy",
//     prenom:"pulat",
//     age:"26",
//     origine:"Turquie"
// }
// let personne3={}

// personne3.nom=(personne1.nom);
// personne3.age=(personne2.age);
// personne3.taille=("180cm");

// console.log(personne3);

// 3. Exo 3
//   - Créez un personnage avec un nom un et prenom et donnez lui une méthode 'sePresenter' qui fera un console.log "Bonjour je m'appelle " avec son nom puis son prénom.



// 4. Exo 4
//   - Créer un objet avec un nom et une méthode
//   - La méthode de votre objet lance un prompt permetant de changer son age
//   - Une alert renvoi "[nom de l'objet] a [age de l'objet] ans"


///////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 1. Exo 1

// ### Créer deux personnages du nom de François et Sergio
// ### Donnez leur à chacun une propriété panier (tableau) contenant tous deux des ingrédients différents du super marché, par exemple huile,tomate,pain etc..
// ### Rajouter à François la méthode derober, qui prend 2 aliments du panier de Sergio et les met dans son panier.

// let personne1 = {
//     nom:"agada",
//     prenom: "François",
//     age:28,
//     panier: ["huile","tomate","paing"],
//     derober(){
//         this.panier.push(personne2.panier.pop(0,1))
//         this.panier.push(personne2.panier.pop(1,1))
//     }
// }

// let personne2 = {
//     nom: "plop",
//     prenom: "Sergio",
//     age: 25,
//     panier: ["ragout","samy","carotte"],
// }
// personne1.derober();
// console.log(personne1.panier);

// 2. Exo 02 

//    - Créer un objet "vieille_dame" avec une propriété "âge" assez élevée une propriété "nom" contenant un "prenom" et un "nom de famille" (/!\ Objet dans objet), une propriété "moral" avec comme valeur "mal" et une propriété "objet" par exemple une canne

//    - une méthode "parler" qui selon son moral fait une alert différente, si son moral = "mal" alors elle dira "Vous me dérangez et le frappe avec son objet", si son moral = "bien" alors elle dira "bonjour" + le nom du vieil_homme.

//    - Créer ensuite l'objet vieil_homme avec une propriété "nom" et une méthode "adoucir" qui change le moral de la "vieille_dame" en "bien".

//    - Faites parler la vieille dame, puis lancer la méthode adoucir du vieil homme et relancer la méthode parler de la vieille dame.

// let veille_dame ={
//     nom:{
//         nom_de_famille:"Carolo",
//         prenom:"Joseline",
//     },
//     age:"10³",
//     moral:"mal",
//     objet:"durum",
//     parler(){
//         if (this.moral==="mal") {
//             console.log(`Vous me dérangez, coup de ${this.objet} dans votre face`);
//         } else if (this.moral==="bien"){
//             console.log(`Bien le bonjour ${vieil_homme.nom}`);
//         }
//     }
// }
// let vieil_homme ={
//     nom:"Alphonse",
//     adoucir(){
//         veille_dame.moral="bien"
//     }
// }
// veille_dame.parler();
// console.log(veille_dame.nom);
// vieil_homme.adoucir();
// veille_dame.parler();



// class rectangle {
//     constructor (height,width){
//         this.height = height;
//         this.width = width;
//     }
// }
// console.log(rectangle.name)

