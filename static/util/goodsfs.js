// 分装计算已选商品总计
function total2() {
    // 计算总价格
    let num2 = 0
    let uls = content.children
    for (let i = 0; i < uls.length; i++) {
        let dzk = uls[i].children[0].lastElementChild
        if (dzk.checked) {
            let jg = uls[i].children[5].lastElementChild.innerHTML
            num2 += parseFloat(jg)
        }
    }
    console.log(num2);
    xj.innerHTML = num2
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
//封装全新函数
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

}
