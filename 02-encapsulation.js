class Voiture {
    #marque;
    #modele;
    #annee;
    #couleur;
    constructor(marque, modele, annee, couleur) {
        this.#marque = marque;
        this.#modele = modele;
        this.#annee = annee;
        this.#couleur = couleur;
    }
    get caracteristiques() {
        return {
            marque: this.#marque,
            modele: this.#modele,
            annee: this.#annee,
            couleur: this.#couleur
        };
    }

    set caracteristiques(caracteristiques) {
        this.#marque = caracteristiques.marque;
        this.#modele = caracteristiques.modele;
        this.#annee = caracteristiques.annee;
        this.#couleur = caracteristiques.couleur;
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

    set couleur(couleur) {
        this.#couleur = couleur;
    }

    afficherDetails() {
        console.log(`Voiture: ${this.#marque} ${this.#modele} ${this.#annee} ${this.#couleur}`);
    }
}

const voiture1 = new Voiture("Peugeot", "207", 2021, "Rouge");
voiture1.afficherDetails();
voiture1.couleur = "Blanc";
voiture1.afficherDetails();