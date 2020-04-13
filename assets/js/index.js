const input = document.getElementById("result");
const buttonLayer = document.querySelector(".buttons");
class Button {
  constructor(text, color) {
    this.element = null;
    this.text = text;
    this.color = color;
  }
  mountDOM() {
    if (this.element !== null) {
      return;
    }
    this.element = document.createElement("div");
    this.element.classList.add("button");
    this.element.textContent = this.text;
    this.element.style.background = this.color;
    buttonLayer.appendChild(this.element);

    this.element.addEventListener("click", () => {
      if (this.Func) {
        this.Func();
      }
    });
  }
}

class NumberButton extends Button {
  constructor(text, color) {
    super(text, color);

    this.Func = () => {
      input.value = input.value + this.text;
    };
  }
}

class ResultButton extends Button {
  constructor(text, color) {
    super(text, color);

    this.Func = () => {
      let cal = eval(input.value);
      input.value = cal;
    };
  }
}

const keyPad = [
  [7, 8, 9, "+"],
  [4, 5, 6, "-"],
  [1, 2, 3, "="],
];

let buttons = [];

function initialize() {
  keyPad.forEach((i) => {
    i.forEach((j) => {
      if (j === "=") {
        createButton(new ResultButton(j, "#5c5e63"));
      } else {
        createButton(new NumberButton(j, "#fe9327"));
      }
    });
  });
}
initialize();

function createButton(buttonInstance) {
  buttonInstance.mountDOM();
  buttons.push(buttonInstance);
}
