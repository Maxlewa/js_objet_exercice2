// EXO 1

let personne = {
    argent : 30,
}

let magasin = {
    chocolat : 2,
    tartine : 3.5,
    vendre(a) {
        let acheter = prompt("Que veux-tu acheter ?")
        for (const key in this) {
            console.log(key);
            if (key == acheter) {
                console.log(key);
                console.log(magasin[key]);
                a.argent == magasin[key]
            }
        }
    }
}

magasin.vendre(personne);
console.log(magasin);
console.log(personne);

// // EXO 2

// let vieille_dame = {
//     nom : {
//         prenom : "Ludivine",
//         nom : "Dupont",
//     },
//     age : 84,
//     moral : "mal",
//     objet : "canne",
//     sePlaindre() {

//     },
//     sePromener() {
//         objet = "perdu"
//     },
// }

// // EXO 3

// let vieil_homme = {
//     prenom : "Marcel",
//     age : 90,
//     saluer() {
//         console.log(`Bonjour ${vieille_dame.nom.prenom} ${vieille_dame.nom.nom}`);
//     },
// }

// vieil_homme.saluer();
// console.log(vieil_homme);
