"use strict";
import Component from "../../../lib/Component";
import Image from "../../atoms/Image";
import Typography from "../../atoms/Typography";
import IconButton from "../../atoms/IconButton";

class PostHeader extends Component {
  constructor({ userData }) {
    super();
    this.name = userData.name;
    this.src = userData.src;
    this.profileImage = new Image({
      style: "main-post-header-profile-image",
      src: this.src,
    });
    this.userName = new Typography({
      style: "main-post-header-profile-name font-size-regular font-weight-bold",
      content: this.name,
    });
    this.iconButton = new IconButton({
      style: "main-post-header-icon fa-ellipsis-h",
    });
  }

  onMount(event) {}

  render() {
    return `
        <div class="main-post-header flex-container flex-row flex-space-between-sort">
            <div class="main-post-header-profile-wrapper flex-container flex-row flex-center-sort">
                <div class="main-post-header-profile">
                    ${this.profileImage.render()}
                </div>
                ${this.userName.render()}
            </div>
            ${this.iconButton.render()}
        </div>
    `;
  }
}

export default PostHeader;
