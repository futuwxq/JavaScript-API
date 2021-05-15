// test 测试
// let obj = {
//     name: '码不停息',
//     age: 18,
//     love: ['吃饭', '睡觉', '打豆豆'],
//     one: {
//         two: '123'

//     }
// }
// for (const key in obj) {
//     // 给对象中的每一个方法都设置响应式
//     defineProperty(obj, key, obj[key])
// }
// obj.name = 'zhangsan' //修改 zhangsan
// console.log(obj.love); //读取 love  [ '吃饭', '睡觉', '打豆豆' ]


/** 1 没有递归处理 observe 只能监听到第一层的数据的变化  如果在遍历 obj 之前 递归遍历 obj 就可以监听到第三层 */
// obj.one.two.three = '456'

/** 2  如果set 方法传进来也是一个 对象 */
// obj.one.two = {
//     num: '789'
// }

/** 需要早 set 获取值之后，如果是对象在 也需要递归监听 */
// obj.one.two.num = '963'

// 3 数组发生变化 但是触发的是 get 
// obj.love.push('喝水')

/**
 * 3 重写数组的方法 
 */
const originProto = Array.prototype
const arryProtos = Object.create(originProto) //arryProto 的隐式原型指向 Array 原型对象
const methodsToPath = [
    'push',
    'pop',
    'shift',
    'unshift',
    'splice',
    'sort',
    'reverse'
]
methodsToPath.forEach(methods => {
    arryProtos[methods] = function() {
        //执行原始操作
        originProto[methods].apply(this, arguments)
        console.log('监听赋值成功', methods);
    }
})

function observer1(obj) {
    if (typeof obj !== 'object' || obj === null) return;
    if (Array.isArray(obj)) {
        //重写数组的原型
        obj.__proto__ = arryProtos
        for (let i in obj) {
            observer1(obj[i])
        }
    } else {
        for (const key in obj) {
            defineProperty(obj, key, obj[key])
        }
    }

}

function defineProperty(obj, key, val) {
    observer1(val) // 如果 val 是一个对象，需要递归监听
    Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get() {
            console.log('读取', key);
            return val;
        },
        set(newval) {
            if (newval === val) return
            observer1(newval) // 如果 newVal 是个对象，这里还需要递归监听
            console.log('修改', newval);
            val = newval;
        }
    })
}

let obj = {
    name: '码不停息',
    age: 18,
    love: ['吃饭', '睡觉', '打豆豆'],
    one: {
        two: '123'

    }
}
for (const key in obj) {
    // 给对象中的每一个方法都设置响应式
    defineProperty(obj, key, obj[key])
}

// obj.love.push('喝水') //读取 love 监听复制成功 push  还是会触发 get 
obj.love.shift() //读取 love 监听赋值成功 shift

// 在用Object.defineProperty实现数据响应式时我们必须要遍历所有的数据,还需要重写数组的方法,性能消耗也比较大