// EXERCICE 4 PARTIE 2
// # Exercice :
// >*En utilisant l'attribut style*

// >*Cherche des methodes pour résoudre les énoncés suivants :*

// # Exercice :
// >*En utilisant l'attribut style*

// >*Cherche des methodes pour résoudre les énoncés suivants :*

// ### 1. Au double clique du h1, son fond devient rouge et son texte devient blanc

let h1 = document.querySelector("h1")
let mettreEnBlanc = (cetruc) => {
    cetruc.style.color = "white"
    cetruc.style.background = "red"
}
h1.addEventListener("dblclick",()=>mettreEnBlanc(h1))

// ### 2. Au hover du h3, son texte rétrécit d'un caractère 

let h3 = document.querySelector("h3")
let toutPitit = () => {
    h3.innerText = h3.textContent.slice(0,h3.textContent.length -1)
}
h3.addEventListener("mouseover",toutPitit)

// ### 3. Quand on clique sur le paragraphe le fond devient bleu et le texte gold, mais si le fond et déjà bleu et le texte déjà gold alors le fond redevient blanc et le texte noir

let p = document.querySelector("p")

let colorGold = () => {
    p.style.color = "gold"
    p.style.background = "blue"
}

let colorBlack = () => {
    p.style.color = "black"
    p.style.background = "white"
}

let i = 0

p.addEventListener("click", () => {
    if ( i % 2 == 0) {
        colorGold()
    } else {
        colorBlack()
    }
    i++
    console.log(i);
})
