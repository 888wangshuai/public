const username = document.querySelector('[name="username"]')
const password = document.querySelector('[name="password"]')
const button = document.querySelector('button')
const sp1 = document.querySelector('.sp1')
const sp2 = document.querySelector('.sp2')
// 导入Ajax模块
import { Ajax } from "../util/Ajax.js"
// 判断账号 账号必须以小写字母开始3-6位

// 用户验证函数
function fn1() {
    username.onchange = () => {
        const regUsernam = /^[a-z]\d{3,5}/
        if (!regUsernam.test(username.value)) {
            sp1.style.display = 'block'
        } else {
            sp1.innerHTML = '√'
        }
    }

}
// debounce(fn1, 30)
// 密码验证函数
function fn2() {
    const regPassword = /^[a-z](A-Z|\d){5,8}/
    password.onchange = () => {
        if (!regPassword.test(password.value)) {
            sp2.style.display = 'block'
        } else {
            sp2.innerHTML = '√'
        }
    }

}
fn2()
fn1()
// debounce(fn2, 30)
button.addEventListener('click', () => {
    let obj = {
        username: username.value,
        password: password.value,
        op: "register"
    };
    // 发送请求
    // 得到返回值根据返回值判断是否跳转到首页同时保存username,在首页显示
    // async调用 立即执行函数
    (async function () {
        let flag = await Ajax("POST", "http://127.0.0.1:8888", obj);
        console.log(flag);
        if (flag === 'true') {
            alert('注册成功!')
            location.href = 'login.html'
        } else {
            alert('用户名已经存在!')
        }
    })()
})