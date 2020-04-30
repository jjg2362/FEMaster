"use strict";
import Component from "../../lib/Component";

class Icon extends Component {
  constructor({ style }) {
    super();
    this.style = style;
  }

  render() {
    return `
        <i class="fa ${this.style}" aria-hidden="true"></i>
      `;
  }
}

export default Icon;
