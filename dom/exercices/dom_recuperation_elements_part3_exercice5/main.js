let softSkills = {
    Trello: '49%',
    Git: '87%',
    GitHub : '50%',
    Discord: '15%',
}

let elements = document.querySelectorAll("#liste-soft-skills")[0].children;
console.log(elements);

// softSkills["html"]="50%"

let i = 0;
for (const key in softSkills) {
    elements[i].innerText = `${elements[i].innerText} : ${softSkills[key]}`
    
i++;
}

i = 0
for (const key in softSkills) {
    // console.log(`${competences[key]}`)
    let bim = softSkills[key].substring(0, softSkills[key].length - 1)
    bim = Number(bim)
    console.log(bim);
    if ( bim < 50 ) {
        elements[i].setAttribute("style","background-color: red;")
        // console.log(elements[0]);
    } else if ( bim > 50 && bim < 100 ) {
        elements[i].setAttribute("style","background-color: green; color: white;")
    } else if ( bim == 100 ) {
        elements[i].setAttribute("style","background-color: gold; color: black;")
    }
i++;
}



