///////////////////////////////
import Axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";

import { Dimmer, Loader, Image, Segment } from "semantic-ui-react";
import { Divider, Header } from "semantic-ui-react";
import ItemList from "../src/component/ItemList";
import styles from "../styles/Home.module.css";

// 리액트의 index.html
// app.js는 전역에 설정해주는 것
// 요기는 메인 페이지 '/' app.js에 Component로 전송된다
export default function Home({ list }) {
  //아래에서 만든 정적 생성 데이터를 받자

  /* 정적생성으로 필요가 없어진 코드들
  // const [list, setList] = useState([]);
  // const [is_loading, setIsLoading] = useState(true);
  //환경변수에서 가져온 url
  // const API_URL = process.env.NEXT_PUBLIC_API_URL;
  // const API_URL =
  //   "http://makeup-api.herokuapp.com/api/v1/products.json?brand=dior";
  // function getData() {
  //   Axios.get(API_URL).then((res) => {
  //     console.log(res.data);
  //     setList(res.data);
  //     setIsLoading(false);
  //   });
  // } */

  // useEffect(() => {
  //   getData();
  // }, []);

  console.log("apiUrl", process.env.NEXT_PUBLIC_API_URL);

  return (
    <div>
      <Head>
        <title> HarveyShop</title>
        <meta name="descrpition" content="HarveyShop입니다"></meta>
      </Head>

      <>
        <Header as="h3" style={{ paddingTop: 40 }}>
          베스트 상품
        </Header>
        <Divider />
        <ItemList list={list.slice(0, 9)} />
        {/* 너무 많으니까 데이터를 자르자 */}
        <Header as="h3" style={{ paddingTop: 40 }}>
          신상품
        </Header>
        <Divider />
        <ItemList list={list.slice(9)} />
      </>
    </div>
  );
}

// 정적생성 pre-rendering

export async function getStaticProps() {
  //context 엔 params나 응답 쿼리 요청 등이 담겨서 온다
  // const id = context.params.id;

  //여긴 클라이언트가 아니기 때문에 NEXT_PUBLIC대신 다른 환경 변수를 선언해서 가져온다
  //apiUrl 환경변수를 인식을 못한다 왜일까..?
  const apiUrl = process.env.NEXT_PUBLIC_API_URL; // 왜 안가져 오는진 모르겠는데 그냥 url을 넣자 일단
  const res = await Axios.get(
    "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
  );
  const data = res.data;

  //요 item을 위에 props로 넘겨주자
  return {
    props: {
      list: data,
      name: process.env.name,
    },
  };
}
////////////////////////////////////////////////
// import Axios from "axios";
// import Head from "next/head";
// import { useEffect, useState } from "react";
// import { Divider, Header, Loader } from "semantic-ui-react";
// import ItemList from "../src/component/ItemList";
// import styles from "../styles/Home.module.css";

// export default function Home({ list }) {
//   console.log(process.env.name);
//   return (
//     <div>
//       <Head>
//         <title>HOME | 코딩앙마</title>
//         <meta name="description" content="코딩 앙마 홈입니다."></meta>
//       </Head>
//       <>
//         <Header as="h3" style={{ paddingTop: 40 }}>
//           베스트 상품
//         </Header>
//         <Divider />
//         <ItemList list={list.slice(0, 9)} />
//         <Header as="h3" style={{ paddingTop: 40 }}>
//           신상품
//         </Header>
//         <Divider />
//         <ItemList list={list.slice(9)} />
//       </>
//     </div>
//   );
// }

// export async function getStaticProps() {
//   const apiUrl = process.env.apiUrl;
//   // 환경변수에 설정해놓은 apiUrl이 안가져 와져서 이렇게 가져왔다..
//   const res = await Axios.get(
//     "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
//   );
//   const data = res.data;

//   return {
//     props: {
//       list: data,
//       name: process.env.name,
//     },
//   };
// }
