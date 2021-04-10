/** 引用类型拷贝 堆空间中的内存 */

// 1 json转化
var obj1 = { key: { a: { b: 10 } } };
const obj2 = JSON.parse(JSON.stringify(obj1))
console.log(obj2); //{ key: { a: { b: 10 } } }

// obj2.key.a.b = 11;
// console.log(obj1); // 无影响

// 只能用来转换 有 Number, String, Boolean, Array 这些可以被 json 转换的类型
// function 不能复制

var fn = {
        function() { console.log(111); }
    }
    // const fn1 = JSON.parse(JSON.stringify(fn))
    // console.log(fn1); //{}

// 2.1 递归版本  可以复制 function 类型
function deepClone(obj) {
    let result;
    if (typeof obj === 'object') {
        result = obj instanceof Array ? [] : {};
        for (let i in obj) result[i] = deepClone(obj[i])
    } else {
        result = obj;
    }
    return result;
}

// const obj3 = deepClone(obj1);
// console.log(obj3);
// const fn2 = deepClone(fn);
// console.log(fn2); //{ function: [Function: function] } 

// 对象存在循环引用 ,递归进入死循环导致栈内存溢出\
const target = {
    field1: 1,
    field2: undefined,
    field3: {
        child: 'child'
    },
    field4: [2, 4, 8]
};
target.target = target;

// deepClone(target); // Maximum call stack size exceeded

//2.2  循环引用版本 递归
function deepClone1(obj, map = new Map()) {
    if (typeof obj === 'object') {
        let result = obj instanceof Array ? [] : {};
        if (map.has(obj)) { // 循环引用了
            return map.get(obj);
        }
        map.set(obj, result); // 存储 当前的结果
        for (let i in obj) result[i] = deepClone1(obj[i], map)

        return result;
    } else {
        return obj
    }

}
// console.log(deepClone1(target));
// { field1: 1,
//   field2: undefined,
//   field3: { child: 'child' },
//   field4: [ 2, 4, 8 ],
//   target: [Circular] }

// 2.3  弱引用 内存自动回收
function deepClone1(obj, map = new WeakMap()) {
    if (typeof obj === 'object') {
        let result = obj instanceof Array ? [] : {};
        if (map.has(obj)) { // 循环引用了
            return map.get(obj);
        }
        map.set(obj, result); // 存储 当前的结果
        for (let i in obj) result[i] = deepClone1(obj[i], map)

        return result;
    } else {
        return obj
    }

}
console.log(deepClone1(target));