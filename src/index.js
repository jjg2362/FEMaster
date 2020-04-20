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
