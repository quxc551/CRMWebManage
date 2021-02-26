module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://64.64.248.231:9015', //API服务器的地址
                changeOrigin: true,
                ws: true // websocket
            }
        }
    }
}
