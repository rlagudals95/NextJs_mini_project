import { useEffect, useState } from "react";
import axios from "axios";
import { Router, useRouter } from "next/router";
import { Button } from "semantic-ui-react";

const Admin = () => {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState();

  //admin 버튼을 눌렀을때 실행되는 함수
  const checkLogin = () => {
    axios.get("/api/isLogin").then((res) => {
      if (res.status === 200 && res.data.name) {
        //로그인처리
        setIsLogin(true);
      } else {
        // 로그인 안됨
        router.push("/login");
      }
    });
  };

  //로그아웃 함수
  const logout = () => {
    axios.get("/api/logout").then((res) => {
      if (res.status === 200) {
        router.push("/");
      }
    });
  };

  useEffect(() => {
    checkLogin();
  }, []);

  return (
    <>
      admin
      {isLogin && <Button onClick={logout}>logout</Button>}
    </>
  );
};

export default Admin;
