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
export default function Home() {
  const [list, setList] = useState([]);
  const [is_loading, setIsLoading] = useState(true);

  //환경변수에서 가져온 url
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  // const API_URL =
  //   "http://makeup-api.herokuapp.com/api/v1/products.json?brand=dior";

  function getData() {
    Axios.get(API_URL).then((res) => {
      console.log(res.data);
      setList(res.data);
      setIsLoading(false);
    });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Head>
        <title> HarveyShop</title>
        <meta name="descrpition" content="HarveyShop입니다"></meta>
      </Head>
      {is_loading && (
        <>
          <Dimmer active>
            <Loader content="Loading" />
          </Dimmer>

          <Image src="/images/wireframe/short-paragraph.png" />
        </>
      )}

      {!is_loading && (
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
      )}
    </div>
  );
}
