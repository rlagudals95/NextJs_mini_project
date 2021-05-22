import Axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Item from "../../src/component/Item";
import { Dimmer, Loader, Image, Segment } from "semantic-ui-react";
import axios from "axios";
import Head from "next/head";

// item 하나하나의 상세보기
const Post = ({ item, name }) => {
  return (
    <>
      {item && (
        <>
          <Head>
            <title>{item.name}</title>
            <meta name="description" content={item.description}></meta>
          </Head>
          {name} 환경 입니다.
          <Item item={item} />
        </>
      )}
    </>
  );
};

export default Post;
// 상세 페이지도 정적 생성으로 만들어 놓기.. 많은 페이지가 있는 경우 비효율적 이지만
// 적은 페이지라면 미리 만들어놓는 것도 좋다!

export async function getStaticPaths() {
  return {
    paths: [
      //알고 있는 게시물 몇개만 만들어보자
      //이렇게 만들어주고 yarn build를 다시해야 정적생성이 완료된다
      { params: { id: "495" } },
      { params: { id: "488" } },
      { params: { id: "477" } },
    ],
    fallback: true, //false 해놓으면 위에서 미리만든 정적 페이지 외엔 404에러가 뜬다
  };
}

export async function getStaticProps(context) {
  //context 엔 params나 응답 쿼리 요청 등이 담겨서 온다
  const id = context.params.id;
  const apiUrl = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const res = await Axios.get(apiUrl);
  const data = res.data;

  //요 item을 위에 props로 넘겨주자
  return {
    props: {
      item: data,
      name: process.env.name,
    },
  };
}
