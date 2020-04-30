"use strict";
import Component from "../../lib/Component";

class BackgroundImage extends Component {
  constructor({ src, style }) {
    super();
    this.style = style;
    this.src = src;
  }

  render() {
    return `
        <div 
          class="${this.style}" 
          style="background-image: url('${this.src}')">
        </div>
      `;
  }
}

export default BackgroundImage;
