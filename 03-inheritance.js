class Vehicule {
    #marque;
    #modele;
    #annee;
    constructor(marque, modele, annee) {
        this.#marque = marque;
        this.#modele = modele;
        this.#annee = annee;
    }
    
    get caracteristiques() {
        return {
            marque: this.#marque,
            modele: this.#modele,
            annee: this.#annee,
        };
    }

    set caracteristiques(caracteristiques) {
        this.#marque = caracteristiques.marque;
        this.#modele = caracteristiques.modele;
        this.#annee = caracteristiques.annee;
    }

    set marque(marque) {
        this.#marque = marque;
    }

    set modele(modele) {
        this.#modele = modele;
    }

    set annee(annee) {
        this.#annee = annee;
    }

    afficherDetails() {
        console.log(`Vehicule de type non identifié : ${this.#marque} ${this.#modele} ${this.#annee}`);
    }
}

class Voiture extends Vehicule {
    couleur;
}
    
console.dir(Vehicule);
const voiture1 = new Voiture("Peugeot", "207", 2021, "Rouge");
voiture1.afficherDetails();
voiture1.couleur = "Blanc";
console.log(voiture1);
console.log(voiture1.couleur);

voiture1.afficherDetails();