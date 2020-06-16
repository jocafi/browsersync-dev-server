/**
 * DEVELOPMENT SERVER
 *
 * based on the solutions:
 * https://github.com/BrowserSync/browser-sync/issues/471
 */
var browserSync = require('browser-sync');
var proxyMiddleware = require('http-proxy-middleware');

var internProxy = proxyMiddleware('/intern/api/v1', {target: 'http://localhost:8080'});
var publicProxy = proxyMiddleware('/public/api/v1', {target: 'http://localhost:8080'});

browserSync({
    server: {
        baseDir: "www",
        index: "index.html",
        port: 3000,
        middleware: [publicProxy, internProxy]
    }
});