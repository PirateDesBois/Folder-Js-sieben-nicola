// # Conditions
// 1. Verifie si "5" est strictement égale à 5
// let x="5";
// let y=5;
// if (x===y) {
//     console.log("x=y");    
// }else{
//     console.log("x!=y");
// }
// 2. Posez une question à l'utilisateur qui doit repondre avec un chiffre, et stockez un nombre aleatoire entre 1 et 20. Si la personne devine au premier coup, vous lui dites comme quoi elle a réussi, sinon vous lui dites qu'elle a raté.

// let question = prompt("Donnez-moi un nombre");
// let x = Math.floor(Math.random()*20 +1)
// if (question ===x) {
//     alert("félicitation tu as de la  chance d'être tombé sur le bon nombre");
    
// }else{
//     alert("c'est raté");
// }

// 3. Créez une devinette (Un tableau avec des fruits, et vous devez deviner un fruit qui se trouve dans le tableau, si vous le trouvez, vous avez reussi, sinon vous avez raté)

// let array = ["banane","kiwi","citron","orange"];
// let question = prompt("Essaye de trouver un des fruits du tableau")
// if (array.includes(question)) {
//     alert("félicitation, tu as trouvé la bonne réponse");
// }else{
//     alert("raté !");
// }

// 4. Posez une question à l'utilisateur sur le jour qu'on se trouve, si il reponde "lundi", "mardi", "mercredi" ou "jeudi" on lui dit "je suis fatigué", et le reste de la semaine "ouaaaaai c'est le weekend"
// let question = prompt("quel jour est-on?");
// let array=["lundi","mardi","mercredi","jeudi"];
// let array2=["vendredi","samedi","dimanche"];
// if (array.includes(question)) {
//     alert("je suis fatigué");
// }if (array2.includes(question)) {
//     alert("c'est le weekend");
// }
// 5. Créer une variable qui affiche quel âge avez vous ? si l'âge de la personne de la personne est égal à 18 ou plus et que la personne à 30 ou moins elle rejoint la section des 18-30 ans sinon si la personne à 50 ans ou moins et plus de 30 ans elle rejoint la section des 30-50ans sinon si la personne à plus de 50 ans elle rejoint la section des plus de 50 ans sinon la personne est trop jeune pour rejoindre le site.

// let question= +prompt("Quel est votre age?");
// let young=[];
// let middle=[];
// let old=[];
// if (question >= 18 && question<=30)  {
//     young.push(question);
// }else if (question<=50 && question>30) {
//     middle.push(question);
// }else if (question>50){
//     old.push(question);
// }
// console.log(young);
// console.log(middle);
// console.log(old);

// 6. Créez 3 questions, si la personne repond bien à une seule question, elle a un message comme quoi elle a réussi

// let question1=prompt("As-tu déja mangé du pangolin?");
// let question2=prompt('As-tu déja mangé de la chauve-souris?');
// let question3=prompt("As-tu déja mangé du cochon?");
// let réponse="oui";
// if (question1===réponse || question2 ===réponse || question3===réponse) {
//     alert("tu gères fougère");
// }else {
//     alert("tu rates quelque-chose!");
// }

// 7. La même chose que le 6 mais la personne doit repondre bien aux trois questions

// let question1=prompt("As-tu déja mangé du pangolin?");
// let question2=prompt('As-tu déja mangé de la chauve-souris?');
// let question3=prompt("As-tu déja mangé du cochon?");
// let réponse="oui";
// if (question1===réponse && question2 ===réponse && question3===réponse) {
//     alert("tu gères fougère");
// }else {
//     alert("tu rates quelque-chose!");
// }

// # Tableaux
// 1. Créez un tableau avec 5 éléments et supprimez le premier et le dernier
// let array=["a","b","c","d","e"];
// array.pop() && array.shift();
// console.log(array);
// 2. Puis, ajoutez un élément à la fin et un au début
// array.push("plop");
// array.unshift("broute-moi");
// console.log(array);
// 3. Grâce à une boucle, mettez tous les éléments du tableau en majuscule

// for (let i = 0; i< array.length; i++) {
//     array[i]=array[i].toUpperCase();
// }
// console.log(array);
// 4. Trouvez une méthode qui permet de supprimer le 3ème élément sans connaitre sa position
// array.splice(2,1);
// console.log(array);
// 5. Transformez un tableau en chaine de caractères avec 2 méthodes

// let array=[1,2,3,4,5];
// for (let i = 0; i< array.length; i++) {
//     array[i]=array[i].toString();
// }

// console.log(array);

// 6. Transformez une chaine de caractères en array avec 2 méthodes

// let bijour ='coucou tout le monde';
// let tab=[];
// tab=bijour.split(' ');
// console.log(tab);


// # Functions
// 1. Créez une fonction qui permet de returner la taille d'une chaine de caractères
// let text="coucou les pioupious"
// const chaine = (text) => {
//     let chaine=(text.length);
//     return chaine;
// }
// console.log(chaine(text));

// 2. Créez une fonction qui permet de verifier quel est le type du parametre

// const chaine = (text) => {
//     let chaine = typeof text
//     return chaine;
// }
// console.log(chaine(text));

// 3. Créez une fonction qui permet de vérifier si le chiffre est plus grand ou égale à 50
let x=55;
const number =(x) =>{
    if (x>=50) {
        return true;
    }else{
        return false;
    }
}
console.log(number(x));

// 4. Créez une fonction qui permet de renvoyer la racine cubique du parametre
// 5. Créez une fonction qui met en majuscule qu'à partir de la 5ème lettre
// 6. Créez une fonction qui met en miniscule qu'à partir de la 9ème lettre
// 7. Fusionnez les deux fonctions

// Boucles
// 1. let question = prompt("Trois nains vont a la mine, l'un prend une pioche, le deuxième prend une pelle, que prend le troisième?" +"(Réponse : le nain ______") + "ATTENTION, tant que tu ne répond pas a la question, la question réaparait";
// 2. Créez un tableau avec les élèves de la classe, et faites les passer dans un autre tableau
// 3. Créez un tableau avec des fruits, et tant que la personne veut supprimer un fruit, vous lui demandez lequel et il se supprime
// 4. Faites la même chose que l'exercice 2 avec une boucle foreach