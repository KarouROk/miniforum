console.log("app.js chargé")

const LONGUEUR_MIN = 5;
const LONGUEUR_MAX = 80;

const titres = [
    "Subject",
    "Eze is he a good LW option ?",
    "Emptyness from loss",
    "Emptyness from loss",
    "Madueke",
    "Saka"
];
console.log(titres);

function titresTries(titres){
    const trier = titres.sort();
    return trier;
}
function chercheDansTitres(titres, texte){
    const chercher = titres.find((n) => n.includes(texte));
    return chercher;
}

function titreExiste(titres,saisie){
    return titres.some((titre) => titre.toLowerCase().includes(saisie.toLowerCase()))
}


console.log ( " --- etape 4 ---" );
console.table(titresTries(titres));
console.log(titres[0]);
console.log(chercheDansTitres(titres,"Emptyness"));
console.log(chercheDansTitres(titres,"licorne"));
console.log(titreExiste(titres,"Subject"));
console.log(titreExiste(titres,"Un titre inventé"));


