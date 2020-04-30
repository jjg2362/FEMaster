"use strict";
import Component from "../../../lib/Component";
import Typography from "../../atoms/Typography";

class PostContent extends Component {
  constructor({ name, content }) {
    super();
    this.userName = name;
    this.content = content;
    this.nameText = new Typography({
      style: "font-size-regular font-weight-bold font-text-inline",
      content: `${this.userName}`,
    });
    this.contentText = new Typography({
      style: "font-size-regular font-weight-regular font-text-inline",
      content: `${this.content}`,
    });
  }

  onMount(event) {}

  render() {
    return `
        <div class="main-post-content">
            ${this.nameText.render()}
            ${this.contentText.render()}
        </div>
    `;
  }
}

export default PostContent;
