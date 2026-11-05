console.log("app.js chargé");

const LONGUEUR_MIN = 5;
const LONGUEUR_MAX = 80;

const titres = [
  "Subject",
  "he a good LW option ?",
  "Emptyness from loss",
  "Rien a dire",
  "Madueke",
  "Saka",
];
console.log(titres);

function titresTries(titres) {
  const trier = [...titres].sort();
  return trier;
}

function chercheDansTitres(titres, texte) {
  const chercher = titres.filter((titre) =>
    titre.toLowerCase().includes(texte.toLowerCase()),
  );
  return chercher;
}

function titreExiste(titres, saisie) {
  const saisieNettoyee = saisie.trim().toLowerCase();

  const titresEnMinuscules = titres.map((titre) => titre.toLowerCase());

  const existe = titresEnMinuscules.includes(saisieNettoyee);
  return existe;
}

function validerTitre(titres, saisie) {
  const titre = saisie.trim();

  if (titre === "") {
    return "Le titre est obligatoire.";
  }

  if (titre.length < LONGUEUR_MIN) {
    return "Le titre doit faire au moins " + LONGUEUR_MIN + " caractères.";
  }

  if (titre.length > LONGUEUR_MAX) {
    return "Le titre ne doit pas dépasser " + LONGUEUR_MAX + " caractères.";
  }

  if (titreExiste(titres, titre)) {
    return "Ce sujet existe déjà.";
  }

  return "";
}



function carteSujet(titre) {
  const article = document.createElement("article");
  article.classList.add("card-subjects");
  const h3 = document.createElement("h3");
  h3.textContent = titre;
  article.append(h3);
  return article;
}
function affichersujets(titres) {
  const section = document.querySelector("#subjects");
  document
    .querySelectorAll(".card-subjects")
    .forEach((titre) => titre.remove());
  for (const titre of titres) {
    section.append(carteSujet(titre));
  }
}
function afficherErreur(idMessage, texte){
    const messageElement = document.querySelector(idMessage);
    if (messageElement){
        messageElement.textContent = texte;
    }
}

if (document.querySelector("#subjects") !== null) {
  affichersujets(titres);
  
  //Ecouteur du formulaire ici ---->
  const formulaire = document.querySelector("#form-new-subjects");
  const champTitre = document.querySelector("h3");

  formulaire.addEventListener("submit",(event) =>{
    event.preventDefault();
    const saisie = champTitre.value
    console.log(event.target.textContent);

    const MessageE = validerTitre(titres,saisie);
    if(MessageE !== ""){
        afficherErreur("#erreur-title",saisie);
        return;
    }
    titres.push(saisie.trim());
    affichersujets(titres);
    formulaire.reset();
    saisie.focus();




  } )
}

/* console.log ( " --- etape 4 ---" );
console.table(titresTries(titres));
console.log(titres[0]);
console.log(chercheDansTitres(titres,"Emptyness"));
console.log(chercheDansTitres(titres,"licorne"));
console.log(titreExiste(titres,"Subject"));
console.log(titreExiste(titres,"Un titre inventé"));


console.log(" --- etape 5 ---");
console.log(validerTitre(titres , " ")); 
console.log(validerTitre(titres , " " )); 
console.log(validerTitre(titres , " Giten ")); 
console.log(validerTitre(titres ,"a".repeat(80))); 
console.log(validerTitre(titres , " MadUeKe " )); 
const reponse = validerTitre(titres ," Comment lire une erreur ?");
console.log("["+reponse+"]"); */
