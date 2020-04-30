"use strict";
import Component from "../../../lib/Component";
import IconButton from "../../atoms/IconButton";

class PostIconLists extends Component {
  constructor() {
    super();
    this.heartIcon = new IconButton({
      style: "main-post-iconlists-icon fa-heart-o",
    });
    this.commentIcon = new IconButton({
      style: "main-post-iconlists-icon fa-comment-o",
    });
    this.shareIcon = new IconButton({
      style: "main-post-iconlists-icon fa-paper-plane-o",
    });
    this.bookmarkIcon = new IconButton({
      style: "main-post-iconlists-icon fa-bookmark-o",
    });
  }

  onMount(event) {}

  render() {
    return `
      <div class="main-post-iconlists flex-container flex-space-between-sort flex-row">
        <div class="main-post-iconlsits-left flex-container flex-row">
          ${this.heartIcon.render()}
          ${this.commentIcon.render()}
          ${this.shareIcon.render()}
        </div>
        ${this.bookmarkIcon.render()}
      </div>
    `;
  }
}

export default PostIconLists;
