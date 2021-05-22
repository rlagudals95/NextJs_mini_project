import Axios from "axios";
import { Router, useRouter } from "next/router";
import { Button, Form } from "semantic-ui-react";

const Login = () => {
  const router = useRouter();

  const login = () => {
    Axios.post("/api/login").then((res) => {
      if (res.status === 200) {
        // 로그인성공
        router.push("admin");
      } else {
        // 로그인 실패
        window.alert("로그인 실패");
      }
    });
  };

  return (
    <div style={{ padding: "100px 0", textAlign: "center" }}>
      <Form>
        <Form.Field inline>
          <input placeholder="ID" />
        </Form.Field>
        <Form.Field inline>
          <input type="password" placeholder="Password" />
        </Form.Field>
        <Button color="blue" onClick={login}>
          Login
        </Button>
      </Form>
    </div>
  );
};

export default Login;
