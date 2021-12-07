let phrase = "Bonjour tout le monde        "; 

console.log(phrase +" compte ce nombre de lettres: "+ phrase.length);

let phrase2=phrase.trim();


console.log(phrase2.length);



console.log(phrase2.charAt(phrase2.length-1));


let phrase3 = phrase2.substr(8,21);
console.log(phrase3);

let phrase4 =phrase3.replace('','Bonjour ');
console.log(phrase4);

let phrase5 =phrase4.replace("tout le monde","")
console.log(phrase5);

let phrase6 =phrase5.replace('Bonjour','string')
console.log(phrase6);

console.log(Math.random());


let phrase7=phrase.toUpperCase(5,8)
console.log(phrase7); //raté

;


console.log(phrase.indexOf("o"))
console.log(phrase.indexOf("o",2))

let nom =("nicola");

console.log(nom.charAt(0).toUpperCase()+"icol"+ nom.charAt(5).toUpperCase());



