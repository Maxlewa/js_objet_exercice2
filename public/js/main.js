// EXO 1

// EXO 2

let vieille_dame = {
    nom() {
        prenom = "Ludivine"
        nom = "Dupont"
    },
    age : 84,
    moral : "mal",
    objet : "canne",
    sePlaindre() {

    },
    sePromener() {
        objet = "perdu"
    },
}

// EXO 3

let vieil_homme = {
    prenom : "Marcel",
    age : 90,
    saluer() {
        console.log(`Bonjour ${vieille_dame.nom(prenom, nom)}`);
    },
}

vieil_homme.saluer(prenom, nom);
console.log(vieil_homme);
