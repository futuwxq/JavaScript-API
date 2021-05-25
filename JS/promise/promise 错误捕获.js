/**
 * try catch 错误铺货
 * 1. 宏任务的回调函数中的错误无法捕获。 =》 try catch 是同步任务 ，当任务队列中的回调执行的时候， try catch 的任务栈已经从执行栈中出栈 全局上下文已经变化了 所以无法捕获
 * 2. 微任务（promise）的回调
 */

// 异步任务
const task = () => {
        setTimeout(() => {
            throw new Error('async error')
        }, 1000)
    }
    // 主任务
function main() {
    try {
        task();
    } catch (e) {
        console.log(e, 'err')
        console.log('continue...')
    }
}

// main() // catch 无法捕获错误并且执行 1 秒之后 task 报错



// 微任务的回调
// 返回一个 promise 对象
const promiseFetch = () =>
    new Promise((reslove) => {
        reslove();
    })

function main() {
    try {
        // 回调函数里抛出错误
        promiseFetch().then(() => {
            throw new Error('err')
        })
    } catch (e) {
        console.log(e, 'eeee');
        console.log('continue');
    }
}

// 微任务队列是在两个 task 之间清空的，所以 then 入栈的时候，main 函数也已经出栈了。
main()