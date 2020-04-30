"use strict";
import Component from "../../lib/Component";
import Icon from "./Icon";

class IconButton extends Component {
  constructor({ style, link = "/" }) {
    super();
    this.icon = new Icon({ style: style });
    this.link = link;
  }

  render() {
    return `
        <a href="${this.link}">${this.icon.render()}</a>
      `;
  }
}

export default IconButton;
