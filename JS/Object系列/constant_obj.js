/**
 * 用Object.freeze() 和 Proxy() 给出了一个定义常量对象的解决方案
 * 
 * 1. 不能添加属性
 * 2. 不能修改属性
 * 3. 不能修改属性的属性 
 * 
 * Object.freeze() 冻结整个对象
 * 
 * 不能向这个对象添加新的属性
 * 不能修改其已有属性的值
 * 不能删除已有属性
 */
// const constSettings = {
//     appName: "fan",
//     info: { p1: 200, p2: 300 }
// };

// Object.freeze(constSettings)
//     //第一层 改和增无效 但是没有报错
// constSettings.appName = 'zhansan'
// constSettings.add = 1223

// //内层 生效了
// constSettings.info.p1 = 100
// constSettings.info.p3 = 300


// console.log(constSettings);


// getOwnPropertyNames 返回对象实例的上面的方法和属性 一个数组
// const a = 1;
// console.log(Object.getOwnPropertyNames(obj)); //[]

/** 使用 object.frezzed */
function deepFrezzed(obj) {
    const propsName = Object.getOwnPropertyNames(obj);

    //在冻结自身之前冻结属性
    propsName.forEach(key => {
        const props = obj[key];
        // 如果prop是个对象，冻结它
        if (typeof props === 'object' && props !== null) {
            obj[key] = deepFrezzed(props)
        }
    })
    Object.freeze(obj);
    return new Proxy(obj, {
        get(target, key) {
            if (!target.hasOwnProperty(key)) {
                console.log(key + '不存在');
                // throw new Error(`${key} is not exist`)
            } else return target[key]
        },
        set(target, key, newval) {
            console.log('是常量');
            // throw new Error(`${target[key]} is const`)
        }
    })
}

// Object.preventExtensions(constSettings);
// constSettings.appName = 'zhansan'
// constSettings.info.p5 = 500
// console.log(constSettings);

// console.log(Object.getOwnPropertyNames(constSettings)); //[ 'appName', 'info' ]
// deepFrezzed(constSettings)
// constSettings.info.p1 = 100
//     // constSettings.info.p3 = 300
// console.log(constSettings);


/** 直接使用数据劫持 proxy */
const constSettings = {
    appName: "fan",
    info: { p1: 200, p2: 300 }
};
const handler = {
    set(target, prop, val) {
        throw new Error('not set')
        return true;
    },
    get(target, prop, val) {
        if (typeof target[prop] === 'object' && target[prop] !== null) {
            return new Proxy(target[prop], handler)
        }
        return target[prop];
    }
}
const proxy = new Proxy(constSettings, handler)
    // proxy.info.p1 = 500
console.log(proxy.appName);
console.log(constSettings);