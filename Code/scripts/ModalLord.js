export default class ModalLord {
  constructor() {
    this.elLord = document.querySelector(".nav__lord");
    this.elModal = document.querySelector(".modal");
    this.elNavMenus = document.querySelector(".menus");
    this.elMain = document.querySelector("main");
    this.elBtnClose = document.querySelector(".btn--close");
    console.log(this.elBtnClose);
    this.init();
  }

  init() {
    this.gestionModal();
    this.fermetureModalMenus();
    this.fermetureModalMain();
    this.fermetureModalBtn();
  }

  gestionModal() {
    this.elLord.addEventListener(
      "click",
      function () {
        this.elModal.classList.toggle("hidden");
        if (!this.elModal.classList.contains("hidden")) {
          this.elMain.classList.add("grise");
        } else this.elMain.classList.remove("grise");
        if (!this.elModal.classList.contains("hidden")) {
          this.elNavMenus.classList.add("grise");
        } else this.elNavMenus.classList.remove("grise");
      }.bind(this)
    );
  }

  fermetureModalMenus() {
    this.elNavMenus.addEventListener(
      "click",
      function () {
        this.elModal.classList.add("hidden");
        if (!this.elModal.classList.contains("hidden")) {
          this.elMain.classList.add("grise");
        } else this.elMain.classList.remove("grise");
        if (!this.elModal.classList.contains("hidden")) {
          this.elNavMenus.classList.add("grise");
        } else this.elNavMenus.classList.remove("grise");
      }.bind(this)
    );
  }

  fermetureModalMain() {
    this.elMain.addEventListener(
      "click",
      function () {
        if (!this.elModal.classList.contains("hidden")) {
          this.elModal.classList.add("hidden");
          if (!this.elModal.classList.contains("hidden")) {
            this.elMain.classList.add("grise");
          } else this.elMain.classList.remove("grise");
          if (!this.elModal.classList.contains("hidden")) {
            this.elNavMenus.classList.add("grise");
          } else this.elNavMenus.classList.remove("grise");
        }
      }.bind(this)
    );
  }

  fermetureModalBtn() {
    console.log(this.elBtnClose);
    this.elBtnClose.addEventListener(
      "click",
      function () {
        console.log("test");
        this.elModal.classList.add("hidden");
        if (!this.elModal.classList.contains("hidden")) {
          this.elMain.classList.add("grise");
        } else this.elMain.classList.remove("grise");
        if (!this.elModal.classList.contains("hidden")) {
          this.elNavMenus.classList.add("grise");
        } else this.elNavMenus.classList.remove("grise");
      }.bind(this)
    );
  }
}
