"use strict";
import Component from "../../../lib/Component";
import Typography from "../../atoms/Typography";

class PostLikes extends Component {
  constructor({ like }) {
    super();
    this.like = like;
    this.text1 = new Typography({
      style: "font-size-regular font-weight-bold",
      content: `${this.like}명`,
    });
    this.text2 = new Typography({
      style: "font-size-regular font-weight-regular",
      content: "이 좋아합니다",
    });
  }

  onMount(event) {}

  render() {
    return `
        <div class="main-post-like flex-container flex-row">
            ${this.text1.render()}
            ${this.text2.render()}
        </div>
    `;
  }
}

export default PostLikes;
