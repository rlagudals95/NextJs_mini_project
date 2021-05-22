// 다이나믹 api
// 로그인 여부 판단

export default (req, res) => {
  res.statusCode == 200;
  res.json({ name: req.cookies.a_name });
};
