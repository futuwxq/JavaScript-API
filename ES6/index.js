/**
 * 结构赋值
 * 数组的解构赋值属于模式匹配 只要等号两边的模式相同，左边的变量就会被赋予对应的值 ,如果解构不成功，变量的值就等于undefined。
 */

// 基本类型
// let a = 2,
//     b = 3;
// [a, b] = [b, a];
// console.log(a, b); //3 ,2

// 引用类型
// let c = [1, 2, 3];
// let d = [4, 5, 6];
// [c, d] = [d, c];
// console.log(c, d); //[ 4, 5, 6 ] [ 1, 2, 3 ]

/**
 * 不完全解构
 */

let [x, y] = [1, 2, 3];
console.log(x, y); //1 2

let [a, [b], d] = [1, [2, 3], 4];
console.log(a, b, d); //1 2 4

/**
 * 只要某种数据结构具有 Iterator 接口，都可以采用数组形式的解构赋值。                
 */

/**
 * 对象的解构赋值
 * 变量必须与属性同名，才能取到正确的值。
 */
// let { foo, bar } = { foo: 'aaa', bar: 'bbb' };
// console.log(foo, bar); //aaa bbb

let { fo, ba } = { fo: 'aaa', bar: 'bbb' };
console.log(fo, ba); //aaa undefined