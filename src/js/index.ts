import '../css/main.scss'
// base64转 Blob
function dataURLtoBlob(dataurl) {
    let arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], { type: mime });
}

// let button = document.querySelector('button')
// button.onclick = () => {
//     let input = document.querySelector('input')
//     console.log(input.files[0])
// }



// 函数防抖
//效果：如果短时间内大量触发同一事件，只会执行一次函数。

// 函数防抖关注一定时间连续触发的事件只在最后执行一次，而函数节流侧重于一段时间内只执行一次。
function debounce(fn, delay) {
    let timer; // 维护一个 timer
    return function () {
        let _this = this; // 取debounce执行作用域的this
        let args = arguments;
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(function () {
            fn.apply(_this, args); // 用apply指向调用debounce的对象，相当于_this.fn(args);
        }, delay);
    };
}
// 函数节流
function throttle(fn, delay) {
    let timer;
    return function () {
        let _this = this;
        let args = arguments;
        if (timer) {
            return;
        }
        timer = setTimeout(function () {
            fn.apply(_this, args);
            timer = null; // 在delay后执行完fn之后清空timer，此时timer为假，throttle触发可以进入计时器
        }, delay)
    }
}