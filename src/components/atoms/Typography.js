"use strict";
import Component from "../../lib/Component";

class Typography extends Component {
  constructor({ style, content }) {
    super();
    this.style = style;
    this.content = content;
  }

  render() {
    return `
            <p class="common__p ${this.style}">${this.content}</p>
        `;
  }
}

export default Typography;
