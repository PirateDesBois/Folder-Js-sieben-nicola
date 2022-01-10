let competences = {
    HTML: '71%',
    CSS: '40%',
    JS : '51%',
    React: '18%',
    Laravel: '%'
}

let elements = document.querySelectorAll("#liste-competences")[0].children
console.log(elements);

let i = 0;
for (const key in competences) {
    // console.log(`${competences[key]}`)
    elements[i].innerText = `${elements[i].innerText} : ${competences[key]}`
i++;
}

//traduction : Chaque elements contenu dans les h2 du tableau [], sont les élément contenu dans les H2 : +(les propriétés dans l'objet competences)



// ### 3. Change le style des h2 selons certaines conditions :
// - Si le pourcentage est inférieur à 50 alors le h2 a un background rouge
// - Si le pourcentage est supérieur à 50 alors le background est vert et l'écriture blanche
// - Si //     //  égale à 50 alors il n'y a pas de background
// - Si //     // est égale à 100 alors le bakcground est gold et l'écriture est noir

// elements tableau
// modifier chaque h2 dans le tableau propriete setAttribute
i = 0
for (const key in competences) {
    // console.log(`${competences[key]}`)
    let plop = competences[key].substring(0, competences[key].length - 1)
    plop = Number(plop)
    console.log(plop);
    if ( plop < 50 ) {
        elements[i].setAttribute("style","background-color: blue;")
        // console.log(elements[0]);
    } else if ( plop > 50 && plop < 100 ) {
        elements[i].setAttribute("style","background-color: green;")
    } else if ( plop == 100 ) {
        elements[i].setAttribute("style","background-color: gold;")
    }
i++;
}
