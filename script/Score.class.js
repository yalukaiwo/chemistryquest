export default class Score {
  constructor() {
    this.score = 0;
    this.wrong = 0;
    this.display = document.getElementById("score_counter");
    this.displayWrong = document.getElementById("wrong_counter");
    if (!localStorage.getItem("score")) {
      localStorage.setItem(
        "score",
        JSON.stringify({
          savedScore: 0,
          name: { bestScore: 0 },
          symbol: { bestScore: 0 },
        })
      );
    }
  }

  addWrongAnswer() {
    this.wrong += 1;
    this.saveScore();
  }

  resetWrongAnswers() {
    this.wrong = 0;
    this.saveScore();
    return this;
  }

  resetScore() {
    this.score = 0;
    this.saveScore();
    return this;
  }

  increaseScore() {
    this.score += 1;
    this.saveScore();
  }

  saveScore() {
    const storage = JSON.parse(localStorage.getItem("score"));
    storage.savedScore = this.score;
    this.display.textContent = this.score;
    if (this.displayWrong) this.displayWrong.textContent = this.wrong;
    localStorage.setItem("wrong", this.wrong);
    localStorage.setItem("score", JSON.stringify(storage));
  }

  endGameScore() {
    const mode = localStorage.getItem("mode");
    if (!mode) {
      localStorage.setItem("mode", "name");
    }
    const storage = JSON.parse(localStorage.getItem("score"));
    if (this.score > storage[mode].bestScore)
      storage[mode].bestScore = this.score;
    localStorage.setItem("score", JSON.stringify(storage));
  }
}
