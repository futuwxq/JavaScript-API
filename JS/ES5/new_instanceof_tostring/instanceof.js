/**
 * instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上。
 * 
 * 语法: object instanceof constructor 
 * 
 * 通常用来检测 对象类型 array function 属于哪种数据类型 
 * 
 */

// obj instanceof Object
function _instanceof(obj, constructor) {
    if (constructor === null) throw new Error(" Right-hand side of 'instanceof' is not an object")
    if (obj === null) return false;
    let rightProto = constructor.prototype; //构造函数的原型对象
    let leftProto = obj.__proto__; // 左边的对象的原型
    while (true) {
        if (leftProto === null) return false; //根据 原型链找到了 null
        if (leftProto === rightProto) return true; //找到了
        leftProto = leftProto.__proto__; //继续原型链上查找
    }
}

//TEST
// console.log(_instanceof([], Array));
// console.log(_instanceof([], Object));
console.log(_instanceof(null, Object));
console.log(_instanceof(null, null)); // perfect!!

// console.log(null instanceof null);