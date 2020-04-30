"use strict";
import Component from "../../../lib/Component";
import BackgroundImage from "../../atoms/BackgroundImage";

class PostImage extends Component {
  constructor({ src }) {
    super();
    this.src = src;
    this.image = new BackgroundImage({
      src: this.src,
      style: "main-post-image-image",
    });
  }

  onMount(event) {}

  render() {
    return `
        <div class="main-post-image">
            ${this.image.render()}
        </div>
    `;
  }
}

export default PostImage;
