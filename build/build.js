(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

    debugger;

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

},{}],2:[function(require,module,exports){
const NAVBAR = require("./Components/navBar");

const navbarList = [
  {
    title: "홈",
    children: [
      {
        title: "탐색하기",
        children: [
          {
            title: "테스트",
          },
        ],
      },
    ],
  },
  {
    title: "갓마흐",
  },
];

const navbar = new NAVBAR(navbarList);
navbar.onMount();

},{"./Components/navBar":1}]},{},[2]);
