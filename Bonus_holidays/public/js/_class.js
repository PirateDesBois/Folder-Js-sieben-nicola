export class Boss{
    constructor(nom,pv,attack){
        this.nom=nom;
        this.pv=pv;
        this.attack=attack;
    }
}
export class Heros{
    constructor(nom,pv,attack,rage){
        this.nom=nom;
        this.pv=pv;
        this.attack=attack;
        this.rage=rage;

    }
    defense=(target) =>{
        this.attack=attack*0.5;
        this.pv=pv*2.5;
    }
    attaque=(target) =>{
        this.attack=attack*1.4;
        this.pv=pv*0.75;
    }
        

}

export class Guerrier extends Heros {
    constructor(nom,pv,attack){
        super(nom,pv,attack)
        this.nom=nom;
        this.pv=pv;
        this.attack=attack;
        this.rage=0
        
    }
    //   >* Tous les tours le guerrier gagne 1 point de rage au bout de 4 points ,le guerrier gagne 25% ( * 1.25 ) d'attaque supplémentaire durant 1 tours puis retombe à 0 de rage et perd ce bonus.
}
export class Mage extends Heros {
    constructor(nom,pv,attack,mana){
        super(nom,pv,attack)
        this.nom=nom;
        this.pv=pv;
        this.attack=attack;
        this.mana=mana;
        
    }
    // mana = chiffre qui sera aléatoirement imposé entre les suivants 7 , 9 ou 11.
}
export class Archer extends Heros {
    constructor(nom,pv,attack,Fleche){
        super(nom,pv,attack)
        this.nom=nom;
        this.pv=pv;
        this.attack=attack;
        this.fleche=fleche;
    }
    // nombre de flêches : chiffre qui sera aléatoirement imposé entre  7, 8 , 9 ,10 ,11.
    //   #### A Savoir sur l'archer
    //   >* les attaques de l'archer consomme deux flèches par tour et récupère une flèche chaque tour.Quand il n'a plus de flèches il passe un tour et récupère 6 flèches.
}