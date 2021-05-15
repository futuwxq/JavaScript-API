// 需要实现的函数
// function repeat(func, times, wait) {
//     return function wrapper(...args) {
//         setTimeout(() => {
//             if (--times) wrapper.apply(this, args); // 时间到了  每次执行一次函数
//             func.apply(this, args); // 接受第二个参数
//         }, wait)
//     }
// }
// 使下面调用代码能正常工作
const repeatFunc = repeat(console.log, 4, 3000);
repeatFunc("helloworld"); //会输出4次 helloworld, 每次间隔3秒

function repeat(fn, time, wait) {
    return function carry(...arg) {
        fn.apply(this, arg)
        setTimeout(() => {
            if (--time) carry.apply(this, arg);
        }, wait)
    }
}