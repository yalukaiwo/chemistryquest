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

const button = document.getElementById("startgame");
const select = document.getElementById("mode_select");
const scoredisplay = document.getElementById("score_display");
const scores = JSON.parse(localStorage.getItem("score"));

localStorage.setItem("mode", select.value);
scoredisplay.textContent = scores[select.value].bestScore;

try {
  scoredisplay.textContent = JSON.parse(localStorage.getItem("score"))[
    localStorage.getItem("mode")
  ].bestScore;
} catch (e) {}

button.addEventListener("click", (e) => {
  e.preventDefault();
  location.href = "game.html";
});

select.addEventListener("change", () => {
  localStorage.setItem("mode", select.value);
  scoredisplay.textContent = scores[select.value].bestScore;
});
