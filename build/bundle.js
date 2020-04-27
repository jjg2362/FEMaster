/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/post.js":
/*!********************************!*\
  !*** ./src/components/post.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = connectPostDOM = (postData) => {\n  //post_hidden의 게시글 양식을 cloneNode를 통해 복사한다.\n  const postEl = document\n    .querySelector(\"#post .post_hidden .post\")\n    .cloneNode(true);\n\n  //유저 이름, 프로필 사진\n  const user_profile_picture = document.createElement(\"img\");\n  user_profile_picture.src = postData.user.profile;\n  user_profile_picture.alt = \"user_profile\";\n  postEl\n    .querySelector(\".post_title .user_profile\")\n    .appendChild(user_profile_picture);\n  const user_profile_name = document.createElement(\"span\");\n  user_profile_name.classList.add(\"user_name\");\n  user_profile_name.innerHTML = postData.user.name;\n  postEl\n    .querySelector(\".post_title .user_profile\")\n    .appendChild(user_profile_name);\n  //사진\n  const post_picture = document.createElement(\"img\");\n  post_picture.src = postData.picture;\n  post_picture.alt = \"post_picture\";\n  postEl.querySelector(\".post_picture\").appendChild(post_picture);\n  //좋아요\n  postEl.querySelector(\n    \".post_content .likes b\"\n  ).innerHTML = `좋아요 ${postData.likes}개`;\n  //내용\n  const post_content = postEl.querySelector(\".post_content .content\");\n  post_content.querySelector(\".user_name\").innerHTML = postData.user.name;\n  post_content.querySelector(\".text\").innerHTML = postData.content;\n  //댓글\n  const post_comment = postEl.querySelector(\".post_comments\");\n  postData.comments.map((comment) => {\n    const comment_wrapper = document.createElement(\"div\");\n    comment_wrapper.classList.add(\"comment\");\n    const comment_user_name = document.createElement(\"b\");\n    comment_user_name.classList.add(\"user_name\");\n    comment_user_name.innerHTML = comment.name;\n    const comment_content = document.createElement(\"span\");\n    comment_content.classList.add(\"content\");\n    comment_content.innerHTML = comment.content;\n    comment_wrapper.appendChild(comment_user_name);\n    comment_wrapper.appendChild(comment_content);\n    post_comment.appendChild(comment_wrapper);\n  });\n\n  document.querySelector(\"#post .post_list\").appendChild(postEl);\n};\n\n\n//# sourceURL=webpack:///./src/components/post.js?");

/***/ }),

