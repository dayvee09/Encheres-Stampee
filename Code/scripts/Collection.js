// Comportements de la collection de Timbres
import Timbres from "./Timbres.js";
import Filtres from "./Filtres.js";
export default class Collection {
  // Classe qui constitue la liste de timbres selon le nb de timbres sélectionné par l'utilisateur
  constructor(nbTimbres, elParent) {
    this.nbTimbres = nbTimbres;
    this.elParent = elParent;
    this.tableauSelection = [];

    this.init();
  }

  // Appel de la méthode injecteTimbres pour chaque timbre à injecter dans la fenêtre
  init() {
    for (let i = 0; i < this.nbTimbres; i++) {
      this.injecteTimbres(i);
    }
    this.initieFiltresCheckbox();
    this.initieFiltresSelect();
    this.initieFiltresBtnsSideNav();
  }

  initieFiltresCheckbox() {
    let elFiltresBox = document.querySelectorAll("input[type=checkbox]");
    for (let i = 0; i < elFiltresBox.length; i++) {
      new Filtres(elFiltresBox[i]);
    }
  }

  initieFiltresSelect() {
    let elFiltreSelect = document.querySelector(".sort");
    new Filtres(elFiltreSelect);
  }

  initieFiltresBtnsSideNav() {
    let elFiltresBtnSideNav = document.querySelectorAll("[data-js-filtre-btn]");
    for (let i = 0; i < elFiltresBtnSideNav.length; i++) {
      new Filtres(elFiltresBtnSideNav[i]);
    }
  }

  injecteTimbres(i) {
    // Instancisation d'un objet de la classe Timbres
    let nouveauTimbre = new Timbres();
    let nbRandomTimbre;
    let valide;
    // Vérifie si une valeur d'index générée aléatoirement n'existe pas déjà dans le tableau des timbres afin de ne pas avoir deux fois le même timbre
    if (this.tableauSelection.length > 0) {
      do {
        valide = true;
        nbRandomTimbre = Math.floor(Math.random() * nouveauTimbre.nbTimbre);
        for (let timbre in this.tableauSelection) {
          if (nbRandomTimbre == this.tableauSelection[timbre]) {
            valide = false;
            break;
          }
        }
      } while (valide == false);
    } else {
      if (this.tableauSelection.length == 0) {
        nbRandomTimbre = Math.floor(Math.random() * nouveauTimbre.nbTimbre);
      }
    }
    this.tableauSelection.push(nbRandomTimbre);
    let timbreNom = nouveauTimbre.timbresListe[nbRandomTimbre];
    let tempsDebut,
      tempsFin,
      diffDays,
      diffTime,
      dateActuelle = new Date().getTime();
    do {
      tempsDebut = nouveauTimbre.tempsDebut;
      tempsFin = nouveauTimbre.tempsFin;
      diffTime = nouveauTimbre.msFin - nouveauTimbre.msDebut;
      diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    } while (diffDays < 0 || diffDays > 30);
    let miseCourante = nouveauTimbre.mise;
    let description = nouveauTimbre.lorem(25);
    let textAdditionnel = nouveauTimbre.lorem(5);
    // Génère ici une DOMString qui contient le lien relatif associé à l'image d'un timbre
    let timbreImg = `
        <img src="./assets/img/${timbreNom}.jpg" class="img--timbre" alt="${timbreNom}"/>
        `;

    // DOMString de la tuile de chaque timbre
    let timbreDOMString = `
        
        <a href="./fiche-enchere.html" data-js-timbre="${timbreNom}">
          
          <div class="grid__tuile">
                
            <div class="grid__title">
              <div class="img-wrapper--timbre">${timbreImg}</div>
            </div>
                
              <div class="timbre__info">
                <h1 class="titre--timbre">${timbreNom} - Lot #${
      i + 1
    } - ${textAdditionnel}</h1>
              </div>
            <div class="catalogue__timbre--txt">
              <div class="enchere__info">
                <p class="description--lot">${description}</p>
                <div class="meta-date">
                  <div class="date--debut"><span>Début: ${tempsDebut}</span></div>
                  <div class="date--fin"><span>Fin: ${tempsFin}</span></div>
                </div>
                <div class="mise--courante">Mise courante: <span>${miseCourante}$</span></div>
              </div>
            </div>
            <div class="detail--lot"><button value="Consulter">Consulter</button></div>
          </div>

        </a>
        `;

    // Injection de la DOMString dans l'interface de l'application
    this.elParent.insertAdjacentHTML("beforeend", timbreDOMString);

    if (nouveauTimbre.msFin < dateActuelle) {
      let elExpire = this.elParent.lastElementChild;
      elExpire.querySelector(".date--fin").classList.add("expire");
      elExpire
        .querySelector(".date--fin")
        .insertAdjacentHTML("beforeend", `<span> (expirée)</span>`);
    }
  }
}
