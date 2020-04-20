class Navbar {
  constructor(navbarList) {
    this.wrapper = null;
    this.list = navbarList;
  }

  onMount() {
    this.wrapper = document.createElement("ul");

    this.list.forEach((item) => {
      const itemObj = new NavbarItem(item.title, item.children || []);
      itemObj.onMount(this.wrapper);
    });
    document.body.appendChild(this.wrapper);
  }
}

class NavbarItem {
  constructor(title, children = []) {
    this.el = null;
    this.title = title;
    this.children = children;
    this.isActive = false;
  }
  onMount(appendEl) {
    this.el = document.createElement("li");
    const ul = this.children ? document.createElement("ul") : null;

    this.children.forEach((item) => {
      const itemObj = new NavbarItem(item.title, item.children || []);
      itemObj.onMount(ul);
    });

    this.el.innerHTML = this.title;
    this.el.appendChild(ul);
    appendEl.appendChild(this.el);

    this.el.addEventListener("click", (e) => {
      e.stopPropagation();
      this.isActive = !this.isActive;
      if (this.isActive) {
        ul.style.display = "block";
      } else {
        ul.style.display = "none";
      }
    });
  }
}
//Event Bubbling Capturing
//Stop propagation
//preventDefault
//debugger

// class navBar {
//   constructor(name, child = false, children = []) {
//     this.el = null;
//     this.name = name;
//     this.children = [];
//     this.item_wrapper = null;
//     this.child = child;
//   }
//   onMount() {
//     this.el = document.createElement("li");
//     if (!this.child) {
//       wrapper.appendChild(this.el);
//     }
//     this.el.innerText = this.name;

//     if (this.children.length > 0) {
//       console.log(this.children);
//       this.item_wrapper = document.createElement("ul");
//       this.children.forEach((item) => {
//         this.item_wrapper.appendChild(item);
//       });
//       this.el.appendChild(this.item_wrapper);
//     }
//   }
// }

// const navbarList = [
//   ["홈"],
//   ["탐색하기"],
//   ["알림"],
//   ["쪽지"],
//   ["북마크"],
//   ["리스트"],
//   ["프로필"],
//   ["더보기"],
// ];

// const createNavbar = () => {
//   navbarList.forEach((col, index) => {
//     const childNav = [];
//     if (navbarItemList[index]) {
//       navbarItemList.forEach((row) => {
//         const navItemObj = new navBar(row, true);
//         navItemObj.onMount();
//         childNav.push(navItemObj);
//       });
//     }
//     const navObj = new navBar(col, false, childNav);
//     navObj.onMount();
//   });
// };
// createNavbar();

module.exports = Navbar;
