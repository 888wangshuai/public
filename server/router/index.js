// 导入登录模块
const doLogin = require('./login.js')
// 导入注册
const doRegister = require('./register.js')
// 导入渲染首页模块
const doRenderIndex = require('./renderindex.js')
// 修改密码
const doUpdatapassword = require('./Updatapassword.js')
const doserchGoods = require('./serch.js')
const getGoods = require('./goodscar.js')
let router = {
    'login': doLogin,
    'register': doRegister,
    'renderindex': doRenderIndex,
    'updata': doUpdatapassword,
    'serch': doserchGoods,
    'goods': getGoods
}
module.exports = router