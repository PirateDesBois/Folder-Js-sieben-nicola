//exemple de référence:
// class personne{
//     constructor(nom,prenom){
//         this.nom = nom;
//         this.prenom = prenom;
//         this.saluer = () => {
//             console.log(`Bonjour, je suis ${this.prenom}`)
//         }
//     }
// }

// let personne3 = new personne("plop","flop");
// let personne4 = new personne("agar","io");
// let personne5 = new personne("samy","pulat");
// console.log(personne3,personne4,personne5);

// personne3.saluer();

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 1. EXO1
//   - Traduire le code suivant en class et en instances

// // lieux
// ### let maison = {
// ###   nom: "maison",
// ###   contenu: [],
// ### };
// ### let epicerie = {
// ###   nom: "epicerie",
// ###   contenu: [],
// ###   ingredients: [],
// ### };
// ### let cuisine = {
// ###   nom: "cuisine",
// ###   contenu: [],
// ###   ingredients: [],
// ### };
// class Lieux {
//     constructor(nom,contenu,ingredients){
//         this.nom = nom;
//         this.contenu = contenu;
//         this.ingredients = ingredients;
//     }
// }
// let maison = new lieux("maison",[]);
// let epicerie = new lieux("epicerie",[],[]);
// let cuisine = new lieux("cuisine",[],[]);
// console.log(maison,epicerie,cuisine);

// // ingredients
// ### let poivron = {
// ###   nom: 'poivron',
// ###   etat: 'entier',
// ###   prix:  1 ,
// ###  };
// ###  let oignon = {
// ###   nom: 'oignon',
// ###   etat: 'entier',
// ###   prix:  2 ,
// ###  };
// ###  let oeuf = {
// ###   nom: 'oeuf',
// ###   etat: 'entier',
// ###   prix:  4 ,
// ###  };
// ###  let epice = {
// ###   nom: 'epice',
// ###   etat: 'moulu',
// ###   prix:  3.25 ,
// ###  };
// ###  let paprika = {
// ###   nom: 'paprika',
// ###   etat: 'moulu',
// ###   prix:  1.5 ,
// ###  };
// ###  let fromage = {
// ###   nom: 'fromage',
// ###   etat: 'coupé',
// ###   prix:  1.6 ,
// ###  };
// class Ingredients {
//     constructor(nom,etat,prix){
//         this.nom = nom;
//         this.etat = etat;
//         this.prix = prix;
//     }
//}
// let poivron = new Ingredients("poivron","entier",1);
// let oignon = new Ingredients("oignon","entier",2);
// let oeuf = new Ingredients("oeuf","entier",4);
// let epice = new Ingredients("epice","moulu",3.25);
// let paprika = new Ingredients("paprika","moulu",1.5);
// let fromage = new Ingredients("fromage","coupé",1.6);
// console.log(poivron,oignon,oeuf,epice,paprika,fromage);

// // Personne
// ### let personnage = {
// ###  nom: "Maxime",
// ###  lieu: "néant",
// ###  argent: 100,
// ###  panier: [],
// ###  se_deplacer(x){
// ###  },

// ###  payer(x){
// ###  },
// ###  couper(x,y){
// ###  }
// ### }
// class Personne {
//     constructor(nom,lieu,argent,panier){
//         this.nom = nom;
//         this.lieu = lieu;
//         this.argent = argent;
//         this.panier = panier;
//     }
//     se_deplacer = (x) => {};
//     payer(x){};
//     couper(x,y){};
// }
// let personnage = new personne("maxime","néant",100,[]);
// console.log(personnage);


// 2. EXO02
//   - Créer une class Personnage avec comme propriétés : 
//   - age , nom , ville
//   - Faire 2 instances de cette class.
// class Personnage {
//     constructor(age,nom,ville){
//         this.age=age;
//         this.nom=nom;
//         this.ville=ville;
//     }
//     sePresenter = () =>{
//         console.log(`Bonjour, je m'appelle ${this.nom}`)
//         alert(`Bonjour, je m'appelle ${this.nom}`)
//     }
// }
// let personnage1 = new Personnage(24,"plop","Bagdad");
// let personnage2 = new Personnage(55,"bip","Phuket");
// personnage1.sePresenter();
// personnage2.sePresenter();

