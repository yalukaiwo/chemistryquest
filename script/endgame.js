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

if (!localStorage.getItem("wrong")) {
  localStorage.setItem("wrong", 0);
}

const button = document.getElementById("startgame");
const scoredisplay = document.getElementById("score_display");
const newResult = document.getElementById("current_result");
const scores = JSON.parse(localStorage.getItem("score"));
const wrongs = JSON.parse(localStorage.getItem("wrong"));
const wrongdisplay = document.getElementById("wrong_display");

if (!localStorage.getItem("mode")) {
  localStorage.setItem("mode", "name");
}

newResult.textContent = scores.savedScore;
scoredisplay.textContent = scores[localStorage.getItem("mode")].bestScore;
wrongdisplay.textContent = wrongs;

try {
  scoredisplay.textContent = JSON.parse(localStorage.getItem("score"))[
    localStorage.getItem("mode")
  ].bestScore;
} catch (e) {}

button.addEventListener("click", (e) => {
  e.preventDefault();
  location.href = "index.html";
});
