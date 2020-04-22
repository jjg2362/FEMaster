# Browserify

<hr />

![browserify - npm](https://raw.githubusercontent.com/browserify/browserify/HEAD/assets/logo.png)

### Browerify란?

과거에는 js파일의 크기가 작았고, 관리의 필요성이 크게 느껴지지 않았다. 그러나 최근 ES6의 업데이트를 통해 Javascript로 로직 구현이 편리해짐에 따라 js파일의 크기가 점점 커졌고, 이를 효율적으로 관리할 수 있는 무언가가 필요해졌다. 

Browerify는 Module Bundler다. 기존에 하나의 파일로 관리되었던 js파일들을 분할하면 이를 다시 합쳐 한 개의 js파일로 만들어내 브라우저가 이를 인식하게한다. 



### 왜 Browerify?

이렇게 분할된 js파일을 하나로 만들어내는 일을 해내는 Module Bundler가 더 있습니다. 매우 유명한 Webpack입니다. Webpack을 쓰지 않고 Browserify를 선택하여 이번 과제를 진행한 이유는 Webpack을 사용하기 이전 가장 간단하고, 기본에 충실한 기능을 갖추고 있는 Browerify를 사용하여 Module Bundler에 대한 감각을 기르기 위해서 입니다.



### Webpack vs Browerfy

<table>
  <thead>
  	<tr>
    	<th>분류</th>
      <th>Webpack</th>
      <th>Browserify</th>
    </tr>
  </thead>
  <tbody>
  	<tr>
    	<td>속도</td>
      <td>상대적으로 느림</td>
    	<td>상대적으로 빠름</td>
    </tr>
    <tr>
    	<td>지원범위</td>
      <td>자바스크립트</td>
    	<td>자바스크립트, CSS 등</td>
    </tr>
    <tr>
    	<td>설정방식</td>
      <td>CLI</td>
    	<td>CLI, 설정파일(webpack.config.js)</td>
    </tr>
  </tbody>
</table>

