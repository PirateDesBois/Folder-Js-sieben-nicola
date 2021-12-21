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

class Lieu {
    constructor(nom, personnes){
        this.nom=nom;
        this.personnes=personnes;
    }
}
let lieu1 = new Lieu("Molengeek",[]);
let lieu2 = new Lieu("Snack",[]);
let lieu3 = new Lieu("Maison",[]);

class Personne {
    constructor(nom,prenom,argent){
        this.nom=nom;
        this.prenom=prenom;
        this.argent=argent;
    }
    se_deplacer = () => {
        taxi.embarquer(this); 
    }
    marcher = () => {
        pied.embarquer(this);
    }
}

let nico = new Personne("Nico","cheypo",11.2);

class Bus {
    constructor(personnes,caisse){
        this.personnes=personnes;
        this.caisse=+caisse;
    }
    embarquer = (personne) => {
        if (personne.argent>=2.80) {
            personne.argent-=2.80
            personne.argent=Number(personne.argent.toFixed(1));
            this.caisse+=2.80
            this.caisse=Number(this.caisse.toFixed(1));
            this.personnes.push(personne);
        }else if(personne.argent<2.80) {
            console.log("Vous n'avez pas assez d'argent");
        }
    }
    marcher = (personne) => {
        this.personnes.push(personne);
    }
}
let taxi = new Bus([],50);
let pied = new Bus([]);

// ### 8h00 Vous êtes à la maison.
lieu3.personnes.push(nico);
console.log(lieu3);
// ### 8h30 Vous prennez le bus vers MolenGeek.
lieu3.personnes.splice();
nico.se_deplacer(lieu1);
console.log(taxi);

// ### 8h45 Vous êtes à MolenGeek.
console.log(lieu1)
taxi.personnes.splice();
// ### 12h45 Vous sortez de MolenGeek, vous prenez le bus pour aller au snack.
nico.se_deplacer(lieu2);
console.log(lieu2);
taxi.personnes.splice();
// ### 13h30 Vous sortez du snack, et vous rentrer pied à MolenGeek pour digérer.
nico.marcher(lieu1);
lieu2.personnes.splice();
console.log(lieu1);
// ### 17h10 Vous sortez de MolenGeek, vous prenez le bus pour rentrer chez vous.
pied.personnes.splice();
nico.se_deplacer(lieu3);
console.log(lieu3);
taxi.personnes.splice();
console.log(nico.argent);
console.log(taxi.caisse);
