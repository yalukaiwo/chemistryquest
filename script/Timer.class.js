export default class Timer {
  constructor(score) {
    this.time = 120;
    this.display = document.getElementById("timer_counter");
    this.score = score;
  }

  timeOutHandler() {
    this.score.endGameScore();
    location.href = "endgame.html";
  }

  update() {
    this.time -= 1;
    if (this.time <= 60) {
      this.display.style.color = "#fcba03";
    }
    if (this.time <= 20) {
      this.display.style.color = "#fc1c03";
    }
    this.display.textContent = this.time;
    if (this.time === 0) {
      clearInterval(this.timer);
      this.timeOutHandler();
    }
  }

  start() {
    this.timer = setInterval(this.update.bind(this), 1000);
  }

  reset() {
    this.time = 120;
  }
}
