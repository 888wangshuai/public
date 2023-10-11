const goods1 = document.querySelector('.goods1')
const usname = document.querySelector('.username')
const box = document.querySelector('.box')
const serchlick = document.querySelector('.serchlick')
import { Ajax } from '../util/Ajax.js';
// 发送请求
let obj = {
    op: 'renderindex'
};
(async function () {
    let str = await Ajax("POST", "http://127.0.0.1:8888", obj);
    let obj1 = JSON.parse(str)
    // console.log(obj1);
    for (const key of obj1) {
        // console.log(key);
        goods1.innerHTML += `
        <li>
        <a href="#">
            <img src=${key.src}>
            <p class='ellipsis-2'>
                <span>自营</span>
                ${key.title}
                </p>
        </a>
        <p><i>￥${key.price}元</i> <button id='btn1'>+加入购物车</button></p>
        
    </li>
        `
    }
})()
// 设置用户名
let username = sessionStorage.getItem('name')
if (username == null) {
    usname.innerHTML = `
    <a href="./login.html">你好请登录</a>
    <a href="./register.html" class="active">免费注册</a>
    `
} else {
    usname.innerHTML = `欢迎${username}`
    usname.classList.add('active')
}
// 模糊查询设置
let obj2 = {
    op: 'serch'
};
(async function () {
    let str = await Ajax('GET', 'http://127.0.0.1:8888', obj2)
    let arr = JSON.parse(str)
    serchlick.addEventListener('input', () => {
        box.innerHTML = ''
        for (const temp of arr) {
            if (temp.indexOf(serchlick.value) != -1) {
                box.innerHTML += `<p>${temp}</p>`
                box.style.display = 'block'
            }
        }
    })
})()

box.addEventListener('mouseover', (e) => {
    serchlick.value = e.target.innerHTML
})
box.addEventListener('mouseleave', () => {
    box.style.display = 'none'
})

// 获取商店加入购物车