// 3. EXO03
//   - Rajouter la methode 'sePresenter' à la class Personnage qui dira "Bonjour, je m'appelle [nom-de-la-personne] !" via un console.log
//   - Lancer cette méthode sur les deux instances de l'exo2

// 4. Exo04
//    - Créer une class Objet
//      - _Propriétés : nom, prix

//    - Créer deux instances d'objets avec un nom et un prix
//    - Créer une boite (tableau) et mettre les deux objets dedans.

//    - Créer une class Personnage
//     - _Propriétés : nom(string), sac(tableau), argent(number)
//     - _Méthode : prendre(objet)
//     - _Méthode : acheter(vendeur, objet)

// - Créer deux instances de Personnage et faites leur chacun [prendre] un objet de la boite avec leur méthode.
// - Ensuite faites acheter à l'un des deux, l'objet de l'autre.

// class Objet {
//     constructor(nom,prix){
//         this.nom=nom;
//         this.prix=prix;
//     }
// }
// let cadeau = new Objet("squate",25);
// let truc = new Objet("ikea",150);

// let boite=[];
// boite.push(cadeau);
// boite.push(truc);


// class Personne {
//     constructor(nom,sac,argent){
//         this.nom=nom;
//         this.sac=sac;
//         this.argent=argent;
//     }
//     prendre = () => {
//         this.sac.push(boite[0]);
//         boite.splice(boite[0],1);
//     };
//     acheter = (vendeur) => {
//         this.sac.push(vendeur.sac.pop())
//     };
//     voler = (vole) => {
//         this.sac.push(vole.sac.pop());
//         this.sac.push(vole.sac.pop());
//         vole.sac.push("crotte");
//     }
// }

// let personnage_X = new Personne("Jacques",[],200);
// let personnage_Y = new Personne("Vargas",[],370);

// personnage_X.prendre();
// console.log(personnage_X.sac)
// personnage_Y.prendre();
// console.log(personnage_Y.sac);
// personnage_X.acheter(personnage_Y);
// console.log(personnage_X.sac);
// personnage_Y.voler(personnage_X);
// console.log(personnage_Y.sac);

// ## EXO5

// ### Créez une class [Lieu] avec une propriété nom(string) et personnes(array vide).
// ### Puis créez des instances de [Lieu]: MolenGeek, Snack et Maison
// ### Puis créez une class [Personne] avec une propriété nom(string), prenom(string), argent(number) et une methode seDeplacer(), cette methode permet de vous déplacer dans les differents lieux en faisant appel à la méthode embarquer() du bus.
// ### Puis créez une instance de votre personnage.
// ### Créez une class [Bus] avec une propriéte personnes(array vide), une propriéte caisse(number) et une methode embarquer() (qui sera appelée dans la méthode seDeplacer() de la personne) qui va vérifier si vous possedez l'argent, si oui, il le déduit de votre argent, et le rajoute à sa caisse, et le personnage rentre dans le bus. Le bus cout 2.80.

// ### Créez une instance de Bus. 
// ### 8h00 Vous êtes à la maison.
// ### 8h30 Vous prennez le bus vers MolenGeek.
// ### 8h45 Vous êtes à MolenGeek.
// ### 12h45 Vous sortez de MolenGeek, vous prenez le bus pour aller au snack.
// ### 13h30 Vous sortez du snack, et vous rentrer pied à MolenGeek pour digérer.
// ### 17h10 Vous sortez de MolenGeek, vous prenez le bus pour rentrer chez vous.

// ### Faites un console.log() de votre argent, ainsi que l'argent du Bus

// class Lieu {
//     constructor(nom, personnes){
//         this.nom=nom;
//         this.personnes=personnes;
//     }
// }
// let lieu1 = new Lieu("Molengeek",[]);
// let lieu2 = new Lieu("Snack",[]);
// let lieu3 = new Lieu("Maison",[]);

// class Personne {
//     constructor(nom,prenom,argent){
//         this.nom=nom;
//         this.prenom=prenom;
//         this.argent=argent;
//     }
//     se_deplacer = () => {
//         taxi.embarquer(this); 
//     }
//     marcher = () => {
//         pied.embarquer(this);
//     }
// }

// let nico = new Personne("Nico","cheypo",11.2);

