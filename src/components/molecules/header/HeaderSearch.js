"use strict";
import Component from "../../../lib/Component";
import Input from "../../atoms/Input";

class HeaderSearch extends Component {
  constructor() {
    super();
    this.searchBar = new Input({
      style: "main-header-search-input",
      placeholder: "검색",
      type: "text",
    });
  }

  onMount(event) {}

  render() {
    return `
        <div class="main-header-search">
        ${this.searchBar.render()}
        </div>
    `;
  }
}

export default HeaderSearch;
