// 传入三个参数 ，第一个是判断是get还是post请求，第二个是选中的目标  第三个是传入的账号和密码参数  
// 加了一个传入参数  是调用响应函数 
export function Ajax(method, url, obj) {
    // 运用 promise 管理函数，让我们在想用的时候就用
    return new Promise(function (reslove, reject) {
        // 1.创建Ajax对象
        let xhr = new XMLHttpRequest();
        // get 请求时，xhr.open里边传入 拼接的url？data,
        // post请求时，xhr.send()里边传入的是 data
        // 2.设置Ajax对象
        let data = new URLSearchParams(obj).toString();//动态生成 查询字符串
        if (method === "GET") {
            url += `?` + data;
        }
        xhr.open(method, url);
        // 3.发送请求
        if (method === "GET") {
            xhr.send();
        } else {
            xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhr.send(data);
        }
        // 4.接收并处理数据
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status >= 200 && xhr.status < 300) {
                //    fn(xhr.responseText);//传入的回调函数
                reslove(xhr.responseText);//让这个函数通行 
            }
        }
    })

}