// class Bus {
//     constructor(personnes,caisse){
//         this.personnes=personnes;
//         this.caisse=+caisse;
//     }
//     embarquer = (personne) => {
//         if (personne.argent>=2.80) {
//             personne.argent-=2.80
//             personne.argent=Number(personne.argent.toFixed(1));
//             this.caisse+=2.80
//             this.caisse=Number(this.caisse.toFixed(1));
//             this.personnes.push(personne);
//         }else if(personne.argent<2.80) {
//             console.log("Vous n'avez pas assez d'argent");
//         }
//     }
//     marcher = (personne) => {
//         this.personnes.push(personne);
//     }
// }
// let taxi = new Bus([],50);
// let pied = new Bus([]);

// // ### 8h00 Vous êtes à la maison.
// lieu3.personnes.push(nico);
// console.log(lieu3);
// // ### 8h30 Vous prennez le bus vers MolenGeek.
// lieu3.personnes.splice();
// nico.se_deplacer(lieu1);
// console.log(taxi);

// // ### 8h45 Vous êtes à MolenGeek.
// console.log(lieu1)
// taxi.personnes.splice();
// // ### 12h45 Vous sortez de MolenGeek, vous prenez le bus pour aller au snack.
// nico.se_deplacer(lieu2);
// console.log(lieu2);
// taxi.personnes.splice();
// // ### 13h30 Vous sortez du snack, et vous rentrer pied à MolenGeek pour digérer.
// nico.marcher(lieu1);
// lieu2.personnes.splice();
// console.log(lieu1);
// // ### 17h10 Vous sortez de MolenGeek, vous prenez le bus pour rentrer chez vous.
// pied.personnes.splice();
// nico.se_deplacer(lieu3);
// console.log(lieu3);
// taxi.personnes.splice();
// console.log(nico.argent);
// console.log(taxi.caisse);
//////////////////////////////////////////////////////////////////////////////////////////
// - Vous allez créer une class Personne qui aura besoin d'un nom, prenom, age, argent, panier et d'une methode prendre
// - Vous allez créer une class Produit dans laquelle il y a un nom, un prix et une taille (XS, S, M, L, XL)

// - Vous allez créer 3 instances de Personne et 5 instance de Produit
// - Avez la méthode prendre, vous allez mettre les produits dans votre sac


//suite 

// - Vous allez ajouter une propriété dans le produits appelé acheté qui sera false
// - Dans la classe personne, vous allez créer une méthode acheter qui va faire passer tous les éléments de votre sac en acheté true et vous allez retirer l'argent de que vous avez par rapport au prix du produit

import {Personne,Produit} from "./_class.js";


let machin= new Personne("Monsieur","Machin",105,80,[]);
let brouks= new Personne("Brouks","Jhon",25,80,[]);
let samy= new Personne("Pulat","Samy",26,80,[]);
let personneList=[machin,brouks,samy];


let gucci= new Produit("t-shirt",25,"xl");
let nike= new Produit("pantalon",50,"xl");
let prada= new Produit("casquette",20,"s");
let puma= new Produit("chaussures",60,"m");
let addadas= new Produit("gants",20,"xxxl");
let products =[gucci,nike,prada,puma,addadas];

let randomProduct=products[Math.floor(Math.random()*5)];
let generate=Math.floor(Math.random()*11);
let randomPersonne=personneList[Math.floor(Math.random()*3)];

