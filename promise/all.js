/**
 * 参数是一个 具有迭代属性的 ，不一定是一个数组，可以包含多个 promise
 * 
 * @param {} iterators 
 * @return 一个组合的 promise,解决值是所有 promise 的解决值集合  err 是 reject的理由值
 */


Promise._all = function(iterators) {
    const ans = []; // 存储所有 priomise 的解决值
    let count = 0; // 计数 保证所有 所有 promise 都结束
    return new Promise((resolve, reject) => {
        for (let i in iterators) {
            Promise.resolve(iterators[i]) // 把每个 promise 封装成 resloved 状态 参数列表中可能会有 pending状态 promise 无法使用 then  catch api
                .then((res) => {
                    ans.push(res);
                    if (++count === iterators.length) {
                        resolve(ans);
                    }
                })
                .catch((err) => reject(err))
        }
    })

}

var promise1 = Promise.resolve(3);
var promise2 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 100, 'foo');
});
var promise3 = 42;

Promise._all([promise1, promise2, promise3]).then(function(values) {
    console.log(values); //[ 3, 42, 'foo' ]
});


/**
 * 一点理解
 * promise 对象的状态改变是通过 他的两个函数参数去实现的。 reslove 函数将状态转化为 resolved， reject 将函数参数转化为 rejected 状态。
 */