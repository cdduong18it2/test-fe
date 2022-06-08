const {createProxyMiddleware} = require("http-proxy-middleware");

module.exports = app => {
	app.use(
		createProxyMiddleware("", {
			target: "https://yts.torrentbay.to/"
		}),
	);
};
