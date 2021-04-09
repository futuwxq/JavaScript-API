// apply() 方法调用一个函数, 其具有一个指定的 this 值和分别地提供的参数(数组) 返回函数执行的结果。
// 原理和call一致，不同在参数处理部分

Function.prototype.myApply = function(context = window) {
    context.fn = this;
    // argument[1] 就是参数数组
    let result = 0;
    if (arguments[1]) result = context.fn(...arguments[1])
    else result = context.fn();
    delete context.fn;
    return result;

}

// const fn = function() {
//     console.log(...arguments);
//     console.log(this.name)
// }
// const obj = {
//     name: "look"
// }

// fn.myApply(obj, [1, 2, 3]) // look

// 1 合并 2 个数组
var vegetables = ['parsnip', 'potato'];
var moreVegs = ['celery', 'beetroot'];
Array.prototype.push.apply(vegetables, moreVegs)
console.log(vegetables); // [ 'parsnip', 'potato', 'celery', 'beetroot' ]

// 2 获取数组中的最大值和最小值
var numbers = [5, 458, 120, -215];
let a = Math.max.apply(Math, numbers);
console.log(a); //458