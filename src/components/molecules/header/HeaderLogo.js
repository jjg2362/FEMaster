"use strict";
import Component from "../../../lib/Component";
import Image from "../../atoms/Image";
import { etc } from "../../assets/Assets";

class HeaderLogo extends Component {
  constructor() {
    super();
    this.logoImage = new Image({
      style: "main-header-logo-image",
      src: etc[0].src,
    });
  }

  render() {
    return `
        <div class="main-header-logo">
        ${this.logoImage.render()}
        </div>
      `;
  }
}

export default HeaderLogo;
