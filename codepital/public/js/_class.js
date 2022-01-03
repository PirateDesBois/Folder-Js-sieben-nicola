export class Patient{
    constructor(nom,maladie,argent,poche,etatSante,traitement){
        this.nom=nom;
        this.maladie=maladie;
        this.argent=argent;
        this.poche=poche;
        this.etatSante=etatSante;
        this.traitement=traitement;
    }
    
    goTo =(depart,arrivee) => {
        if (depart!==doc.salleDattente) {
            depart.splice(this);
            console.log(`${this.nom} à quitté ${depart.nom}`)
            arrivee.contenu.push(this);
            console.log(`${this.nom} est arrivé à ${arrivee.nom}`)
        }else {
            doc.salleDattente.splice(this);
            console.log(`${this.nom} a quitté la salle d'attente`);
            arrivee.contenu.push(this);
            console.log(`${this.nom} est arrivé à ${arrivee.nom}`)
        }
        
    }
    takeCare =(traitement)=>{
        if (this.etatSante!=="mort") {
            this.poche.push(traitement);
            console.log(`${this.nom} à mis ${traitement.traitement} dans sa poche`);
            console.log(`${this.nom} prend ${traitement.traitement}`)
            this.etatSante="gueri"
            console.log(`${this.nom} est désormais ${this.etatSante} !`);
        }else{
            console.log("traitement n'as pas pu être pris a cause du manque de moyen")
        }
    }

    pay=(traitement,destination)=>{
        if (this.argent>=traitement.prix) {
            this.argent-=traitement.prix
            destination.argent+=traitement.prix;
            console.log(`${this.nom} a payé ${traitement.prix} euros à ${destination.nom} et a désormais ${this.argent} euros dans son portefeuille`);
            console.log( `${destination.nom} a actuellement ${destination.argent} euros dans son coffre`)
            
        }else{
            console.log(`${this.nom} n'a pas assez d'argent pour payer, ${traitement.traitement} coûte ${traitement.prix} euros et son portefeuille ne contient plus que ${this.argent} euros`);

            this.etatSante="mort"
            cimetiere.contenu.push(this);
            pharmacie.contenu.splice(this);
            console.log(`${this.nom} est ${this.etatSante}`);
            console.log(`le cimetière acceuille ${this.nom} comme nouvel occupant`);

            


            
        }
        
    }
}
export class Doctor{
    constructor(nom,argent,cabinet,salleDattente){
        this.nom=nom;
        this.argent=argent;
        this.cabinet=cabinet;
        this.salleDattente=salleDattente;
    }
    diagnostiquer=(patient,traitement)=>{
        if (patient.argent >=50) {
                patient.etatSante = "traitement"
                console.log(`l'état de santé actuel de ${patient.nom} est ${patient.etatSante}`);
        }else {
            console.log(`${patient.nom} n'a pas assez d'argent pour payer le doc!`)
        }
    }
    patienTIn=(patient)=>{
        this.cabinet.push(patient);
        this.salleDattente.splice(this.salleDattente.indexOf(0),1);
        console.log(`${patient.nom} est entré dans le cabinet du doc!`);
        console.log(this.cabinet);
        console.log(this.salleDattente);
        // setTimeout(() => {
            
        //     console.log(`le Chat fait miaouuuuuuuuuuuuuuuuuuuuuuuuuuuuu!!!!!!!!!!!`);
        // }, 2000);
    
    }
    patientOut=(patient)=>{
        this.salleDattente.push(patient);
        this.cabinet.splice(this.salleDattente.indexOf(0),1);
        console.log(`${patient.nom} est sorti du cabinet du doc!`)
        console.log(this.salleDattente);
        console.log(this.cabinet);
    }
}


export class Diagnostiques{
    constructor(maladie,traitement){
        this.maladie=maladie;
        this.traitement=traitement;
    }
}
export class Traitements{
    constructor(traitement,prix){
        this.traitement=traitement;
        this.prix=prix;
    }
}
export class Lieu{
    constructor(nom,contenu,argent){
        this.nom=nom;
        this.contenu=contenu;
        this.argent=argent;
    }
}



export let cimetiere= new Lieu("cimetière",[]);
export let pharmacie= new Lieu("pharmacie",[],0);
export let chat="chachou"
export let doc= new Doctor("Croutch",0,[chat],[]);