/**
 * Object.defineProperty() 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象
 * 语法：
 *  Object.defineProperty(obj, prop, descriptor)
 *  + obj 要定义属性的对象。
 *  + prop  要定义或修改的属性的名称或 Symbol
 *  + descriptor  要定义或修改的属性描述符。 有如下 4 种
 * 
 *  1  writable 是否可以被重写，true可以重写，false不能重写，默认为false
 *  2  configurable  是否可以删除目标属性或是否可以再次修改属性的特性（writable, configurable, enumerable)
 *  3  enumerable  是否可以被枚举（使用for...in或Object.keys()）。设置为true可以被枚举；设置为false，不能被枚举。默认为false。
 *  4  value 值可以使任意类型的值，默认为undefined
 * 
 * 存取器描述（get和set）  
 * 当使用了getter或setter方法，不允许使用writable和value这两个属性
 */


// Object.defineProperty(obj, 'name', {
//     writable: true,
//     configurable: true,
//     enumerable: true,
//     value: 'gjf'
// });
// // console.log(person.name); //gjf
// obj.name = 'zhangsan'

// //writable 设置为 false 没有报错 属性值依然是 gif ； writable 设置为 true 之后就可以改变值
// // console.log(obj.name);


// //  enumerable 设置为 true 的时候，才会遍历到 name 属性
// for (let i in obj) {
//     console.log(i);
// }


/** 问题  */

// obj对象有多个属性,可能需要__循环__添加到Object.defineProperty里面
// obj的属性也可能是对象或者数组,可能需要__递归__
// 用户可能给obj赋值新的属性,这种情况可能需要 单独处理



function defineProperty(obj, key, val) {
    // observer1(val) // 如果 val 是一个对象，需要递归监听
    Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get() {
            console.log('读取', key);
            return val;
        },
        set(newval) {
            if (newval === val) return
                // observer1(newval) // 如果 newVal 是个对象，这里还需要递归监听
            console.log('修改', newval);
            val = newval;
        }
    })
}
//设置一个递归监听函数 如果对象的属性是还是对象 需要再监听一次
function observer(obj) {
    if (typeof obj !== 'object' || obj === null) return;
    for (const key in obj) {
        defineProperty(obj, key, obj[key])
    }
}

let obj = {
    name: {
        a: 1,
        b: 2
    },
    age: 18,
    love: ['吃饭', '睡觉', '打豆豆']
}

for (const key in obj) {
    // 给对象中的每一个方法都设置响应式
    defineProperty(obj, key, obj[key])
}
obj.age = 22; //修改 22
obj.name.a = 23; //读取 name