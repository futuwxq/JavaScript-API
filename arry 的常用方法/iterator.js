/**
 * reduce方法 
 * 1. 一些计算的加和
 * 2. 构建一个对象对象 用数组 对象 map时候
 *   2.1 map 的函数体 必须 ***有返回值** 并且这个值就是他的第一个参数 累加值 acc
 */

A.reduce((p, v) => {
    v & 1 ? p.push(v) : p.unshift(v);
    return p
}, [])

// 可以简化 箭头函数 () 用 ， 隔开表达式，最后一个表达式是返回值
A.reduce((p, v) => (v & 1 ? p.push(v) : p.unshift(v), p), [])