const arr = [
    [1, 2, 2],
    [3, 4, 5, 5],
    [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10
];

/**
 * ES6 语法 arr.flat([depth]) depth 默认为 1
 */

// const a1 = arr.flat(); // arr1.flat is not a function 版本兼容性
// console.log(a1);
/**
 * 递归法
 */
const flatten = function(arr) {
    if (!Array.isArray(arr)) return [arr];
    const ans = [];
    for (const i of arr) {
        // 扩展元素安抚函数调用 那返回的数组参数进行解构
        ans.push(...flatten(i));
    }
    return ans;
}

// const a2 = flatten(arr);
// console.log(a2); //[ 1, 2, 2, 3, 4, 5, 5, 6, 7, 8, 9, 11, 12, 12, 13, 14, 10 ]
/**
 * 迭代法
 *  栈
 */
const flatten1 = function(arr) {
    // 元素入栈 
    const stk = [...arr];
    const res = [];
    while (stk.length) {
        const top = stk.pop();
        if (Array.isArray(top)) stk.push(...top); // 持续扁平化
        // top 是从前往后获取 所以用shift 先进先排在后面
        else res.unshift(top);
    }
    return res;
}
const a3 = flatten1(arr);
console.log(a3); //[ 1, 2, 2, 3, 4, 5, 5, 6, 7, 8, 9, 11, 12, 12, 13, 14, 10 ]