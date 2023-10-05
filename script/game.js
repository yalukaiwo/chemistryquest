import periodicTable from "../data/array_of_elements.js";
import TileManager from "./TileManager.class.js";
import Timer from "./Timer.class.js";
import Score from "./Score.class.js";
import ElementPicker from "./ElementPicker.class.js";

class Game {
  constructor(type, time) {
    this.type = type;
    this.time = time;
    this.manager = new TileManager(periodicTable, type).mount();
    this.elementPicker = new ElementPicker(periodicTable);
  }

  generateRandomElement = () => {
    this.elementPicker.randomNumber();
  };

  startButtonHandler(e) {
    e.preventDefault();

    this.score = new Score().resetScore().resetWrongAnswers();
    this.timer = new Timer(this.score).start();
    this.manager = new TileManager(
      periodicTable,
      "game",
      this.generateRandomElement,
      this.score
    ).mount();

    document.getElementById("start_game").style.display = "none";
    document.getElementById("element_to_find").style.display = "block";

    this.generateRandomElement();
  }

  init() {
    const startButton = document.getElementById("start_game");

    startButton.onclick = this.startButtonHandler.bind(this);

    return this;
  }
}

const game = new Game("default", 120).init();
