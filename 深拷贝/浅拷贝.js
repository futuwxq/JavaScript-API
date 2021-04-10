/** 浅拷贝 值基本类型拷贝值   引用类型拷贝引用 */

var obj = { a: { a: "hello", b: 21 } };


//1  Object.assign(target, ...sources)
const o1 = Object.assign({}, obj)
o1.a.a = 1;
// o1.a = {}
console.log(o1);
console.log(obj); // 只能改变第二层


//2 slice  ... 解构赋值
var arr = [1, { a: 'hello' }, 2, 5, 7]
const arr1 = arr.slice()
const arr2 = [...arr]
console.log(arr1);
console.log(arr2);