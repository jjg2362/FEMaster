"use strict";
import Component from "../../../lib/Component";
import IconButton from "../../atoms/IconButton";

const iconLists = [
  { style: "fa-home" },
  { style: "fa-paper-plane-o" },
  { style: "fa-compass" },
  { style: "fa-heart-o" },
  { style: "fa-user-circle-o" },
];

class HeaderIconList extends Component {
  constructor() {
    super();
    this.icons = [];
    iconLists.map((icon) => {
      this.icons.push(
        new IconButton({
          style: icon.style + " main-header-icon-item",
        })
      );
    });
  }
  onMount(event) {}

  render() {
    return `
        <div>
        ${this.icons.map((icon) => icon.render())}
        </div>
      `;
  }
}
export default HeaderIconList;
