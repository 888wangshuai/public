// 导入读取文件模块
const fs = require('fs')
function doRegister(obj, res) {
    // 读文件判断文件中是否存在注册的用户名
    let data = fs.readFileSync('json/user.json')
    let arr = JSON.parse(data)
    let flag = true
    // 判断输入的用户名和密码是否在文件中
    for (const temp of arr) {
        if (obj.username === temp.username) {
            flag = false
            break
        }
    }
    if (flag) {
        // 将伪对象转换为对象
        obj = JSON.parse(JSON.stringify(obj))
        console.log(obj);
        delete obj.op
        arr.push(obj)
        fs.writeFileSync('json/user.json', JSON.stringify(arr))
    }
    res.end(`${flag}`)

}

module.exports = doRegister