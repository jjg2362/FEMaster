"use strict";
import Component from "../../../lib/Component";
import Typography from "../../atoms/Typography";

class PostComment extends Component {
  constructor({ name, content }) {
    super();
    this.userName = name;
    this.content = content;
    this.nameText = new Typography({
      style: "font-size-regular font-weight-bold",
      content: this.userName,
    });
    this.contentText = new Typography({
      style: "font-size-regular font-weight-regular",
      content: this.content,
    });
  }

  onMount(event) {}

  render() {
    return `
        <div class="main-post-commentlists-comment flex-container flex-row">
            ${this.nameText.render()}
            ${this.contentText.render()}
        </div>
    `;
  }
}

export default PostComment;
