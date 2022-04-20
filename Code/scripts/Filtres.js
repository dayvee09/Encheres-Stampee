export default class Filtres {
  constructor(elFiltre) {
    this.elFiltre = elFiltre;
    this.selection = 0;
    this.init();
  }

  init() {
    this.appliqueFiltresBtnsSideNav();
    switch (this.elFiltre.dataset.jsFiltre) {
      case "archives": {
        this.appliqueFiltreCheckBox();
        break;
      }
      case "actives": {
        this.appliqueFiltreCheckBox();
        break;
      }
      case "sort": {
        this.appliqueFiltreSelect();
        break;
      }
    }
  }

  appliqueFiltreCheckBox() {
    let timbres = document.querySelectorAll("[data-js-timbre]"),
      dateFin;
    this.elFiltre.addEventListener(
      "click",
      function () {
        if (this.elFiltre.dataset.jsFiltre == "archives") {
          for (let i = 0; i < timbres.length; i++) {
            dateFin = timbres[i].querySelector(".date--fin");
            if (dateFin.classList.contains("expire")) {
              timbres[i].classList.toggle("hidden");
            }
          }
        }
        if (this.elFiltre.dataset.jsFiltre == "actives") {
          for (let i = 0; i < timbres.length; i++) {
            dateFin = timbres[i].querySelector(".date--fin");
            if (!dateFin.classList.contains("expire")) {
              timbres[i].classList.toggle("hidden");
            }
          }
        }
      }.bind(this)
    );
  }

  appliqueFiltreSelect() {
    let elMiseA, elMiseB, elMiseValueA, elMiseValueB;
    let timbres = document.querySelectorAll("[data-js-timbre]");
    this.elFiltre.addEventListener(
      "change",
      function (e) {
        switch (this.elFiltre.value) {
          case "prix": {
            let tabTimbres = Array.prototype.slice.call(timbres, 0);
            if (this.elFiltre.classList.contains("asc")) {
              this.elFiltre.classList.remove("asc");
              this.elFiltre.classList.add("desc");
              tabTimbres.sort(function (a, b) {
                elMiseA = a.querySelector(".mise--courante");
                elMiseB = b.querySelector(".mise--courante");
                elMiseValueA = elMiseA.querySelector("span").innerText;
                elMiseValueB = elMiseB.querySelector("span").innerText;
                var aord = parseInt(elMiseValueA);
                var bord = parseInt(elMiseValueB);
                if (aord > bord) {
                  return 1;
                } else if (aord < bord) {
                  return -1;
                } else {
                  var aord = +a.elMiseValueA;
                  var bord = +b.elMiseValueB;
                  return aord > bord ? 1 : -1;
                }
              });
            } else if (this.elFiltre.classList.contains("desc")) {
              this.elFiltre.classList.remove("desc");
              this.elFiltre.classList.add("asc");
              tabTimbres.sort(function (a, b) {
                elMiseA = a.querySelector(".mise--courante");
                elMiseB = b.querySelector(".mise--courante");
                elMiseValueA = elMiseA.querySelector("span").innerText;
                elMiseValueB = elMiseB.querySelector("span").innerText;
                var aord = parseInt(elMiseValueA);
                var bord = parseInt(elMiseValueB);
                if (aord > bord) {
                  return -1;
                } else if (aord < bord) {
                  return 1;
                } else {
                  var aord = +a.elMiseValueA;
                  var bord = +b.elMiseValueB;
                  return aord > bord ? -1 : 1;
                }
              });
            }

            var parent = document.querySelector("[data-js-timbres]");
            let sideNav = parent.querySelector(".side-nav");
            parent.innerHTML = "";

            for (var i = 0, l = tabTimbres.length; i < l; i++) {
              parent.appendChild(sideNav);
              parent.appendChild(tabTimbres[i]);
            }
            break;
          }
          case "debut": {
            let tabTimbres = Array.prototype.slice.call(timbres, 0);
            if (this.elFiltre.classList.contains("asc")) {
              this.elFiltre.classList.remove("asc");
              this.elFiltre.classList.add("desc");
              tabTimbres.sort(function (a, b) {
                elMiseA = a.querySelector(".date--debut");
                elMiseB = b.querySelector(".date--debut");
                elMiseValueA = elMiseA.querySelector("span").innerText;
                elMiseValueB = elMiseB.querySelector("span").innerText;
                var aord = elMiseValueA;
                var bord = elMiseValueB;
                if (aord > bord) {
                  return 1;
                } else if (aord < bord) {
                  return -1;
                } else {
                  var aord = +a.elMiseValueA;
                  var bord = +b.elMiseValueB;
                  return aord > bord ? 1 : -1;
                }
              });
            } else if (this.elFiltre.classList.contains("desc")) {
              this.elFiltre.classList.remove("desc");
              this.elFiltre.classList.add("asc");
              tabTimbres.sort(function (a, b) {
                elMiseA = a.querySelector(".date--debut");
                elMiseB = b.querySelector(".date--debut");
                elMiseValueA = elMiseA.querySelector("span").innerText;
                elMiseValueB = elMiseB.querySelector("span").innerText;
                var aord = elMiseValueA;
                var bord = elMiseValueB;
                if (aord > bord) {
                  return -1;
                } else if (aord < bord) {
                  return 1;
                } else {
                  var aord = +a.elMiseValueA;
                  var bord = +b.elMiseValueB;
                  return aord > bord ? -1 : 1;
                }
              });
            }

            var parent = document.querySelector("[data-js-timbres]");
            let sideNav = parent.querySelector(".side-nav");
            parent.innerHTML = "";

            for (var i = 0, l = tabTimbres.length; i < l; i++) {
              parent.appendChild(sideNav);
              parent.appendChild(tabTimbres[i]);
            }
            break;
          }
          case "fin": {
            let tabTimbres = Array.prototype.slice.call(timbres, 0);
            if (this.elFiltre.classList.contains("asc")) {
              this.elFiltre.classList.remove("asc");
              this.elFiltre.classList.add("desc");
              tabTimbres.sort(function (a, b) {
                elMiseA = a.querySelector(".date--fin");
                elMiseB = b.querySelector(".date--fin");
                elMiseValueA = elMiseA.querySelector("span").innerText;
                elMiseValueB = elMiseB.querySelector("span").innerText;
                var aord = elMiseValueA;
                var bord = elMiseValueB;
                if (aord > bord) {
                  return 1;
                } else if (aord < bord) {
                  return -1;
                } else {
                  var aord = +a.elMiseValueA;
                  var bord = +b.elMiseValueB;
                  return aord > bord ? 1 : -1;
                }
              });
            } else if (this.elFiltre.classList.contains("desc")) {
              this.elFiltre.classList.remove("desc");
              this.elFiltre.classList.add("asc");
              tabTimbres.sort(function (a, b) {
                elMiseA = a.querySelector(".date--fin");
                elMiseB = b.querySelector(".date--fin");
                elMiseValueA = elMiseA.querySelector("span").innerText;
                elMiseValueB = elMiseB.querySelector("span").innerText;
                var aord = elMiseValueA;
                var bord = elMiseValueB;
                if (aord > bord) {
                  return -1;
                } else if (aord < bord) {
                  return 1;
                } else {
                  var aord = +a.elMiseValueA;
                  var bord = +b.elMiseValueB;
                  return aord > bord ? -1 : 1;
                }
              });
            }

            var parent = document.querySelector("[data-js-timbres]");
            let sideNav = parent.querySelector(".side-nav");
            parent.innerHTML = "";

            for (var i = 0, l = tabTimbres.length; i < l; i++) {
              parent.appendChild(sideNav);
              parent.appendChild(tabTimbres[i]);
            }
            break;
          }
        }
        this.selection = e.target.value;
        this.elFiltre.firstElementChild.selected = true;
      }.bind(this)
    );
  }

  appliqueFiltresBtnsSideNav() {
    this.elFiltre.addEventListener(
      "click",
      function () {
        this.elFiltre.classList.toggle("btn-filtre--selectionne");
      }.bind(this)
    );
  }
}
