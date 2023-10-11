const username = document.querySelector('[name="username"]')
const password = document.querySelector('[name="password"]')
const newPassword = document.querySelector('[name="newPassword"]')
const button = document.querySelector('button')
// 导入Ajax模块
import { Ajax } from "../util/Ajax.js"
// 判断账号 账号必须以小写字母开始3-6位

// debounce(fn2, 30)
button.addEventListener('click', () => {
    let obj = {
        username: username.value,
        password: password.value,
        newPassword: newPassword.value,
        op: "updata"
    };
    // 发送请求
    // 得到返回值根据返回值判断是否跳转到首页同时保存username,在首页显示
    // async调用 立即执行函数
    (async function () {
        let flag = await Ajax("POST", "http://127.0.0.1:8888", obj);
        if (flag === 'true') {
            alert('密码修改成功!')
            location.href = 'login.html'
        } else {
            alert('用户名或原密码错误!')
        }
    })()
})