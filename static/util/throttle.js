window.onscroll = throttle(fn, 3000)
/**
 * 
 * @param {传入一个函数} fn 
 * @param {传入等待时间} w 
 * @returns 
 */
export function throttle(fn, w) {
    let flag = true
    return function () {
        if (flag) {
            fn()
            flag = false
            setTimeout(() => {
                flag = true
            }, w)
        }
    }
}

function fn() {
    console.log('动');
}