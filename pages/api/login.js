export default (req, res) => {
  // res.statusCode = 200;
  // res.json({ name: null });
  if (req.method === "POST") {
    res.setHeader("Set-Cookie", "a_name=Mike;Max-Age=3600;HttpOnly,Secure");
    // setHeader의 헤더에 이름 a_name, 값은 Mike, 3600초 만료일을 가진 쿠키 생성
    res.statusCode = 200;
    res.json({ message: "ok" });
  }
};
