# Nested Sidebar 만들기

<hr />

Frontend 마스터가 되기 위한 두 번째 관문, Nested sidebar를 구현해보았다. 바쁘다는 핑계로 미루다가 기간내에 완성하지 못하고, 코드 계의 이국종 <b>Vallista</b>님이 코드 긴급수술에 들어가 겨우 완성하였다. 순수하게 내가 짠 코드는 아니지만 그렇기에 더욱 신뢰가 가는(?) 이 코드들을 리뷰하며 복습해 볼 것이다.

먼저 이 프로젝트는 Browerify라는 ModuleBundler를 사용하였다. Webpack을 사용하기 전 가장 간단하고 기본적인 Module Bundler를 사용하여 감을 익히고, js 코드를 나누고 관리하는데 이번 과제의 목표가 있다.



### index.js

``` javascript
const Navbar = require("./Components/navBar");

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

const navbar = new Navbar(navbarList);
navbar.onMount();
```

먼저 index.js의 코드다. navBarList는 사이드바의 구조를 담고있다. 이번 구현과제가 nested sidebar인만큼 하나의 요소에 자식요소가 있고, 또 그 자식 요소가 자식 요소를 가지고 있는 구조로 배열을 구성하였다. 



### navBar.js

``` javascript
class Navbar {
  constructor(navbarList = []) {
    this.wrapper = null;
    this.list = navbarList;
  }

  onMount() {
    this.wrapper = document.createElement("ul");

    this.list.forEach((item) => {
      const itemObj = new NavbarItem(item.title, item.children);
      itemObj.onMount(this.wrapper);
    });
    document.body.appendChild(this.wrapper);
  }
}
```

먼저 navBar 클래스다. navBar 클래스는 navBarItem, 즉 사이드바의 요소의 상위 객체다. navBarList를 생성자에서 입력받고, onMount함수가 실행될 때 이 navBarList들의 정보를 파라미터 값으로 넘겨주며 객체를 생성하고, onMount함수를 실행하여 navBar클래스의 element에 삽입한다. 



``` javascript
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
      const itemObj = new NavbarItem(item.title, item.children);
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
```

NavbarItem 클래스다. 

**this.el** 은 element요소 **this.title**은 요소의 이름, **this.children**은 요소에 자식 요소가 있는지, **isActive**는 요소가 눌린상태 값을 가지고 있는 변수다. 

onMount함수가 실행되면 먼저 인자로 NavBar 클래스의 element를 받아온다. 가장 먼저 NavbarItem의 element를 초기화 해주고, 만약 자식요소가 있으면 ul 변수에 element를 생성한다. 그리고 자식요소의 수 만큼 NavbarItem 객체를 생성하고 onMount한다. 자식 요소가 상위 요소의 element에 붙을 수 있게 재귀를 통해 구현하였다. 만약 자식 요소가 있다면 자식 객체를 생성하고, 상위 객체의 element를 받아 자식요소로 붙는다. 모든 자식 element가 차례로 부모 element에 붙었으면 마지막으로 Navbar 클래스의 element인 appendEl에 붙는다. 이렇게 모든 element가 브라우저에 DOM에 추가된다.

#### stopPropagation()

이 후 요소들에 대한 클릭 이벤트 처리를 하는데 문제가 발생했다. 클릭 이벤트가 발생하면 isActive값을 변경하고 isActive가 true면 자식요소를 보이게, false면 자식요소를 보이지 않게 처리해야하는데 자식요소의 display가 block이 되면 부모요소의 영역이 자식영역만큼 차지해 자식요소에 대한 클릭이벤트가 정삭적으로 작동하지 않는 문제였다.

<img src="https://user-images.githubusercontent.com/6447355/79945857-b6d56800-84a9-11ea-9a26-381b43ae47f2.gif" />

event의 내장함수인 stopPropagation은 이름 그대로 요소의 영역이 확장되는 것을 막는다. 이 코드를 추가하여 실행하면 정상적으로 실행된다.

<img src="https://user-images.githubusercontent.com/6447355/79945867-b937c200-84a9-11ea-93f5-8381c3d5dd22.gif />


### 정리

이렇게 두 번째 과제를 마무리했다. 

+ Browserify를 사용하면서 Module Bundler의 사용 이유와 사용법에 대해서 배웠다.
+ 객체를 더욱 체계적이고, 효율적으로 생성할 수 있게 되었다.
+ stopPropagation의 사용법에 대해서 알게 되었다.

다음은 Webpack을 이용해 Instagram의 스크린을 구현해볼 것 이다.
