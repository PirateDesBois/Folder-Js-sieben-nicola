// 1. Les réponses boléenes part 1
//     A l'aide de deux promptes récupérez 2 nombres et stockez les dans des variables
//     Vérifiez si les valeures sont égales et renvoyez la réponse dans une alerte
//     L'alert doit renvoyer une phrase contenant les variables et se présentant comme ceci :      Le nombre x et le
//     nombre y sont-ils égaux ? : réponse

// let x = prompt("entrez un premier nombre");
// let y = prompt("entrez un deuxième nombre");
// if (x==y){
//     let reponse = prompt("les valeurs" + x +" et "+ y + "sont elles égales?")
//     if (reponse = true){
//         alert("merci au revoir")
// }else if(reponse = false){
//         alert("désolé, ce sera pour une autre fois");     
// }
// }

////////////////////////////////////////////////////////////////////////////// 2. Les réponses boléenes part 2
// A l'aide de deux promptes récupérez 2 nombres et stockez les dans des variables
// Vérifiez si la première valeures est plus petite que la seconde renvoyez la réponse dans une alerte
// L'alert doit renvoyer une phrase contenant les variables et se présentant comme ceci : Le nombre x et-il
//plus petit que le nombre y ? : réponse


// let x = prompt("Donnez moi un premier nombre");
// let y = prompt("Donnez moi un deuxième nombre");
// let z
// if (x<y){
//     z=true

// }else{
//     z=false
// }
// alert("Le nombre "+ x + " est-il plus petit que le nombre "+ y +" ?:"+z);

////////////////////////////////////////////////////////////////////////////
// 3. Les réponses boléenes part 3
// A l'aide de trois promptes récupérez 3 nombres et stockez les dans des variables
// Additionner les deux premières valeures et comparer les avec la troiseme à l'aide de l'opérateur de
// comparaison ">"
// L'alert doit renvoyer une phrase contenant les variables et se présentant comme ceci : La somme du nombre x
// + le nombre y est-elle plus grande que le nombre z ? : reponse booléenne

// let x = prompt("un nombre");
// let y = prompt("un deuxième nombre");
// let z = prompt("un troisième nombre");
// let bol
// let rep =(x+y);
// if (rep==z){
//     bol=true
// }else{
//     bol=false
// }
// alert("la somme de "+ x +" et "+ y +" est-il plus grand que : "+ z +" résultat : "+bol);
////////////////////////////////////////////////////////////////////////////
// 4. Créer un programme qui récupère la phrase de l'utilisateur,l'utilisateur doit également pouvoir estimer le
// nombre de caractères compris dans la phrase, ensuit retourne a l'utilisateur si oui ou non son estimation
// était correct si ce n'était pas correct annonce lui que sa réponse est fausse et à combien d'unité de x était
// éloignée de la vrai réponse, exemple si la chaine de caractères fait 100 caractères et que l'utilisateur
// répond 85 alors renvoyez lui "Incorrect tu étais à 15 unités de la bonne réponse !"

// let phrase = prompt("veuillez écrire une phrase ici ;");
// let reponseUser = prompt("Dans la phrase; "+ phrase +", combien y-a-t'il de caractère d'après vous?")
// let bol
// let x = phrase.length - reponseUser
// x = Math.abs(x);
// let
// if (reponseUser == phrase.length){
//     bol = true
// }else if (reponseUser != phrase.length){
//     bol = false
// }
// alert("Votre estimation est; "+ bol +" votre réponse était éloignée de "+x+" caractères");
////////////////////////////////////////////////////////////////////////////