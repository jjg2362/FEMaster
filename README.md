# Javascript로 계산기 만들기

Frontend 마스터가 되기 위해 FE의 근본, Vanilla JS 를 제대로 배우기 시작한다. 첫 번째 관문은 계산기 만들기다. 코드 리뷰를 통해 복습해보려 한다.

``` javascript
const input = document.getElementById("result");
const buttonLayer = document.querySelector(".buttons");
```

input은 식과 계산 결과를 보여주는 HTMLInputElement이다. 

buttonLayer는 계산기 버튼들의 상위 HTMLDivElement이다.



### 객체 상속을 위한 부모 클래스

``` javascript
class Button {
  constructor(text, color) {
    this.element = null;
    this.text = text;
    this.color = color;
  }
  mountDOM() {
    if (this.element !== null) {
      return;
    }
    this.element = document.createElement("div");
    this.element.classList.add("button");
    this.element.textContent = this.text;
    this.element.style.background = this.color;
    buttonLayer.appendChild(this.element);

    this.element.addEventListener("click", () => {
      if (this.Func) {
        this.Func();
      }
    });
  }
}
```

객체의 상속을 위해 먼저 부모 클래스를 작성하였다. 생성자에는 text, color을 인자로 받아오며 text는 버튼의 문자, color는 버튼의 배경색을 위한 변수이다. element는 객체와 HTML Element를 연결하기 위한 변수이다.

주목할 것은 **mountDOM** 함수이다. 이 함수는 이름 그대로 HTML의 Element로 삽입하기 위한 함수이며 객체와 Element를 이어준다. element를 HTMLDivElement로 초기화 한 후, "button"이라는 className을 붙혀준다. 앞서 생성자를 통해 초기화 된 값을 element에 삽입하여 설정한다. 마지막으로 앞서 가져온 버튼들의 상위 HTMLDivElement인 buttonLayer의 자식 요소로 삽입한다. 그리고 이 요소가 클릭될 때 함수를 실행시킨다. 이 함수는 뒤이어 설명하겠다.

### 상속받은 객체 클래스

```javascript
class NumberButton extends Button {
  constructor(text, color) {
    super(text, color);

    this.Func = () => {
      input.value = input.value + this.text;
    };
  }
}

class ResultButton extends Button {
  constructor(text, color) {
    super(text, color);

    this.Func = () => {
      let cal = eval(input.value);
      input.value = cal;
    };
  }
}
```

부모 클래스에서 클릭 이벤트를 처리하기 위한 함수 구현은 자식 클래스에 있다. 먼저 NumberButton은 숫자와 부호 버튼을 위한 객체고, ResultButton은 계산의 결과를 나타내기 위한 객체다. 두 객체 모두 같은 이름의 함수를 가지고 있지만 이 함수의 실행 결과는 다르다. NumberButton의 Func함수는 객체의 text값을 input에 추가한다. ResultButton의 Func함수는 input에 입력된 값을 eval함수를 통해 결과값을 출력한다. 동작은 다르지만 두 함수의 이름이 같기 때문에 상위 클래스인 Button에서 클릭 이벤트를 처리할 때 더욱 수훨히 진행할 수 있다.

### 객체 초기화

```javascript
const keyPad = [
  [7, 8, 9, "+"],
  [4, 5, 6, "-"],
  [1, 2, 3, "="],
];

function initialize() {
  keyPad.forEach((i) => {
    i.forEach((j) => {
      if (j === "=") {
        createButton(new ResultButton(j, "#5c5e63"));
      } else {
        createButton(new NumberButton(j, "#fe9327"));
      }
    });
  });
}
initialize();

function createButton(buttonInstance) {
  buttonInstance.mountDOM();
}
```

keyPad배열은 딱 보이듯 계산기 자판의 문자를 담고 있다.

initialize함수를 통해서 버튼을 생성한다. keyPad 배열을 읽어 배열의 값에 따라  ResultButton또는 NumberButton으로 class Instance를 생성한다. 객체가 생성됨과 동시에 text와 color가 초기화 되고, 각 버튼에 mountDOM함수를 실행시켜 실제 HTML에 객체의 값을 반영한다.



#### 정리

Javascript 첫 과제를 끝냈다. 간단한 로직이지만 이 과제를 해결해나감에 있어서 크게 두 가지를 배웠다.

+ Script의 객체와 DOM의 Element와 연결하는 법
+ 공통된 기능을 하는 객체에 상위 객체를 두어 코드 재사용성을 높이고, 간결화 하는 법

JS의 getElementById와 같은 내장함수들의 사용법에 대해서는 알고 있었지만 핵심이 되는 구현 로직에 대해서는 아직 부족한 점이 많다는 것을 느꼈다. 앞으로 더욱 다양한 과제를 통해 FE Master로 거듭나겠다.

