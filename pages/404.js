import { Icon } from "semantic-ui-react";

//404.js란 파일을 만들면 자동으로 에러 페이지로 등록된다
export default function Error404() {
  return (
    <div style={{ padding: "200px 0", textAlign: "center", fontSize: 30 }}>
      <Icon name="warning circle" color="red" />
      404 : 페이지를 찾을 수 없습니다.
    </div>
  );
}
