let board = document.getElementById("board");
let ctx = board.getContext("2d");
board.style.border = "1px solid black";
let gameStarted = false;

let uSize = 25;
let snake = [
  { x: 2, y: 0 },
  { x: 1, y: 0 },
  { x: 0, y: 0 },
];

let food = { x: 5, y: 5 };

let dx = 0;
let dy = 0;

function clearScreen() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, board.width, board.height);
}
function drawFood() {
  ctx.fillStyle = "red";
  ctx.fillRect(food.x * uSize, food.y * uSize, uSize, uSize);
}

function drawSnake() {
  ctx.fillStyle = "green";
  snake.forEach((s) => {
    ctx.fillRect(s.x * uSize, s.y * uSize, uSize, uSize);
  });
}

function changeDirection(e) {
  if (
    !gameStarted &&
    (e.keyCode === 38 ||
      e.keyCode === 39 ||
      e.keyCode === 37 ||
      e.keyCode === 40)
  )
    gameStarted = true;
  if (e.keyCode === 38 && dy !== 1) {
    dy = -1;
    dx = 0;
  } else if (e.keyCode === 39 && dx !== -1) {
    dx = 1;
    dy = 0;
  } else if (e.keyCode === 37 && dx !== 1) {
    dx = -1;
    dy = 0;
  } else if (e.keyCode === 40 && dy !== -1) {
    dy = 1;
    dx = 0;
  }
}

function isGameOverDone() {
  //check whether game has started
  if (dy === 0 && dx === 0) {
    return false;
  }
  let gameOver = false;
  console.log(snake[0]);
  if (snake[0].x < 0) {
    //if snake hits left wall
    gameOver = true;
  } else if (snake[0].x > 20) {
    //if snake hits right wall
    gameOver = true;
  } else if (snake[0].y < 0) {
    //if snake hits wall at the top
    gameOver = true;
  } else if (snake[0].y > 20) {
    //if snake hits wall at the bottom
    gameOver = true;
  }
  return gameOver;
}

function moveSnake() {
  if (!gameStarted) return;
  let result = isGameOverDone();
  if (result) {
    console.log("Game over");
    alert("jghgh");
    return;
  }
  let head = { x: snake[0].x + dx, y: snake[0].y + dy };
  if (head.x === food.x && head.y === food.y) {
    snake.unshift({ x: food.x, y: food.y });
    food = {
      x: Math.floor(Math.random() * 20),
      y: Math.floor(Math.random() * 20),
    };
    drawFood();
  } else {
    snake.pop();
    snake.unshift(head);
  }
}

function frame() {
  clearScreen();
  drawSnake();
  moveSnake();
  drawFood();
  setTimeout(frame, 1000 / 7);
}

document.addEventListener("keyup", changeDirection);

frame();
