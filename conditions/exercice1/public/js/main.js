
// Les conditions - Exercice 1

    // 1. Via un console.log() vérifie l'egalité entre 1 et "1"
console.log(1==1);
    // 2. Via un console.log() vérifie l'egalité STRICTE entre 1 et "1"
console.log(1===1);
    // 3. Créer un programme qui demande le prénom d'une personne, si le prénom de la personne comporte moins de 5 caractères, affichée une alerte avec comme message " Ton nom est trop court "
let prenom = prompt("quel est ton prénom");
if (prenom.length < 5) {
    alert("ton prénom est trop court")
}else {
    alert("good job, bro");
}

    // 4. Affiche une addition a l'utilisateur et demande lui de résoudre l'addition, si il répond juste, félicitez le, sinon dite lui que c'est incorrect.
    let addition = +prompt("6+7 =");
    if (addition === 13) {
        alert("in the pocket");
    } else {
        alert("that's wrong");
    }
    // 5. Affiche une multiplication à l'utilisateur et demande lui de la résoudre, si il répond juste félicitez le "la réponse était bien xx" sinon dite lui, à combien d'unité il était de la réponse exemple si la réponse etait 35 et qu'il répont 40 renvoyez lui une alerte avec "C'est dommage, tu n'étais qu'a 5 unité de la bonne réponse"
    let multi = +prompt("6*7 =");
    let x= multi - 42
    x = Math.abs(x);
    if (multi === 42) {
        alert("in the pocket");
    } else {
        alert("tu est à " + x + " unités de la bonne réponse" );
    }

    // 6. Créer un programme qui permet d'ajouter des elements dans un tableau via des prompts quand le tableau contient 3 éléments, renvoyez une alerte avec le contenu du tableau
    let tableau = [];
    let y;
    let z;
    let x = prompt("ajoute un élément au tableau");
    tableau.push(x);
    if (tableau.length == 1) {
        y = prompt("ajoute un deuxième élément");
        tableau.push(y);
        if (tableau.length == 2) {
            z = prompt("ajoute un troisième élément");
            tableau.push(z);
            if (tableau.length ==3) {
                alert(tableau);

            }
        }
    }
    // 7. Créer un programme qui permet a l'utilisateur de mettre des chiffres dans des bacs, si le chiffre est plus grand ou égal à 12 il va dans le bac "grandNombres" si il est plus petit que 12 il va dans le bac "petitNombres" affiche ensuite une seule alerte avec le contenu des deux bacs.

    let grandNombres =[];
    let petitNombres =[];
    let x = prompt("insérer un nombre");
    if (x >= 12) {
        grandNombres.push(x);
    } else if (x < 12) {
        petitNombres.push(x)
    }
    console.log(petitNombres, grandNombres);
    
        
    

    // 8. Invente un exercice avec ce que tu as appris en Javascript jusqu'a maintenant en incluent des conditions
    // traduit ce mot en Anglais: lapin
    
    let x = prompt("traduire lapin en anglais");
    if (x == "rabbit") {
        alert("c'est bien ça!");
    }else {
        alert("mauvaise réponse!")
    }
