const list = [1, 2, 3]
const square = num => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(num * num)
        }, 1000)
    })
}

function test() {
    list.forEach(async x => {
        const res = await square(x)
        console.log(res, Date.now())
    })
}

// 1 1625660773709
// 4 1625660773720
// 9 1625660773722
// forEach是不能阻塞的，默认是请求并行发起，所以是同时输出1、4、9。
// test()

// 希望每隔 1s 输出一个结果
//  for 循环  for ... of 
async function test1() {
    // for (let i = 0; i < list.length; i++) {
    //     const res = await square(list[i])
    //     console.log(res, Date.now())
    // }
    for (let x of list) {
        const res = await square(x)
        console.log(res, Date.now())
    }
}

// test1()

//  使用 promise 的链式调用 + 递归
let promise = Promise.resolve()

function test2(i = 0) {
    if (i === list.length) return
    promise = promise.then(() => square(list[i])).then(res => console.log(res, Date.now()))
    test2(i + 1)
}

// test2()

const arr1 = [1, 2, 3]
for (const i in arr1) {
    console.log(i);
}