class Voiture {
    marque;
    modele;
    annee;
    couleur;
    constructor(marque, modele, annee, couleur) {
        this.marque = marque;
        this.modele = modele;
        this.annee = annee;
        this.couleur = couleur;
    }
    afficherDetails() {
        console.log(`Voiture: ${this.marque} ${this.modele} ${this.annee} ${this.couleur}`);
    }
}

const voiture1 = new Voiture("Peugeot", "207", 2021, "Rouge");
voiture1.afficherDetails();