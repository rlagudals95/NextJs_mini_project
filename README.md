# next.js로 만들어본 미니프로젝트 HarveyShop

## next.js를 공부하는 이유

리액트는 ui를 만들기 위한 라이브러리라고 공식문서에서 설명한다

결국 무언가를 완성도 있게 만드려면 React만으로는 부족하고
여러가지 라이브러리들을 조합해야한다!

### 그 중에 NEXT.js는 SSR이라고 불리는 서버사이드 렌더링을 기본으로 사용하고
### 파일 시스템 기반의 라우팅 기능을 제공합니다

리액트는 스크립트로 화면을 그리기 때문에
새로고침을 하면 화면이 깜빡 거립니다

이것은 실제로 빈 html이 먼저 보여지고 스크립트가 화면을 렌더링하는 것입니다
<br/>
****************************
<br/>
### SSR은 깜빡임이 없고 화면 렌더링 속도가 빨라 리액트의 이러한 단점을 보완해 줄 수 있습니다

이러한 단점을 보완하기 위해 사용자가 처음 들어왔을 때의 페이지는 서버에서 받아 렌더링하고(비어있는 html파일을 받지 않는다.),

파일 기반의 라우팅은 아주 간단히 페이지를 추가할 수 있습니다

국내의 검색봇들은 html을 기반으로 요소를 찾기 때문에
CSR은 처음에 빈 html을 내려주기 때문에 검색노출? 에서 불리 할 수 있습니다
검색봇이 제대로 동작하기 힘들다!

그렇다면? 첫페이지는 서버에서 받아서 렌더링하고
그 뒤에 발생하는 라우팅은 클라이언트 사이드 렌더링으로 하면어떨까?
<br/>
*************************
<br/>
### CSR과 SSR 각각의 장점을 합쳤다

리액트는 처음에 빈 html을 보여주고 그 다음 스크립트로 제렌더링 되는 방식으로 알고 있다
실제로는 찰나의 순간? 빈화면이 보여지고 그 다음 다시 렌더링이 된다

그러나 첫 페이지를 서버에서 받는다는 것은?
내용이 모두 채워져 있는 html을 처음부터 받는다는 뜻!
프론트 측에선 DOM을 그대로 그려주기만 하면된다!
<br/>
## 자바스크립트를 DOM으로 변환하는 과정이 없다!

그렇게 되면 검색엔진 최적화(SEO)에서 좀더 좋은 점수?를 받게되고
사용자가 화면을 보는 타이밍 또한 더 빨라진다! 페이지 깜빡임 사라짐!

## 쓰면서 알게된 NEXT.JS의 장점

+ CSR과 SSR의 장점을 합친 NEXT.JS
 https://velog.io/@dbfudgudals/NEXT.JS%EB%9E%80

+ pre-render
https://velog.io/@dbfudgudals/pre-render

+ 다이나믹 API를 이용한 간단한 로그인 로그아웃 기능구현
https://velog.io/@dbfudgudals


************************
## 구동사진

![image](https://user-images.githubusercontent.com/76252074/119135560-8c255c80-ba79-11eb-935f-14694c5ca298.png)
![image](https://user-images.githubusercontent.com/76252074/119135579-947d9780-ba79-11eb-862d-68f5c1f0c47b.png)


