import Axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Item from "../../src/component/Item";
import { Dimmer, Loader, Image, Segment } from "semantic-ui-react";
import axios from "axios";
import Head from "next/head";

// item 하나하나의 상세보기
const Post = ({ item }) => {
  // const router = useRouter(); // 서버 사이드 렌더링을 하면 필요없다
  // const { id } = router.query;
  //const [item, setItem] = useState({});
  //API 아이템 ID에 따라 그에 맞는 API호출
  // const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  // function getData() {
  //   Axios.get(API_URL).then((res) => {
  //     console.log(res.data);
  //     setItem(res.data);
  //     setIsloading(false);
  //   });
  // }
  // useEffect(() => {
  //   if (id && id > 0) {
  //     getData();
  //   }
  // }, [id]);
  console.log("아이템 정보", item);

  const [is_loading, setIsloading] = useState(true);

  return (
    <>
      <Head>
        {/* 메타정보를 적어주는 것 같다 검색SEO 때문인가? */}
        <title>{item.title}</title>
        <meta name="description" content={item.description}></meta>
      </Head>
      {item && <Item item={item} />}
    </>
  );
  {
    /* {is_loading ? (// 로딩도 필요없다 바로 서버에서 정보를 받아오기 때문
        <div>
          <Dimmer active>
            <Loader content="Loading" />
          </Dimmer>

          <Image src="/images/wireframe/short-paragraph.png" />
        </div>
      ) : (
        <div>
          <Item item={item} />
        </div>
      )} */
  }
};
// 서버사이드 렌더링 구현 // 항상 최신상태 유지 // 요청 횟수가 늘어나 퍼포먼스가 떨어짐
export async function getServerSideProps(context) {
  //context 엔 params나 응답 쿼리 요청 등이 담겨서 온다
  const id = context.params.id;
  const apiUrl = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const res = await axios.get(apiUrl);
  const data = res.data;
  console.log("context", context);
  console.log("asdjkfbjkasdhfbkjldsahfkjhaskjldfhljk");
  //요 item을 위에 props로 넘겨주자
  return {
    props: {
      item: data,
    },
  };
}

export default Post;
