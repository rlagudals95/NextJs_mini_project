import "../styles/globals.css";
import "semantic-ui-css/semantic.min.css";
import Footer from "../src/component/Footer";
import Top from "../src/component/Top";

//Component는 현재 페이지를 의미 페이지 전환시 Component가 변경되는것
//pageProps데이터 패칭 메써드를 통해 미리가져온 초기 객체 이것을 사용하지 않는 다면 빈객체가 전달된다

function MyApp({ Component, pageProps }) {
  console.log("???????", Component); // 컴포넌트는 페이지가 옮겨질 때마다 변한다
  return (
    <div style={{ width: 1000, margin: "0 auto" }}>
      <Top />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;

// 페이지 전환시 레이이아웃 유지 가능
// 페이지 전환시 상태값 유지
// componentDidCatch를 이용해 커스텀 에러 핸들링을 할 수 있습니다
// 추가적인 데이터를 페이지로 주입시켜주는게 가능
// 글로벌 Css를 이곳에 선언
