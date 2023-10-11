const fs = require('fs')
function doUpdatapassword(obj, res) {
    // 判断输入的用户名密码是否正确,若正确将原密码改为新密码然后写入文件中
    let data = fs.readFileSync('json/user.json')
    // 将独到的字符串转为对象
    let arr = JSON.parse(data)
    // 设置标志位判断是否修改成功
    let flage = false
    for (const temp of arr) {
        if (obj.username === temp.username && obj.password === temp.password) {
            console.log(obj.username === temp.username && obj.password === temp.password);
            temp.password = obj.newPassword
            flage = true
        }
    }
    fs.writeFileSync('json/user.json', JSON.stringify(arr))
    res.end(`${flage}`)
}
module.exports = doUpdatapassword