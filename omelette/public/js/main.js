
/** Créer un objet personne. Cette personne doit avoir des propriétés et des méthodes 
* - nom(string)
* - lieu(string)
* - argent(number)
* - mainDroite(tableau)
* ( du coup main gauche(tableau))
* - seDeplacer(lieu)
* - payerArticle(article)
* - couper(ingredient, outil)
*/
import {Personne,Lieu,Epicerie,Outil,ingredients} from "./_class.js"
let nico = new Personne("nico",null,100,[],[]);
console.log(nico);
let maison = new Lieu("maison",[]);
let carefouette = new Epicerie("carfouette");
let couteau = new Outil("couteau","coupé");
let poele = new Outil("poele",[]);
let bol = new Outil("bol",[]);
let oignon = new ingredients("oignon","entier",4);
let oeuf = new ingredients("oeuf","entier",3);
let epice = new ingredients("epice","moulu",2);
let mainDroite = [];
let mainGauche = [];
carefouette.stock=[oignon,oeuf,epice];
/**
* Créer un lieu "maison" (un objet) avec comme propriété "nom: 'maison'" et "personnes = []" => qui sera un tableau de personnes présentes dans la maison :
*/
/**
* Créer un outil (couteau) pour découper les ingrédients achetés
* propriétés : nom et action.
* action a comme valeur l'état "coupé" (qui sera mis aux légumes lorsqu'ils seront coupés avec le méthode de "personne".)
*/
/**
* Créer des produits (ingrédients) à mettre dans le magasin qui serviront à créer l'omelette (oignon, oeuf, epice, fromage, ...);
* propriétés : nom, etats ( entier,coupé, moulu), prix //

/* Créer un lieu "epicerie" qui a comme propriétés :
// nom, personnes = [], paniers (un tableau d'objets "panier" avec une propriété "type" égal à panier et le contenu du panier, égal à un tableau vide),
// Les "ingrédients" créés juste au dessus contenus dans un tableau.
/**
* Créer un poele avec un tableau comme contenu. Et avec une méthode cuir() qui, après 4 secondes, met l'état 'cuit' à this.contenu[0]. On peut faire ça avec la fonction setTimeout(()=> {}, 4000)
*/
// Créer un bol avec un tableau comme contenu
// ajouter une méthode melanger(nomMelange) qui va créer un nouvel objet "newMelange" avec comme nom la variable nomMelange passé en paramètre et avec 'pas cuit' en etat. cette méthode remplacera this.contenu par [l'obj newMelange]
/**** DEBUT DE L'OMELETTE ****/
// Pour dire que le personnage est à la maison :
nico.seDeplacer(maison);
console.log(maison);
// Avec l'objet personnage, utiliser la method seDeplacer et de passer en paramètre l'objet maison
// Afficher un message tel que :
console.log(`${nico.nom} est actuellement à l'/la ${nico.lieu.nom}`)
// console.log(personnage.nom + " est actuellement à la " + personnage.lieu);
// Pour aller à l'épicerie acheter les ingrédients pour l'omelette, je répète la première étape en changeant le parametre de la method seDeplacer par l'epicerie
nico.seDeplacer(carefouette);
console.log(carefouette.personnes[0])
console.log(maison.personnes[0])
// Mon personnage prend un des paniers dans l'épicerie (il récupère le panier dans les objets de l'épicerie et le met dans sa main droite.)
nico.mainDroite.push(carefouette.paniers[0]);
carefouette.paniers.splice(carefouette.paniers[0],1);
console.log(carefouette.paniers);
// Il doit y avoir un objet dans la main droite de personnage et un panier en moins. Vérifier avec des console.log() ensuite afficher un message du type : 
console.log(`${nico.nom} à pris un ${carefouette.paniers[0].nom}`);
// console.log(`${personnage.nom} a pris un ${type du panier}`);
// Je créer une boucle qui va prendre chaque élément (ingrédient) du contenu de l'épicerie (1 à 1) et en faire une COPIE dans le panier du personnage.
console.log(nico.mainDroite[0]);
for (let index = 0; index < carefouette.stock.length; index++) {
    nico.mainDroite[0].contenu.push(carefouette.stock[index]);
}
// Afficher un message à chaque ingrédient pris
console.log(`${nico.nom} à mis ${nico.mainDroite[0].contenu[0].nom},${nico.mainDroite[0].contenu[1].nom},${nico.mainDroite[0].contenu[2].nom} dans son panier`)
// Payer chaque ingrédient récupéré dans le panier. Avec une boucle aussi, on va les passer 1 à 1 dans la fonction payerArticle()
nico.payerArticle();
// Afficher un message de ce qu'il reste d'argent sur le personnage.
// rentrer à la maison (comme ça on pourra cuisiner)
nico.seDeplacer(maison);
// mettre chaque ingrédient dans le bol (1 à 1 donc avec une boucle)
nico.mettreIngredientsDansLeBol=() =>{
    for (let i = 0; i < nico.mainDroite[0].contenu.length; i++)  {
        console.log(nico.mainDroite[0].contenu[i])
        bol.contenu.push(nico.mainDroite[0].contenu[i])
        console.log(`${nico.mainDroite[0].contenu[i].nom} a été mis dans le bol`)
        nico.mainDroite[0].contenu.splice(i,1);
        i--
    }
}
nico.mettreIngredientsDansLeBol();
console.log(bol.contenu.length);
// Vérifier que les ingrédients ne se trouvent plus dans le panier (oups ! on a oublié de le rapporter x)
// Afficher un petit message de chaque ingrédient qu'on met dans le bol.
// Retourner à l'épicerie pour rapporter le panier. (donc seDeplacer puis enlever le panier de la main droite et le remetre dans les paniers de l'épicerie.)
nico.seDeplacer(carefouette);
// Afficher un petit message
carefouette.paniers.push(nico.mainDroite[0]);
nico.mainDroite.splice([0],1);
console.log(nico.mainDroite);
console.log(carefouette.paniers);
// Retourner à la maison pour continuer l'omelette
nico.seDeplacer(maison);
// Afficher un petit message
console.log(bol.contenu);
// Vérifier chaque ingrédient dans le bol et le couper seulement s'il est entier ! Pour ça on utilise la méthode couper de personnage
bol.contenu.forEach(x => {
    if (x.etat == "entier") {
        nico.couper(x,couteau)
    }
    console.log(x);
});
// Mélanger le contenu du bol avec la méthode melanger. on va nommer ce mélange une 'omelette' (à passer en param).
bol.melanger(bol.contenu);
console.log(bol.contenu);
// Afficher un message avec le nouveau mélange
console.log(`le bol contient maintenant une ${bol.contenu[0].nom}`)
// vider le contenu du bol dans la poele. Il ne doit plus rien avoir dans le bol et y avoir juste l'omelette pas cuite.
poele.contenu.push(bol.contenu[0]);
bol.contenu.splice(bol.contenu,1)
console.log(`Le bol est vide`)
console.log(`la ${poele.nom} contient une ${poele.contenu[0].nom}`);

// Cuire l'omelette avec la méthode de la poele 
poele.cuire(poele.contenu[0]);
// Afficher un message final, notre omelette est cuite :)
