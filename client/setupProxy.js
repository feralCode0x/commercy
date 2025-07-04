const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://100.115.92.206:3000/api',
      changeOrigin: true,
    })
  );
};
