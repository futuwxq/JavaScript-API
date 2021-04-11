/**
 *  rejected 状态的 promise 传递一个 OnRejected 事件，可以在 then 里面的 OnRejected 处理，也可以在 catch 里面直接处理
 * 
 * fufilled 状态的 promise 在 then 找那个的 Onfufilled 中处理
 * 
 * 无论是在 then 还是 catch 中只有抛出异常或者 调用 reject 才会返回一个 rejected 状态的 promise。
 */

new Promise((reslove, reject) => {
    setTimeout(() => {
        // reslove('111')
        reject(22)
            // throw new Error('有哪里不对了');
            // console.log(1);

    })
}).then((res) => {
    console.log(res);
}, (err) => {
    console.log(err, 1);
}).catch((err) => {
    console.log(err, 2);
})