// 导入读文件模块
const fs = require('fs')
function getGoods(obj, res) {
    let data = fs.readFileSync('json/goodscar.json')
    console.log(data);
    res.end(data)
}
// 导出
module.exports = getGoods