export default class Tile {
  constructor(
    id,
    name,
    symbol,
    mass,
    wiki,
    type,
    generateRandomElement,
    score
  ) {
    this.id = id;
    this.name = name;
    this.symbol = symbol;
    this.mass = mass;
    this.wiki = wiki;
    this.type = type;
    this.generateRandomElement = generateRandomElement;
    this.score = score;
  }

  changeView(view) {
    if (!["default", "noSymbolShown", "noNameShown"].includes(view)) {
      throw new Error("This visual does not exist.");
    }

    this.view = view;

    this.render();
  }

  wrongTile() {
    this.parent.classList.add("table_element_wrong");
    setTimeout(() => {
      this.parent.classList.remove("table_element_wrong");
    }, 100);
  }

  correctTile() {
    this.parent.classList.add("table_element_correct");
    setTimeout(() => {
      this.parent.classList.remove("table_element_correct");
    }, 100);
  }

  clickHandler(e) {
    e.preventDefault();
    if (
      parseInt(this.id) ===
      parseInt(JSON.parse(localStorage.getItem("lookingFor")).id)
    ) {
      this.correctTile();
      this.score.increaseScore();
      this.generateRandomElement();
    } else {
      this.score.addWrongAnswer();
      this.wrongTile();
    }
  }

  render() {
    const parent = document.getElementById(this.id);

    const maininfo = document.createElement("div");
    maininfo.classList.add("maininfo");
    const symbol = document.createElement("h2");
    symbol.classList.add("symbol");
    symbol.textContent = this.symbol;
    if (this.view === "noSymbolShown") {
      symbol.textContent = "?";
    }
    maininfo.append(symbol);
    const identifyer = document.createElement("h3");
    identifyer.classList.add("identifyer");
    identifyer.textContent = this.id;
    maininfo.append(identifyer);

    const name = document.createElement("p");
    name.classList.add("name");
    name.textContent = this.name;
    if (this.view === "noNameShown") {
      name.textContent = "?";
    }

    const mass = document.createElement("p");
    mass.classList.add("mass");
    mass.textContent = (Math.round(this.mass * 100) / 100).toFixed(2);

    parent.innerHTML = "";

    if (this.type === "default") {
      parent.href = this.wiki;
    } else if (this.type === "game") {
      parent.onclick = this.clickHandler.bind(this);
    }

    parent.append(maininfo);
    parent.append(name);
    parent.append(mass);

    this.parent = parent;

    return this;
  }
}
