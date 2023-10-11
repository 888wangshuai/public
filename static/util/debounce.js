// input.oninput = debounce(fn, 1000)

/**
 * 
 * @param {传入一个执行函数} fn 
 * @param {传入等待时长} wait 
 * @returns 
 */
export function debounce(fn, wait) {
    let timeId = null
    return function () {
        clearTimeout(timeId)
        timeId = setTimeout(fn, wait)
    }
}
  
// function fn() {
//     if (input.value.length < 3) {
//         console.log(1);
//         span.innerHTML = '你输入的长度不够'
//     } else {
//         span.innerHTML = '√'
//     }
// }