// 导入读取文件模块
const fs = require('fs')
function doLogin(obj, res) {
    // 读取文件获取用户名和密码
    let data = fs.readFileSync('json/user.json')
    // 将读到的值转换为对象
    let arr = JSON.parse(data)
    // 设置标志位
    let flage = false
    // 判断输入的用户名和密码是否在文件中
    for (const temp of arr) {
        if (obj.username === temp.username && obj.password === temp.password) {
            // 如果在将标志改为true
            flage = true
        }
    }
    res.end(`${flage}`)
}
module.exports = doLogin