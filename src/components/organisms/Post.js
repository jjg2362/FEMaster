import Component from "../../lib/Component";
import { postData } from "../assets/Assets";
import PostItem from "./PostItem";

class Post extends Component {
  constructor() {
    super();
    this.posts = [];
    postData.map((data) => {
      this.posts.push(new PostItem({ postData: data }));
    });
  }

  onMount(event) {}

  render() {
    return `
        <article id="post" class="flex-container flex-center-sort">
            <div class="main-post">
              ${this.posts.map((post) => post.render())}
            </div>
        </article>
    `;
  }
}

export default Post;
