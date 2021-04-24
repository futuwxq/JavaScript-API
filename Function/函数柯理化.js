/**
 * 通过函数调用函数 实现多次接受参数 最后统一处理
 */

// function add(a) {
//     return function(b) {
//         return function(c) {
//             return a + b + c
//         }
//     }
// }
// console.log(add(1)(2)(3)) //  6
// 参数固定
// function add(...arg) {
//     arg.reduce((a, b) => a + b)
// }
// const curry = (fn) => {
//     let arg = [];
//     return function temp(...newArg) {
//         if (newArg.length) {
//             //...agr是新参数
//             arg = [...arg, ...newArg]
//             return temp;
//         } else { //没有参数的时候
//             let val = fn.apply(this, arg);
//             arg = [];
//             return val;
//         }
//     }
// }
// let addCurry = curry(add)
// console.log(addCurry(1)(2)(3)(1));

// 需要实现的函数
function repeat(func, times, wait) {
    return function wrapper(...args) {
        setTimeout(() => {
            if (--times) wrapper.apply(this, args); // 时间到了  每次执行一次函数
            func.apply(this, args); // 接受第二个参数
        }, wait)
    }
}
// 使下面调用代码能正常工作
// const repeatFunc = repeat(console.log, 4, 3000);
// repeatFunc("helloworld"); //会输出4次 helloworld, 每次间隔3秒

function toCurry(func, ...args) {
    // ↑需要柯里化的函数作为参数
    // ↑也可以有初始参数传入
    // ↑缓存在args中
    return function() {
        // 合并上一次缓存的参数和本次传入的参数
        args = [...args, ...arguments];
        // 判断参数数量是否足够
        if (args.length < func.length) {
            // 如果不够，继续递归
            // 注意，这里每一次递归都会形成新的闭包
            // 保证柯里化函数每一步调用都是独立的，互不影响
            return toCurry(func, ...args);
        } else
        // 如果参数满足数量，执行函数并返回结果
            return func.apply(null, args);
    }
}

function bar(a, b, c) {
    return a + b + c;
}
// 把函数传进去就可以了
var f = toCurry(bar)
console.log(f(1)(2)(3));
console.log(f(1)(2, 3));
console.log(f(1, 2)(3));