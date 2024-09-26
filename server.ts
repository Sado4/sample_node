const http = require("http");
const PORT = 8999;
const html = require("fs").readFileSync("index.html");

// webサーバーを作成
const server = http.createServer((req, res) => {
  // ブラウザからアクセスがきたときの処理
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write(html); // レスポンスの内容
  res.end(); // レスポンスの終了
});

// サーバーを起動
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
