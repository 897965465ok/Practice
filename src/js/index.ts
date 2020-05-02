import '../css/main.scss'
// base64转 Blob
// function dataURLtoBlob(dataurl) {
//     var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
//       bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
//     while (n--) {
//       u8arr[n] = bstr.charCodeAt(n);
//     }
//     return new Blob([u8arr], { type: mime });
//   }

// let button = document.querySelector('button')
// button.onclick = () => {
//     let input = document.querySelector('input')
//     console.log(input.files[0])
// }

// 函数防抖
//效果：如果短时间内大量触发同一事件，只会执行一次函数。
