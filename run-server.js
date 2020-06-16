/**
 * DEVELOPMENT SERVER
 *
 * based on the solutions:
 * https://github.com/BrowserSync/browser-sync/issues/471
 */
const browserSync = require('browser-sync');
const { createProxyMiddleware } = require('http-proxy-middleware');

const internProxy = createProxyMiddleware('intern/api/v1', {target: 'http://localhost:8080'});
const publicProxy = createProxyMiddleware('public/api/v1', {target: 'http://localhost:8080'});

browserSync({
    server: {
        baseDir: "www",
        index: "index.html",
        port: 3000,
        middleware: [publicProxy, internProxy]
    }
});
