console.log("app.js chargé");

const LONGUEUR_MIN = 5;
const LONGUEUR_MAX = 80;
const MESSAGE_MAX = 500;

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

function validerPseudo(saisie) {
  const pseudo = saisie.trim();
  if (pseudo === "") {
    return "le Pseudo est obligatoire";
  }
  return "";
}
function validerMessage(saisie) {
  const message = saisie.trim();
  if (message === "") {
    return "Le Message est obligatoire.";
  }

  if (message.length > MESSAGE_MAX) {
    return "Le Message ne doit pas dépasser " + MESSAGE_MAX + " caractères.";
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
function afficherErreur(idMessage, texte) {
  const messageElement = document.querySelector(idMessage);
  if (messageElement) {
    messageElement.textContent = texte;
  }
}

if (document.querySelector("#subjects") !== null) {
  affichersujets(titres);

  const formulaire = document.querySelector("#form-new-subjects");
  const champPseudo = document.querySelector("#pseudo");
  const champTitre = document.querySelector("#title");
  const champMessage = document.querySelector("#message");

  formulaire.addEventListener("submit", (event) => {
    event.preventDefault();

    const erreurPseudo = validerPseudo(champPseudo.value);
    const erreurTitre = validerTitre(titres, champTitre.value);
    const erreurMessage = validerMessage(champMessage.value);

    afficherErreur("#erreur-pseudo", erreurPseudo);
    afficherErreur("#erreur-title", erreurTitre);
    afficherErreur("#erreur-message", erreurMessage);

    if (erreurPseudo !== "" || erreurTitre !== "" || erreurMessage !== "") {
      return;
    }

    titres.push(champTitre.value.trim());
    affichersujets(titres);

    formulaire.reset();
    champPseudo.focus();
  });
}