if (generate < 5) {
    randomPersonne.voler(randomProduct);
}else if (generate >= 5) {
    randomPersonne.acheter(randomProduct);
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////
// # Exercice bonus: Combat Pokemon

// ## mise en place:

// ### Dans ce exo, tu vas devoir mettre en place une Class Pokemon dans laquelle on retrouvera un nom sous forme de String, un niveau allant de 1 à 99 sous forme d'un Integer, des points de vie sous forme d'un Integer, une vitesse aussi sous forme d'un Integer ainsi qu'un tableau de type avec un maximum de 2 types par Pokemon
// class Pokemon{
//     constructor(nom,lvl,pv,vitesse,tabtype){
//         this.nom=nom;
//         this.lvl=lvl;
//         this.pv=pv;
//         this.vitesse=vitesse;
//         this.tabtype=tabtype;
//     }
// }



// #### (Pour voir les différents types de Pokemon, tu peux consulter cette page : https://boutique-pokemon.com/blogs/blog-pokemon/table-types-pokemon )

// class SamyCogneur extends Pokemon {
//     coupDePoing(defenseur){
//         defenseur.pv -=60
//     }
//     Musique(defenseur){
//         defenseur.pv -=30
//     }
//     baillement(defenseur){
//         defenseur.pv -=20
//     }
//     charge(defenseur){
//         defenseur.pv-=100
//     }
// }
// class MomoDoudou extends Pokemon {
//     paroleALaChaine(defenseur){
//         defenseur.pv -=80
//     }
//     sympathie(defenseur){
//         defenseur.pv +=30
//     }
//     desespoir(defenseur){
//         defenseur.pv -=60
//     }
//     charge(target){
//         defenseur.pv-=50
//     }
// }

// let samy = new SamyCogneur("samyCogneur",25,200,150,["pierre","eau"]);
// let momo = new MomoDoudou("momoDoudou",30,120,100,["air","terre"]);
// let eliot = new Pokemon("culbutoEliot",27,250,100,["terre","herbe"]);
// let eliassss = new Pokemon("elias",50,300,100,["terre","pierre"]);
// let batou = new Pokemon("batouDoudou",35,200,150,["terre","herbe"]);




// // ## Combat:

// let attaquant=[];
// let attack=prompt(`quel pokeGeek désirez-vous utiliser? parmis samyCogneur, momoDoudou, CulbutoEliot, elias, batouYoutou`);

// switch (attack) {
//     case "samyCogneur":
//         attaquant.push(samy);
//         break;
//     case "momoDoudou":
//         attaquant.push(momo);

//         break;
//     case "culbutoEliot":
//         attaquant.push(eliot);
        
//         break;
//     case "elias":
//         attaquant.push(eliassss);
        
//         break;
//     case "batouYoutou":
//         attaquant.push(batou);
        
//         break;
//     default:
//         break;
// }

// console.log(attaquant[0]);

// let defenseur=[];
// let def=Math.round(Math.random()*4);
// switch (def) {
//     case 1:
//         defenseur.push(samy);
//         alert("Votre attaquant sera samyCogneur");
//         break;
//     case "momoDoudou":
//         defenseur.push(momo);
//         alert("Votre attaquant sera momoDdoudou");
//         break;
//     case 2:
//         defenseur.push(eliot);
//         alert("Votre attaquant sera culbutoEliot");
//         break;
//     case 3:
//         defenseur.push(eliassss);
//         alert("Votre attaquant sera elias");
//         break;
//     case 4:
//         defenseur.push(batou);
//         alert("Votre attaquant sera batouYoutou");
//         break;
//     default:
//         break;
// }
// alert(`${attaquant[0].nom} attaquera ${defenseur[0].nom} lors de ce match`)
// const combat = (attaquant,defenseur) => {
//    while (attaquant[0].pv > 0) {
//        prompt(`Choisissez une attaque parmis;
//        ${}`)
//    }
// }
// try

// ### Tu devras ensuite extends cette Class afin de créer une Class par Pokemon. Cette Class devra contenir des méthodes pour permettre au Pokemon d'effectuer différentes actions ex: une Class Pikachu avec les méthodes fatal_foudre, queue_de_fer, charge et quick_attack



// ### Pour cette partie , tu vas devoir mettre en place une fonction qui va gérer le combat. Cette fonction prendra en charge deux paramètres: Le Pokemon que tu contrôleras et le Pokemon ennemi. Il faudra à l'aide de prompt demander à l'utilisateur quelle action il voudra exécuter. Ensuite, il faudra laisser l'ennemi exécuter une action et ce ainsi de suite jusqu'à ce que l'un des deux Pokemons tombe KO. N'oublie pas qu'une propriété de vitesse a été mise en place, cela determinera quel Pokemon attaquera en premier.

// ## BONUS : 

// ### Si tu es assez chaud, grâce au tableau de faiblesses que je t'ai fourni ci-dessus tu peux gérer les faiblesses. Ainsi un Pokemon eau subissant une attaque de type éléctrique se verra ramasser le double de dégats,etc ...

// ## BONUS II: 

// ### Si tu es encore plus chaud, tu peux rajouter une propriété défense dans la Class Pokemon afin d'avoir un vrai calcul de dégats ...

// ## N'oublie pas tes IMPORTS/EXPORTS

// ## COURAGE ET SI TU AS DES QUESTIONS J'Y REPONDRAIS (PAS)
