// 다이나믹 api
// 로그인 api

export default (req, res) => {
  // res.status(200).json({ name: null });

  res.setHeader("Set-Cookie", "a_name=HMK;Max-Age=0;HttpOnly,Secure");
  // setHeader의 쿠키 토큰 시간은 0으로 지정해서 로그아웃!
  res.statusCode = 200;
  res.json({ message: "ok" });
};
