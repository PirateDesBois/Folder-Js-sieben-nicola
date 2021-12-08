// Exercice 1 JavaScript -> Array

// 1. Créer une variable qui reçois un array avec 3 éléments -> ex: coding 20, coding 21, coding 22
let array1 = ["coding 20","coding 21","coding 22"];
// 2. Afficher les éléments de l'array
console.log(array1.join("/"));
// 3. Afficher le nombre d'éléments de l'array
console.log(array1.length);
// 4. Afficher les éléments de l'array 1 par 1 
console.log(array1[0]);
console.log(array1[1]);
console.log(array1[2]);

// Exercice 2 JavaScript -> Array

// 1. Créer une variable qui reçois un array avec 3 éléments -> ex: coding 20, coding 21, coding 22
let array2 = ["coding 20","coding 21","coding 22"];
// 2. Afficher les éléments de l'array
console.log(array2.join("/"));
// 3. Ajouter et afficher votre prénom a l'array
let arrayPush = array2.push("nicola");
console.log(array2[3]);

// ## Exercice 3 JavaScript -> Array

// 1. Créer une variable qui reçois un array avec 3 éléments -> coding 20, coding 21, coding 22
let array3 = ["coding 20","coding 21","coding 22"];
// 2. Afficher les éléments de l'array
console.log(array3.join("/"));
// 3. Ajouter et afficher votre prenom a l'array
let arrayX = array3.push("Pirate");
console.log(array2[3]);
// 4. Remplacer et afficher un élément de l'array par autre chose

array3.splice(0,1);
let arrayY = array3.push("Jean")
console.log(array3);

// ## Exercice 4 JavaScript -> Array
// 1. Créer une variable qui reçois un array avec 3 éléments -> ex: coding 20, coding 21, coding 22
let array4 = ["coding 20","coding 21","coding 22"]
// 2. Afficher les éléments de l'array
console.log(array4.join("/"));
// 3. Ajouter et afficher votre prenom a l'array
let arrayZ = array4.push("Nicola");
console.log(array4[3]);
// 4. Remplacer et afficher un élément de l'array par autre chose
array4.splice(3,1);
let arrayV = array4.push("Jean")
console.log(array4);
// 5. Effacer un élément de l'array
array4.splice(2,1);
// 6. Afficher le contenu le d'array
console.log(array4);
