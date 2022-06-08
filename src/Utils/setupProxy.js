const {createProxyMiddleware} = require("http-proxy-middleware");

module.exports = app => {
	app.use(
		createProxyMiddleware("/api/v2/list_movies.json?", {
			target: "https://yts.torrentbay.to/",
			changeOrigin: true,
		}),
	);
};
