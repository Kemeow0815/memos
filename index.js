require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
// 设置环境变量
const memosHost = process.env.MEMOS_HOST || "https://memos.ee/";
const memosLimit = process.env.MEMOS_LIMIT || "20";
const memosUserId = process.env.MEMOS_USER_ID || "1";
const memosApiVersion = process.env.MEMOS_API_VERSION || "auto"; // "auto", "0.26.0+", or "legacy"
const memosTittle = process.env.MEMOS_TITTLE || "Memos";
const memosHead = process.env.MEMOS_HEAD || "";
const memosMenu = process.env.MEMOS_MENU || "";
const memosFooter = process.env.MEMOS_FOOTER || "";
const memosIcon = process.env.MEMOS_ICON || "";
// 静态文件服务
app.use(express.static(path.join(__dirname, "public")));
// 动态生成 HTML
app.get("/", (req, res) => {
  const html = `
<!DOCTYPE html>
<html lang="zh">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="referrer" content="no-referrer">
	<link rel="icon" href="${memosIcon}" type="image/*" />
	<link href="assets/css/style.css" rel="stylesheet" type="text/css">
	<link href="assets/css/APlayer.min.css" rel="stylesheet" type="text/css">
	<link href="assets/css/highlight.github.min.css" rel="stylesheet" type="text/css">
	<title>${memosTittle}</title>  
    ${memosHead}
</head>
<body>
	<header>
		<div class="menu">
			<div class="title">主页</div>
			<div class="pages">
					${memosMenu}
			</div>
		</div>	
		<div class='theme-toggle'>🌓</div>
	</header>
	<section id="main" class="container">
		<h3>${memosTittle}</h3>
		<blockquote class="info">
			<p>Je <del>memos</del>, donc je suis - <em>René Descartes fans</em></p>
		</blockquote>
		<div class="total">Total <span id="total">0</span> Memos 🎉</div>
		<div id="memos" class="memos">
		</div>
	</section>
	<footer class="markdown-body footer">
		<p>
        Copyright @
			<script>
				document.write(new Date().getFullYear())
			</script>
            ${memosTittle} All Rights Reserved.
		${memosFooter}
        </p>
	</footer>
	<script type="text/javascript">
		var memos = {
			host: '${memosHost}',  // Your Memos instance.
			limit: '${memosLimit}',	// Pagination to show.
			creatorId: '${memosUserId}',  // The old instance is 101, and the new instance is 1.
			apiVersion: '${memosApiVersion}',  // "auto", "0.26.0+", or "legacy"
			domId: '#memos',	// Default #memos.
                       }
	</script>
	<script type="text/javascript" src="assets/js/marked.umd.min.js?v=14.0.0"></script>
	<script type="text/javascript" src="assets/js/view-image.min.js"></script>
	<script type="text/javascript" src="assets/js/APlayer.min.js"></script>
	<script type="text/javascript" src="assets/js/Meting.min.js"></script>
	<script type="text/javascript" src="assets/js/main.js"></script>
	<script type="text/javascript" src="assets/js/custom.js"></script>
</body>
</html>
    `;
  res.send(html);
});
module.exports = app;
