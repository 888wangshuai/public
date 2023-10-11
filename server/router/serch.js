// 导入读取文件模块
const fs = require('fs')
// 首页数据渲染模块
function serchGoods(obj, res) {
    let data = fs.readFileSync('json/serch.json')
    res.end(data)
}
module.exports = serchGoods