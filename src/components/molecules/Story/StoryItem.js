import Component from "../../../lib/Component";
import Image from "../../atoms/Image";
import Typography from "../../atoms/Typography";

class StoryItem extends Component {
  constructor({ name, src }) {
    super();
    this.src = src;
    this.name = name;
    this.profileImage = new Image({
      style: "main-story-item-profile-image",
      src: this.src,
    });
    this.userName = new Typography({
      style:
        "main-story-item-profile-name font-size-regular font-weight-regular",
      content: this.name,
    });
  }

  onMount(event) {}

  render() {
    return `
        <div class="main-story-item flex-container flex-column ul-text-align-center">
            <a href="/">
                <div class="main-story-item-profile">
                    ${this.profileImage.render()}
                </div>
                ${this.userName.render()}
            </a>
        </div>
      `;
  }
}

export default StoryItem;
