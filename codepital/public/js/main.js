
import {Patient,Doctor,Diagnostiques,Traitements,Lieu,cimetiere,pharmacie,chat,doc} from "./_class.js";

//patients//

let patient1 = new Patient("marcus","mal indenté",100,[],"malade",[]);
let patient2 = new Patient("Optimus","unsave",200,[],"malade",[]);
let patient3 = new Patient("Sangoku","404",80,[],"malade",[]);
let patient4 = new Patient("DarthVader","azmatique",110,[],"malade",[]);
let patient5 = new Patient("SemiColon","syntaxError",60,[],"malade",[]);
console.log(patient1,patient2,patient3,patient4,patient5);

//chat//
//diagnostiques//

let diagnostique1 = new Diagnostiques("mal indenté",`ctrl+maj+f`);
let diagnostique2 = new Diagnostiques("unsave",`saveOnFocusChange`);
let diagnostique3 = new Diagnostiques("404",`CheckLinkRelation`);
let diagnostique4 = new Diagnostiques("azmatique",`Ventoline`);
let diagnostique5 = new Diagnostiques("syntaxError",`f12+doc`);

//traitements//

let traitement1 = new Traitements(`ctrl+maj+f`,60);
let traitement2 = new Traitements(`saveOnFocusChange`,100);
let traitement3 = new Traitements(`CheckLinkRelation`,35);
let traitement4 = new Traitements(`Ventoline`,40);
let traitement5 = new Traitements(`f12+doc`,20);
let consultation = new Traitements(`consultation`,50);

//pharmacie//

//cimetière//


//el famosso miaouuuu//
let miaou
setTimeout(() => {
    miaou = setInterval(() => {
        console.log("miaou")
    }, 1000);

    doc.salleDattente.push(patient1,patient2,patient3,patient4,patient5);
doc.patienTIn(patient1);
patient1.pay(consultation,doc);
doc.diagnostiquer(patient1,consultation);
doc.patientOut(patient1);
patient1.goTo(doc.salleDattente,pharmacie);
patient1.pay(traitement1,pharmacie);
patient1.takeCare(traitement1);
console.log(pharmacie);
//fin de el famosso miaouu//
setTimeout(() => {
    window.clearInterval(miaou);
},5000)
},5000)


setTimeout(() => {
    miaou = setInterval(() => {
        console.log("le chat fait miaouuuuuuuuuuuu fsssssssssssssssssssssssssss miaouuuuu kchhhhhhhhhh")
    }, 1000);
doc.patienTIn(patient2);
patient2.pay(consultation,doc);
doc.diagnostiquer(patient2,consultation);
doc.patientOut(patient2);
patient2.goTo(doc.salleDattente,pharmacie);
patient2.pay(traitement2,pharmacie);
patient2.takeCare(traitement2);
console.log(pharmacie);

setTimeout(() => {
    window.clearInterval(miaou);
},5000)
},11000)

setTimeout(() => {
    miaou = setInterval(() => {
        console.log("le chat fait miaouuuuuuuuuuuu fsssssssssssssssssssssssssss miaouuuuu kchhhhhhhhhh")
    }, 1000);
doc.patienTIn(patient3);
patient3.pay(consultation,doc);
doc.diagnostiquer(patient3,consultation);
doc.patientOut(patient3);
patient3.goTo(doc.salleDattente,pharmacie);
patient3.pay(traitement3,pharmacie);
patient3.takeCare(traitement3);
console.log(pharmacie);

setTimeout(() => {
    window.clearInterval(miaou);
},5000)
},17000)

setTimeout(() => {
    miaou = setInterval(() => {
        console.log("le chat fait boooooooooooooooooooooaaaaaaaaaaaaarp parce qu'en fait ce n'est pas un chat mais une grenouille")
    }, 1000);
doc.patienTIn(patient4);
patient4.pay(consultation,doc);
doc.diagnostiquer(patient4,consultation);
doc.patientOut(patient4);
patient4.goTo(doc.salleDattente,pharmacie);
patient4.pay(traitement3,pharmacie);
patient4.takeCare(traitement3);
console.log(pharmacie);

setTimeout(() => {
    window.clearInterval(miaou);
},5000)
},23000)





// # Bienvenu à Codepital:
// >Dans cet exercice nous aurons des malades qui iront se faire débuger chez un doctor. Le doctor les diagnostiquera et leur préscrira un remède. Par la suite les malades irons à la pharmacie afin d'acheter leur remède puis le prendrons et seront guérri.



// ## Description des patients
// >les malades ont un nom, une maladie, de l'argent, une poche, un état de santé,ils savent aller à un endroit, prendre un médicamment et payer. Au début, les patients sont dans un salle d'attente. 



// |nom|maladie|argent|poche|etatSante|traitement 
// methodes : |goTo (déplacement)| takeCare(prendre un medoc)|pay(payer)|
// |---|---|---|---|---|---|---|---|---|
// |Marcus|mal indenté|100|tableau vide|malade| rien
// |Optimus|unsave|200|tableau vide|malade| rien
// |Sangoku|404|80|tableau vide|malade| rien
// |DarthVader|azmatique|110|tableau vide|malade| rien
// |Semicolon|syntaxError|60|tableau vide|malade| rien



// ## Description du doctor
// >Le doctor lui reçoit les patients dans son cabinet. Tout d'abord il les diagnostiques puis se fait payé avant de préscrire un traitement. Attention le doctor fait à chaque fois sortir le patient de son cabinet avant de prendre le suivant. Dans son cabinet il y a son chat de race sphynx pour garder un environemment stérile. Son chat miaule toutes les deux secondes dans la console(bonus). La consultation coûte 50€. Les patients sont dans un état de traitement avant de sortir du cabinet.



// |nom|argent|cabinet|salle d attente [] |
// methodes : |diagnostique|patienTIn|patientOut
// |---|---|---|---|---|---|
// |Debugger|0|[chat]

// ### Grille des diagnostiques
// |maladie|traitement|
// |---|---|
// |mal indenté|`ctrl+maj+f`|
// |unsave|`saveOnFocusChange`|
// |404|`CheckLinkRelation`|
// |azmatique|`Ventoline`|
// |syntaxError|`f12+doc`|



// ## La pharmacie
// >Les patients iront par après à la pharmacie et recevront leur traitement s'ils ont assez d'argent. Dans le cas ou ils ont assez d'argent ils seront alors en bonne santé sinon ils seront mort et il faudra alors les pousser dans un cimetière.



// ### Tarif des traitements
// |Traitement|prix|
// |---|---|
// |`ctrl+maj+f`|60€
// |`saveOnFocusChange`|100€
// |`CheckLinkRelation`|35€
// |`Ventoline`|40€
// |`f12+doc`|20€



// # Vérification
// >Grâce à votre débugger suivé à la trace l'évolution de chacun de vos patients. Vérifier bien qu'il quitte à chaque fois la salle d'attente avant d'entrer dans le cabinet et qu'ils sortent bien du cabinet avant de laisser quelqu'un d'autre entrer.