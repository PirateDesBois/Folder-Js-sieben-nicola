export class Personne{
    constructor(nom,lieu,argent,mainDroite,mainGauche){
        this.nom=nom;
        this.lieu=lieu;
        this.argent=argent;
        this.mainDroite=mainDroite;
        this.mainGauche=mainGauche;
    }
    seDeplacer(nouveauLieu){
        if (this.lieu instanceof Lieu || this.lieu instanceof Epicerie) {
            this.lieu.personnes.splice(this.lieu.personnes.indexOf(this),1);
        }
        this.lieu = nouveauLieu;
        this.lieu.personnes.push(this)
        console.log(`${this.nom} a rejoint ${this.lieu.nom}`)
        
    }
    payerArticle=(article) =>{
        for (let i = 0; i < this.mainDroite[0].contenu.length; i++) {
            this.argent-=this.mainDroite[0].contenu[i].prix
            console.log(`${this.nom} a acheté ${this.mainDroite[0].contenu[i].nom} au prix de ${this.mainDroite[0].contenu[i].prix} euro`);
            console.log(`ìl reste ${this.argent} euro dans le portefeuille de ${this.nom} `);
            
        }
    }
    couper(ingrédient,Outil){
    ingrédient.etat=Outil.action;
    }
}
export class Lieu{
    constructor(nom){
        this.nom=nom;
        this.personnes=[];
    }
}
let panier={
    nom:"panier",
    contenu:[],
}
export class Epicerie extends Lieu {
    constructor(nom) {
        super(nom)
        this.paniers=[panier,panier,panier,panier,panier];
    }
}
export class Outil{
    constructor(nom,action){
        this.nom=nom;
        this.action=action;
        this.contenu=[];
    }
    cuire(objetACuire){
        setTimeout(() => {
            this.contenu[0].etat="cuite"
            console.log(`L'${this.contenu[0].nom} est ${this.contenu[0].etat}`);
        }, 4000);
    }
    melanger(nomMelange){
        let newMelange = {
            nom:"omelette",
            etat: "pas cuit"
        }
        
        this.contenu=[newMelange];
    }   
}
export class ingredients{
    constructor(nom,etat,prix){
        this.nom=nom;
        this.etat=etat;
        this.prix=prix;
    }
}