/***/ "./src/components/story.js":
/*!*********************************!*\
  !*** ./src/components/story.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const storyEl = document.querySelector(\"#story .story\");\n\nclass StoryItem {\n  constructor(user_name, user_profile) {\n    this.name = user_name;\n    this.profile = user_profile;\n  }\n\n  mountDOM() {\n    const storyWrapper = document.createElement(\"div\");\n    storyWrapper.classList.add(\"story_item\");\n    const storyProfile = document.createElement(\"img\");\n    storyProfile.classList.add(\"picture\");\n    storyProfile.src = this.profile;\n    storyProfile.alt = \"user_profile\";\n    const storyUsername = document.createElement(\"span\");\n    storyUsername.classList.add(\"name\");\n    storyUsername.innerHTML = this.name;\n    storyWrapper.appendChild(storyProfile);\n    storyWrapper.appendChild(storyUsername);\n    storyEl.appendChild(storyWrapper);\n  }\n}\n\nmodule.exports = StoryItem;\n\n\n//# sourceURL=webpack:///./src/components/story.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const StoryItem = __webpack_require__(/*! ./components/story */ \"./src/components/story.js\");\nconst connectPostDOM = __webpack_require__(/*! ./components/post */ \"./src/components/post.js\");\n\nconst post = {\n  postData: [\n    {\n      user: {\n        name: \"developer.frontend\",\n        profile: \"../src/images/profile_pic.jpg\",\n      },\n      likes: 2225,\n      picture: \"../src/images/post_pic.jpeg\",\n      content:\n        \"미안하다 이거 보여주려고 어그로끌었다.. 나루토 사스케 싸움수준 ㄹㅇ실화냐? 진짜 세계관최강자들의 싸움이다.. 그찐따같던 나루토가 맞나? 진짜 나루토는 전설이다..진짜옛날에 맨날나루토봘는데 왕같은존재인 호카게 되서 세계최강 전설적인 영웅이된나루토보면 진짜내가다 감격스럽고 나루토 노래부터 명장면까지 가슴울리는장면들이 뇌리에 스치면서 가슴이 웅장해진다.. 그리고 극장판 에 카카시앞에 운석날라오는 거대한 걸 사스케가 갑자기 순식간에 나타나서 부숴버리곤 개간지나게 나루토가 없다면 마을을 지킬 자는 나밖에 없다 라며 바람처럼 사라진장면은 진짜 나루토처음부터 본사람이면 안울수가없더라 진짜 너무 감격스럽고 보루토를 최근에 알았는데 미안하다.. 지금20화보는데 진짜 나루토세대나와서 너무 감격스럽고 모두어엿하게 큰거보니 내가 다 뭔가 알수없는 추억이라해야되나 그런감정이 이상하게 얽혀있다.. 시노는 말이많아진거같다 좋은선생이고..그리고 보루토왜욕하냐 귀여운데 나루토를보는것같다 성격도 닮았어 그리고버루토에 나루토사스케 둘이싸워도 이기는 신같은존재 나온다는게 사실임?? 그리고인터닛에 쳐봣는디 이거 ㄹㅇㄹㅇ 진짜팩트냐?? 저적이 보루토에 나오는 신급괴물임?ㅡ 나루토사스케 합체한거봐라 진짜 ㅆㅂ 이거보고 개충격먹어가지고 와 소리 저절로 나오더라 ;; 진짜 저건 개오지는데.. 저게 ㄹㅇ이면 진짜 꼭봐야돼 진짜 세계도 파괴시키는거아니야 .. 와 진짜 나루토사스케가 저렇게 되다니 진짜 눈물나려고했다.. 버루토그라서 계속보는중인데 저거 ㄹㅇ이냐..? 하.. ㅆㅂ 사스케 보고싶다..  진짜언제 이렇게 신급 최강들이 되었을까 옛날생각나고 나 중딩때생각나고 뭔가 슬프기도하고 좋기도하고 감격도하고 여러가지감정이 복잡하네.. 아무튼 나루토는 진짜 애니중최거명작임..\",\n      comments: [\n        {\n          name: \"JKCho\",\n          content: \"와 정말 멋져요\",\n        },\n        {\n          name: \"Song\",\n          content: \"Wln\",\n        },\n      ],\n    },\n\n    {\n      user: {\n        name: \"JK Cho\",\n        profile: \"../src/images/profile_pic2.jpg\",\n      },\n      likes: 213,\n      picture: \"../src/images/post_pic2.jpeg\",\n      content: \"어이, 그 앞은 지옥이다.\",\n      comments: [\n        {\n          name: \"Song\",\n          content: \"Wln\",\n        },\n      ],\n    },\n  ],\n};\n\nconst story = {\n  storyData: [\n    {\n      user: {\n        name: \"JK Cho\",\n        profile: \"../src/images/profile_pic2.jpg\",\n      },\n    },\n    {\n      user: {\n        name: \"developer.frontend\",\n        profile: \"../src/images/profile_pic.jpg\",\n      },\n    },\n    {\n      user: {\n        name: \"JK Cho\",\n        profile: \"../src/images/profile_pic2.jpg\",\n      },\n    },\n    {\n      user: {\n        name: \"developer.frontend\",\n        profile: \"../src/images/profile_pic.jpg\",\n      },\n    },\n    {\n      user: {\n        name: \"JK Cho\",\n        profile: \"../src/images/profile_pic2.jpg\",\n      },\n    },\n    {\n      user: {\n        name: \"developer.frontend\",\n        profile: \"../src/images/profile_pic.jpg\",\n      },\n    },\n    {\n      user: {\n        name: \"JK Cho\",\n        profile: \"../src/images/profile_pic2.jpg\",\n      },\n    },\n    {\n      user: {\n        name: \"developer.frontend\",\n        profile: \"../src/images/profile_pic.jpg\",\n      },\n    },\n    {\n      user: {\n        name: \"JK Cho\",\n        profile: \"../src/images/profile_pic2.jpg\",\n      },\n    },\n    {\n      user: {\n        name: \"developer.frontend\",\n        profile: \"../src/images/profile_pic.jpg\",\n      },\n    },\n  ],\n};\n\nconst initiate = () => {\n  story.storyData.map((storyData) => {\n    const storyItem = new StoryItem(\n      storyData.user.name,\n      storyData.user.profile\n    );\n    storyItem.mountDOM();\n  });\n\n  post.postData.map((postData) => {\n    connectPostDOM(postData);\n  });\n};\n\ninitiate();\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });