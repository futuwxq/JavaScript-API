/**
 * Proxy对象用于定义基本操作的自定义行为（如属性查找，赋值，枚举，函数调用等）
 * 在没有Proxy之前，是无法改变原生JS特性的
 * 
 * 
 *  target：目标对象
 *  handler：是一个普通对象，其中可以重写底层实现。每个方法里面，可以赋值并且拦截到操作
 *  
 *  new Proxy(target, handler) 返回一个代理对象  代理一个目标对象
 */

// let obj = {
//     name: '码不停息',
//     age: 18,
//     love: ['吃饭', '睡觉', '打豆豆'],
//     one: {
//         two: '123'

//     }
// }

// let target = [1, 2, 3]
let target = {
    a: {
        b: 4,
        d: 6
    },
    b: 2
}

const proxy = new Proxy(target, {
    // handler.set() 方法用于拦截设置属性值的操作。 
    set(target, key, value) {
        console.log('检测到了set的key为 -> ' + key)

        target[key] = value;
        return true
            // Reflect 是一个内置的对象，它提供拦截 JavaScript 操作的方法 
        return Reflect.set(target, key, value)
    },
    get(target, key, value) {
        console.log("获取了" + key + "的值"); //
        return Reflect.get(target, key)
    }
})

// 检测到了set的key为 -> 3
// 检测到了set的key为 -> length
// proxy.push('22')

// 检测到了set的key为 -> 0
// 检测到了set的key为 -> 1
// 检测到了set的key为 -> length
// proxy.shift()

//检测到了set的key为 -> 0
// proxy[0] = 9

//检测到了set的key为 -> a
// proxy.a = 3




// proxy.b = 5; //检测到了set的key为 -> b
// proxy.a.b = 6 //获取了a的值 触发了 a 的get 值还是发生变化了
// 修改内层属性的值的时候 会触发第一层属性的 get 方法

/** 本质上，Proxy 也是不支持嵌套的，这点和 Object.defineProperty() 是一样的。因此也需要通过逐层遍历来解决 */

let handler = {
    set(target, key, value) {
        console.log('检测到了set的key为 -> ' + key)
        target[key] = value;
        return true
    },
    get(target, key, value) {
        console.log("获取了" + key + "的值");
        if (typeof target[key] === 'object' && target[key] !== null) {
            return new Proxy(target[key], handler)
        }
        return Reflect.get(target, key)
    }
}

// 获取了a的值
// 检测到了set的key为 -> b
const proxy1 = new Proxy(target, handler)


proxy1.a.b = 6