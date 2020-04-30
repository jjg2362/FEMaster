"use strict";
import Component from "../../lib/Component";

class Input extends Component {
  constructor({ style, placeholder, type }) {
    super();
    this.style = style;
    this.placeholder = placeholder;
    this.type = type;
  }

  render() {
    return `
            <input class="common__input ${this.style}" type="${this.type}" placeholder="${this.placeholder}"></input>
        `;
  }
}

export default Input;
