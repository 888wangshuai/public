// 导入读取文件模块
const fs = require('fs')
// 首页数据渲染模块
function doRenderIndex(obj, res) {
    let data = fs.readFileSync('json/goods.json')
    // console.log(data);
    res.end(data)
}

module.exports = doRenderIndex