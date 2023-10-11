const box = document.querySelector(".box");
const All = document.querySelector('[name="qu"]');
const dan = document.getElementsByName("xuan");
const zj = document.querySelector('.content-floor .zj')
const xj = document.querySelector('.content-floor .xj')
// 加入购物车
const content = document.querySelector(".content");
box.onclick = (e) => {
    // 获取操作对象
    let trg = e.target || e.srcElement;
    // 1.判断点击的是不是加入购物车按钮
    if (trg.innerHTML == "加入购物车") {
        // 获取当前按钮父元素下的所有子节点
        let list = trg.parentNode.children;
        // 图片路径
        let url = list[0].getAttribute("src");
        // 商品名称
        let title = list[1].innerHTML;
        // 商品价格
        let price = list[2].lastElementChild.innerHTML;
        // 创建ul
        let ul = document.createElement("ul");
        ul.innerHTML = `
      <li>
          <input type="checkbox" name="xuan" />
        </li>
        <li><img src="${url}" alt="" /></li>
        <li>
          <button>-</button><input type="text" value="1" /><button>+</button>
        </li>
        <li>￥<span>${price}</span></li>
        <li>${title}</li>
        <li>￥<span>${price}</span></li>
        <li><button>删除</button></li>
      `;
        content.append(ul);
        xue()
        total1()
        total2()
    }

    // 2. 加法按钮
    if (trg.innerHTML == "+") {
        // 获取输入框的值
        let mm = trg.previousElementSibling.value
        // console.log(mm);
        mm++;
        trg.previousElementSibling.value = mm;
        // 获取当前按钮所对应的商品ul中所有的子元素节点li
        let lis = trg.parentNode.parentNode.children;
        // console.log(lis);
        // 获取单价
        var price = lis[3].lastElementChild.innerHTML
        // console.log(price);
        // 计算小计
        let xj = price * mm;
        lis[5].lastElementChild.innerHTML = xj.toFixed(2);
        total1()
        total2()
    }

    //3.减法按钮
    if (trg.innerHTML == '-') {
        let mm = trg.nextElementSibling.value
        // console.log(mm);
        if (mm <= 1) {
            mm = 1
        } else {
            mm--;
        }
        trg.nextElementSibling.value = mm;
        // 获取当前按钮所对应的商品ul中所有的子元素节点li
        let lis = trg.parentNode.parentNode.children;
        // console.log(lis);
        // 获取单价
        var price = lis[3].lastElementChild.innerHTML
        // console.log(price);
        // 计算小计
        let xj = price * mm;
        lis[5].lastElementChild.innerHTML = xj.toFixed(2);
        total1()
        total2()
    }

    //4.删除商品
    if (trg.innerHTML == '删除') {
        trg.parentNode.parentNode.remove()
        xue()
        total1()
        total2()
        //  console.log( trg.parentNode.parentNode);
    }
    //4.删除选中商品
    if (trg.innerHTML == '删除选中商品') {
        let uls = content.children
        for (let i = 0; i < uls.length; i++) {
            let xz = uls[i].children[0].firstElementChild
            if (xz.checked) {
                uls[i].remove()
                i--
            }
        }
        xue()
        total1()
        total2()
    }
    //全选框案例
    if (trg.name == 'qu') {
        for (let i = 0; i < dan.length; i++) {
            dan[i].checked = trg.checked
        }
        for (let i = 0; i < dan.length; i++) {
            dan[i].addEventListener("click", () => {
                trg.checked = document.querySelectorAll('[name="xuan"]:checked').length == dan.length;

            });

        }
        total1()
        total2()
    };
    //单选案例
    if (trg.name == 'xuan') {
        total1()
        total2()
    }
}
// 封装全新函数
function xue() {
    //定义变量，统计被选中的次数
    let num = 0
    //遍历出每个选中框对象
    for (let i = 0; i < dan.length; i++) {
        //判断当前遍历出来的选中框是否被选中
        if (dan[i].checked) {
            num++
        }
    }
    // console.log(num);
    //判断当前被选中的次数是否等于商品的个数
    if (num == dan.length && num != 0) {
        All.checked = true
    } else {
        All.checked = false
    }
    // console.log(dan);
    // console.log(111);
}
// 封装计算总计函数
function total1() {
    // 计算总价格
    let num1 = 0
    // 获取所有的商品
    let uls = content.children
    for (let i = 0; i < uls.length; i++) {
        lis = uls[i].children
        // console.log(lis);
        const xj = lis[5].lastElementChild.innerHTML
        num1 += parseFloat(xj)
        zj.innerHTML = num1
    }
}
// 分装计算已选商品总计
function total2() {
    // 计算总价格
    let num2 = 0
    let uls = content.children
    for (let i = 0; i < uls.length; i++) {
        let dzk = uls[i].children[0].lastElementChild
        console.log(dzk.checked);
        if (dzk.checked) {
            let jg = uls[i].children[5].lastElementChild.innerHTML
            console.log(jg);
            num2 += parseFloat(jg)
        }
    }
    xj.innerHTML = num2
}
total1()
total2()