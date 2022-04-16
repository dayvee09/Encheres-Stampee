// Inventaire des timbres disponibles pour injecter dans l'interface de l'application

export default class Timbres {
  constructor() {
    this.timbres = [
      "Australia",
      "Belgique",
      "Brno",
      "Crow",
      "Fusee",
      "Georges",
      "Groundhog",
      "James",
      "Latvia",
      "Liberty",
      "Magyar",
      "Maroc",
      "Reine",
      "Sherlock",
      "Singe",
      "Ours",
    ];

    this.temps = new Date();
    this.mise = Math.floor(Math.random() * 1000);
    this.description = this.lorem();
    this.msDebut;
    this.msFin;
  }

  get nbTimbre() {
    return this.timbres.length;
  }

  get timbresListe() {
    return this.timbres;
  }

  get tempsDebut() {
    let debut = this.randomDate(new Date("2022-01-01"), new Date("2022-07-01"));
    let today = this.roundMinutes(debut);
    this.msDebut = today.getTime();

    let dateOptions = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    };

    return today.toLocaleString("en-US", dateOptions);
  }

  get tempsFin() {
    let fin = this.randomDate(new Date("2022-01-01"), new Date("2022-07-01"));
    // var today = this.temps;
    // var tomorrow = this.temps;
    // tomorrow.setDate(today.getDate() + 14);
    let tomorrow = this.roundMinutes(fin);
    this.msFin = tomorrow.getTime();

    let dateOptions = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    };

    return tomorrow.toLocaleString("en-US", dateOptions);
  }

  roundMinutes(date) {
    date.setHours(date.getHours() + Math.round(date.getMinutes() / 60));
    date.setMinutes(0, 0, 0);

    return date;
  }

  lorem(n = 10) {
    if (typeof n !== "number" || (typeof n === "number" && n < 1)) {
      n = 10;
    }

    const words = [
      "lorem",
      "ipsum",
      "dolor",
      "sit",
      "amet",
      "consectetur",
      "adipiscing",
      "elit",
      "vivamus",
      "et",
      "accumsan",
      "augue",
      "duis",
      "eget",
      "nunc",
      "id",
      "sodales",
      "finibus",
      "vestibulum",
      "sagittis",
      "magna",
      "nec",
      "rutrum",
      "volutpat",
      "risus",
      "tincidunt",
      "justo",
      "non",
      "gravida",
      "tortor",
      "enim",
      "in",
      "urna",
      "ut",
      "vel",
      "metus",
      "pellentesque",
      "porttitor",
      "vitae",
      "nisi",
      "nullam",
      "faucibus",
      "condimentum",
      "quam",
      "imperdiet",
      "class",
      "aptent",
      "taciti",
      "sociosqu",
      "ad",
      "litora",
      "torquent",
      "per",
      "conubia",
      "nostra",
      "inceptos",
      "himenaeos",
      "interdum",
      "malesuada",
      "fames",
      "ac",
      "ante",
      "primis",
      "curabitur",
      "nibh",
      "quis",
      "iaculis",
      "cras",
      "mollis",
      "eu",
      "congue",
      "leo",
    ];
    const count = Math.floor(Math.random() * n + 1);
    const sentence = [];
    const indexes = new Array(count).fill(0).map((index) => {
      return Math.floor(Math.random() * words.length);
    });
    indexes.forEach((index, i) => {
      const word = words[index];
      if (i === 0) sentence.push(word.charAt(0).toUpperCase() + word.substr(1));
      else sentence.push(word);
    });
    return sentence.join(" ").concat(".");
  }

  randomDate(start, end) {
    return new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
  }
}
