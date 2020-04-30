"use strict";
import Component from "../../lib/Component";
import HeaderLogo from "../molecules/header/HeaderLogo";
import HeaderSearch from "../molecules/header/HeaderSearch";
import HeaderIconLists from "../molecules/header/HeaderIconLists";

class Header extends Component {
  constructor() {
    super();
    this.headerLogo = new HeaderLogo();
    this.headerSearch = new HeaderSearch();
    this.headerIconLists = new HeaderIconLists();
  }

  onMount(event) {}

  render() {
    return `
        <header id="header" class="flex-container flex-center-sort">
            <div class="header flex-container flex-row flex-space-between-sort">
                ${this.headerLogo.render()}
                ${this.headerSearch.render()}
                ${this.headerIconLists.render()}
            </div>
        </header>
    `;
  }
}

export default Header;
