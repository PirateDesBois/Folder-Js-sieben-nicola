// ## Exercice 6
    //1. 
        // - Supprimer le dernier élément de l'array
        let monTab = ['pomme', 'fraise', 'melon', 'citron']
        monTab.pop();
        // - Supprimer le premier élément de l'array
        monTab.shift();
        // - Ajouter un élément a la fin de l'array
        monTab.push("carotte")
    
        // - Ajouter un élément au debut de l'array
        monTab.unshift("prout")
        // - Mettre le deuxième élément en majuscule 
        monTab[1]=monTab[1].toUpperCase();
        // - Changer l'ordre de l'array
        monTab.reverse();
        console.log(monTab);


    //2.
        // - Ordonner les chiffres
            let chiffres = [4, 5, 2, 1, 3]
        // - Première methode (Ordonner)
        chiffres.sort();
        // - *Resultat : 1, 2, 3, 4, 5*

        // - Deuxième methode (Concaténer les chiffres en un string)
        chiffres = chiffres.join("-");
        console.log(chiffres);
        // - *Resultat : 1-2-3-4-5*
        // - Utiliser une méthode qui permet de revenir la chaine de caractères en un tableau
        chiffres=chiffres.split("-");
        console.log(chiffres);
        // - Afficher l'array avec les chiffres ordonnées
        chiffres.sort();
        console.log(chiffres);


    //3. 
        // - Créez un tableau vide
        let tableau = [];
        // - Ajouez 10 élément dans votre array
        tableau.push("A","B","C","D","E","F","G","H","I","J");
        // - Affichez le contenu de l'array et sa taille
        console.log(tableau);
        console.log(tableau.length);
        // - Touvez l'index de chaque éléments
        tableau.forEach(element => {
            console.log(tableau.indexOf(element))
        });
        // - Utiliser une methode qui permet de supprimer un element grâce à l'index
        classe.splice(6, 1)
        console.log(tableau);
        // - Créez un tableau vide et rajoutez toutes les personnes de la classe. Faite un console.log de quelqu'un aléatoirement dans le tableau
        let classe=[];
        classe.push("Aleks","Amanda","Elias","Eliot","Gursel","Imane","Jade","Kevin","Louis","Marcyl","Mich","Samy","Ilias","Adil","Isma","Nicola","Baptiste","Calvin","Momo")
        let randomElement = classe[Math.floor(Math.random() * classe.length)];
        console.log(randomElement);

        // - En une ligne supprimer 'Anis' du tableau
        classe.splice(6, 1)
        console.log(classe);