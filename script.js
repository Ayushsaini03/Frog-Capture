const squares = document.querySelectorAll(".square");
const timeLeft = document.querySelector("#time-left");
const score = document.querySelector("#score");

let result = 0;
let hitPosition;
let currentTime = 60;
let timerId = null;

function randomSquare() {
  squares.forEach((square) => {
    square.classList.remove("frog");
  });

  let randomSqaure = squares[Math.floor(Math.random() * 9) + 1];
  randomSqaure.classList.add("frog");
  hitPosition = randomSqaure.id;
}

squares.forEach((square) => {
  square.addEventListener("mousedown", () => {
    if (square.id == hitPosition) {
      result++;
      score.textContent = result;
      hitPosition = null;
    }
  });
});

function movefrog() {
  timerId = setInterval(randomSquare, 600);
}

movefrog();

function countDown() {
  currentTime--;
  timeLeft.textContent = currentTime;

  if (currentTime == 0) {
    clearInterval(countDownTimerId);
    clearInterval(timerId);
    alert(`Game Over! Your final Score Is ${result} \nRefresh to restart!`);
  }
}

let countDownTimerId = setInterval(countDown, 1000);