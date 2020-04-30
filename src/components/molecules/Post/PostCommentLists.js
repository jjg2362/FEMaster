"use strict";
import Component from "../../../lib/Component";
import PostComment from "./PostComment";

class PostCommentLists extends Component {
  constructor({ commentData }) {
    super();
    this.commentData = commentData;
    this.comments = [];
  }

  onMount(event) {}

  render() {
    return `
        <div class="main-post-commentlists flex-container flex-column">
            <a href="/" class="main-post-comment-more">댓글 더 보기</a>
            ${this.renderComment()}
        </div>
    `;
  }

  renderComment() {
    let commentString = "";
    this.commentData.map((data) => {
      const comment = new PostComment({
        name: data.name,
        content: data.content,
      });
      this.comments.push(comment);
      commentString = commentString.concat(comment.render());
    });
    return commentString;
  }
}

export default PostCommentLists;
