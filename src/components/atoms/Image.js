"use strict";
import Component from "../../lib/Component";

class Image extends Component {
  constructor({ style, src }) {
    super();
    this.style = style;
    this.src = src;
  }

  render() {
    return `
            <img class="${this.style}" src="${this.src}" alt="${this.style}" />
        `;
  }
}

export default Image;
