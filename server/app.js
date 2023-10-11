// 导入服务器模块
const http = require('http')
// 导入URL模块处理GET请求参数
const url = require('url')
// 导入qs模块处理POST请求参数
const qs = require('querystring')
// 导入路由模块
const router = require('./router/index')
http.createServer((req, res) => {
    // 解决跨域
    res.setHeader('Access-Control-Allow-Origin', '*'); // 或者指定允许的域名
    // 处理中文问题
    res.setHeader('Content-Type', 'text/html;charset=utf8')
    // 处理GET请求
    let obj = null
    if (req.method === 'GET') {
        // 拿到GET请求参数
        obj = url.parse(req.url, true).query
        // console.log(obj);
        router[obj.op](obj, res)
        return
    } else {
        // 处理POST请求
        // 获取post请求参数
        let str = ''
        // 获取参数
        req.on('data', (ch) => {
            str += ch
        })
        // 检测参数获取完毕打印
        req.on('end', () => {
            obj = qs.parse(str)
            router[obj.op](obj, res)
        })
    }
}).listen(8888, () => {
    console.log('启动成功! http://localhost:8888');
})