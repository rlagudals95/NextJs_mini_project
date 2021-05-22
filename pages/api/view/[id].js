// 다이나믹 API Route

export default (req, res) => {
  res.status(200).json({ id: req.query.id });
};

// id: req.query.id 검색창뒤의 id가 나온다
// 내가 요청한 id를 받아오는것
