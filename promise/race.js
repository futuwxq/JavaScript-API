/**
 * @param 参数是一个具有迭代性质的对象 一般是 promise 列表
 * @returns 返回最先状态改变的 promise 的 解决值 或者 拒接原因
 */
Promise._race = function(iterator) {
    return new Promise((reslove, reject) => {
        for (const item of iterator) {
            Promise.resolve(item).then((res) => {
                reslove(res);
            }).catch((err) => {
                reject(err);
            })
        }
    })
}

// 测试
var promise1 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 500, 'one');
});

var promise2 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 100, 'two');
});

Promise._race([promise1, promise2]).then(function(value) {
    console.log(value); //two
});
``