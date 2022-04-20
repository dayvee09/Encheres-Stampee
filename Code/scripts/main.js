// Lance les comportements

import Collection from "./Collection.js";

import ModalLord from "./ModalLord.js";
import ModalRecherche from "./ModalRecherche.js";

(function () {
  new ModalLord();
  new ModalRecherche();

  // Gestionnaire de clic sur le bouton catalogue. Entre en paramètre le nb de timbres issues du formulaire dans l'instanciation d'un objet de la classe Collection
  let elTimbres = document.querySelector("[data-js-timbres]");
  let nbTimbres = 16;

  // Gère la validité du choix de nombre de timbres par l'utilisateur. Fait disparaître le bouton catalogue au lancement de la partie
  if (nbTimbres) {
    //
    if (elTimbres) new Collection(nbTimbres, elTimbres);
  }
})();
