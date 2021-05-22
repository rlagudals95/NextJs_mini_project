import { Menu } from "semantic-ui-react";
import Axios from "axios";
import { useRouter } from "next/router";

const Gnb = () => {
  const router = useRouter();
  console.log(router);
  let activeItem;
  //싱글페이지 어플리케이션 부드럽게 이동하는 것을 구현 하려면 router.push를 사용하자!
  if (router.pathname === "/") {
    activeItem = "home";
  } else if (router.pathname === "/about") {
    activeItem = "about";
  }

  const goLink = (e, data) => {
    // data는 <>안에 있는 name, active, onClick 을 의미하고
    //name은 home, about을 가르킨다
    if (data.name === "home") {
      router.push("/");
    } else if (data.name === "about") {
      router.push("/about");
    } else if (data.name === "admin") {
      router.push("/admin");
    }
  };

  return (
    <Menu inverted>
      <Menu.Item name="home" active={activeItem === "home"} onClick={goLink} />

      <Menu.Item
        name="about"
        active={activeItem === "about"}
        onClick={goLink}
      />
      <Menu.Item
        name="contact"
        active={activeItem === "contact"}
        onClick={goLink}
      />
      <Menu.Item
        name="admin"
        active={activeItem === "admin"}
        onClick={goLink}
      />
    </Menu>
  );
};

export default Gnb;
