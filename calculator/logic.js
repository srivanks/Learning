const calculator = document.querySelector(".calculator");
const keys = calculator.querySelector(".keys");

keys.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    const key = e.target;
    const action = key.dataset.action;

    if (!action) {
      console.log("number");
    }
    if (
      action === "add" ||
      action === "subtract" ||
      action === "multiply" ||
      action === "divide"
    ) {
      console.log("operator");
    }

    if (key === "decimal") {
      console.log("decimal");
    }
    if (action === "clear") {
      console.log("clear key!");
    }

    if (action === "calculate") {
      console.log("equal key!");
    }
  }
});
