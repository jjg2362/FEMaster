import Component from "../../lib/Component";
import PostHeader from "../molecules/Post/PostHeader";
import PostImage from "../molecules/Post/PostImage";
import PostIconLists from "../molecules/Post/PostIconLists";
import PostLike from "../molecules/Post/PostLikes";
import PostContent from "../molecules/Post/PostContent";
import PostCommentLists from "../molecules/Post/PostCommentLists";
import PostCommentInput from "../molecules/Post/PostInputComment";

class PostItem extends Component {
  constructor({ postData }) {
    super();
    this.postHeader = new PostHeader({ userData: postData.user });
    this.postImage = new PostImage({ src: postData.image });
    this.postIconLists = new PostIconLists();
    this.postLike = new PostLike({ like: postData.likes });
    this.postContent = new PostContent({
      name: postData.user.name,
      content: postData.content,
    });
    this.postCommentLists = new PostCommentLists({
      commentData: postData.comments,
    });
  }

  onMount(event) {}

  render() {
    return `
            <div class="main-post-item flex-container flex-column flex-space-between-sort">
                ${this.postHeader.render()}
                ${this.postImage.render()}
                ${this.postIconLists.render()}
                ${this.postLike.render()}
                ${this.postContent.render()}
                ${this.postCommentLists.render()}
            </div>
    `;
  }
}

export default PostItem;
