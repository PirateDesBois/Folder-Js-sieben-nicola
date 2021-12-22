export class Personne{
    constructor(nom,prenom,age,argent,panier){
        this.nom=nom;
        this.prenom=prenom;
        this.age=age;
        this.argent=argent;
        this.panier=panier;
    }
    voler= (produit) =>{
            let chance
            let prison=[];
            chance = Math.floor(Math.random()*11);
            console.log(chance);
            if (chance  > 7) {
                this.argent=0
                console.log( `${this.prenom} c'est fait attraper et n'as plus d'argent! ${this.prenom} est un saaaaaaale voleur!`)
                prison.push(this.prenom);
                console.log(prison);
                console.log(`${this.prenom} va en prison et à de fortes chances de glisser sur la savonnette!`)
            }else{
                this.panier.push(produit);
                console.log(`${this.prenom} a volé un(e) ${produit.nom}`)
            }
    }
    acheter= (produit) =>{
        if (this.argent>produit.prix) {
            this.panier.push(produit);
            produit.achete=true;
            this.argent-=produit.prix
            console.log(`${this.prenom} vient d'acheter ${produit.nom}`);
        }else{
            console.log(`${this.prenom} n a plus d'argent, il va devoir prendre plutôt qu'acheter!`)
        }  
    }
}
export class Produit{
    constructor(nom,prix,taille,){
        this.nom=nom;
        this.prix=prix;
        this.taille=taille;
        this.achete=false;
    }
}
