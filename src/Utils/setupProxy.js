
const proxy = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(proxy('/api/v2', {
        target: 'https://yts.torrentbay.to',
        logLevel: 'debug',
        changeOrigin: true
    }));
};