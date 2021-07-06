/**
 * reduce方法 
 *  array.reduce(function(prev, cur, index, arr){}, initialValue)
 * reduce 参数
 * 
 * callback （执行数组中每个值的函数，包含四个参数）
    1、previousValue （上一次调用回调返回的值，或者是提供的初始值（initialValue））
    2、currentValue （数组中当前被处理的元素）
    3、index （当前元素在数组中的索引）
    4、array （调用 reduce 的数组）
  initialValue （作为第一次调用 callback 的第一个参数。）类似相当于设置初始值
 */


//  关于 initialValue ,如果没有指定，prev 默认就会取第一个元素，cur 从第二个元素开始迭代。因此最好设置初始值
var arr = [1, 2, 3, 4];
var sum = arr.reduce(function(prev, cur, index, arr) {
    console.log(prev, cur, index);
    // 1 2 1
    // 3 3 2
    // 6 4 3
    return prev + cur;
})
console.log(arr, sum);

/**  应用
 *   1. 一些计算的加和 
 *   2. 计算数组中每个元素出现的次数
 *   3. 数组去重 
 *   4. 将二维数组转化为一维 contact
 *   5. 构建一个对象、数组、map 这些 iteration 的时候
 *      5.1 map 的函数体 必须 ***有返回值** 并且这个值就是他的第一个参数 累加值 acc
 */

A.reduce((p, v) => {
    v & 1 ? p.push(v) : p.unshift(v);
    return p
}, [])

// 可以简化 箭头函数 () 用 ， 隔开表达式，最后一个表达式是返回值
A.reduce((p, v) => (v & 1 ? p.push(v) : p.unshift(v), p), [])