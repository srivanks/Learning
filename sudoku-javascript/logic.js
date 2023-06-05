let sboard = document.getElementById("board");
let digits = document.getElementById("digits");
let selectedNumber;
let selectedTile;

let board = [
  "--74916-5",
  "2---6-3-9",
  "-----7-1-",
  "-586----4",
  "--3----9-",
  "--62--187",
  "9-4-7---2",
  "67-83----",
  "81--45---",
];
let solution = [
  "387491625",
  "241568379",
  "569327418",
  "758619234",
  "123784596",
  "496253187",
  "934176852",
  "675832941",
  "812945763",
];

window.onload = function () {
  setGame();
};

function setGame() {
  for (let r = 1; r <= 9; r++) {
    let number = document.createElement("div");
    number.classList.add("digit");
    number.addEventListener("click", selectNumber);
    number.id = r;
    number.innerText = r;
    digits.append(number);
  }

  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      let tile = document.createElement("div");
      tile.id = r.toString() + "-" + c.toString();
      if (r === 2 || r === 5) {
        tile.classList.add("horizontal-line");
      }
      if (c === 2 || c === 5) {
        tile.classList.add("vertical-line");
      }
      if (board[r][c] !== "-") {
        tile.innerText = board[r][c];
        tile.classList.add("tiles-start");
      }
      tile.classList.add("tile");
      tile.addEventListener("click", selectTile);
      sboard.append(tile);
    }
  }
}

function selectNumber() {
  if (selectedNumber !== undefined) {
    selectedNumber.classList.remove("number-selected");
  }
  selectedNumber = this;
  selectedNumber.classList.add("number-selected");
}

function selectTile() {
  if (selectedNumber) {
    if (this.innerText !== "") {
      return;
    }
    let coords = this.id.split("-");
    let r = parseInt(coords[0]);
    let c = parseInt(coords[1]);

    if (solution[r][c] === selectedNumber.id) {
      this.innerText = selectedNumber.id;
    }
  }

  let showMessage = true;
  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      if (board[r].some((b) => b === "")) {
        showMessage = false;
      } else {
        continue;
      }
    }
  }

  console.log("Game completed");
}
