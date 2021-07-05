/**
 * 序列化
 */

// 在不改变属性的值的前提下，修改对象属性

// 1 不一样的 undefined symbol 和 任意函数
//1.1  undefined、任意的函数以及 symbol 作为 **对象属性值 *** 时 JSON.stringify() 跳过（忽略）对它们进行序列化
//1.2 undefined、任意的函数以及 symbol 作为数组元素值时，JSON.stringify() 将会将它们序列化为 null
// 1.3 undefined、任意的函数以及 symbol 被 JSON.stringify() 作为单独的值进行序列化时都会返回 undefined
console.log(JSON.stringify(Symbol('aa')));


// 2.  非数组对象的属性不能保证以特定的顺序出现在序列化后的字符串中 => 原因如 1 

console.log(JSON.stringify(["aaa", undefined, function aa() {
    return true
}, Symbol('dd'), "eee"]));

// "["aaa",null,null,null,"eee"]"

// 3. 转换值如果有 toJSON() 函数，该函数返回什么值，序列化结果就是什么值，并且忽略其他属性的值。

// 无论是否有其他值 只要有 toJson 并且返回,就序列化返回值.
console.log(JSON.stringify({
    say: "hello JSON.stringify",
    toJSON: function() {
        return "today i learn";
    }
}));
// "today i learn"



//  4. JSON.stringify() 将会正常序列化 Date 的值。

console.log(JSON.stringify({ now: new Date() }));
// {"now":"2021-07-05T12:23:06.502Z"}


// 5. NaN 和 Infinity 格式的数值及 null 都会被当做 null。


//  6. 关于基本类型的序列化：
// 布尔值、数字、字符串的包装对象在序列化过程中会自动转换成对应的原始值。

console.log(JSON.stringify([new Number(1), new String("false"), new Boolean(false)]));
// [1,"false",false]


// 7. 关于对象属性的是否可枚举：
// 其他类型的对象，包括 Map/Set/WeakMap/WeakSet，仅会序列化可枚举的属性。

// 不可枚举的属性默认会被忽略：
console.log(JSON.stringify(
    Object.create(
        null, {
            x: { value: 'json', enumerable: false },
            y: { value: 'stringify', enumerable: true }
        }
    )
));

// {"y":"stringify"}


// 8.深拷贝 循环引用会抛出异常
// 对包含循环引用的对象（对象之间相互引用，形成无限循环）执行此方法，会抛出错误。 
const obj = {
    name: "loopObj"
};
const loopObj = {
    obj
};
// 对象之间形成循环引用，形成闭环
obj.loopObj = loopObj;

function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}
// deepClone(obj)


/**
 * 2 强大的第二个参数 replacer
 * 
 */

// 2.1  replacer 作为函数， 它有两个参数，键（key）和值（value）(类似 map 和 fliter 方法)
//  解决 undefined  函数 symbol 无法正确答应的问题
const data = {
    a: "aaa",
    b: undefined,
    c: Symbol("dd"),
    fn: function() {
        return true;
    }
};
JSON.stringify(data, (key, value) => {
    switch (true) {
        case typeof value === "undefined":
            return "undefined";
        case typeof value === "symbol":
            return value.toString();
        case typeof value === "function":
            return value.toString();
        default:
            break;
    }
    return value;
})

const data1 = {
    a: 2,
    b: 3,
    c: 4,
    d: 5
};
// replacer 被传入的函数时，第一个参数不是对象的第一个键值对，而是空字符串作为 key 值，value 值是整个对象的键值对
JSON.stringify(data1, (key, value) => {
        console.log(1, key, value);
        return value;
    })
    // 1 '' { a: 2, b: 3, c: 4, d: 5 }
    // 1 'a' 2
    // 1 'b' 3
    // 1 'c' 4
    // 1 'd' 5

// 2.2 如果 replacer 是一个数组，数组的值代表将被序列化成 JSON 字符串的属性名。

const jsonObj = {
    name: "JSON.stringify",
    params: "obj,replacer,space"
};

// 只保留 params 属性的值
console.log(JSON.stringify(jsonObj, ["params"]));
// {"params":"obj,replacer,space"}