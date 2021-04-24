/**
 * 1 方法
 * 1.1  xhr.open(method, url, async) 初始化 
 *    async：是否异步请求，默认为 true（异步）
 * 1.2  xhr.send(data) 发送请求
 * 2 属性
 * 2.1 responseText： 请求返回的数据内容 
 * 2.2 status： 响应的HTTP状态，如 200 304 404 等
 * 2.3 readyStatus： 请求/响应过程的当前活动阶段
 */

// get 请求
// const xhr = new XMLHttpRequest();
// xhr.open('GET', './data/test.json', true)

// // 当readyStatus的状态发生改变时，会触发 xhr 的事件onreadystatechange，于是我们就可以在这个方法中，对接收到的数据进行处理
// xhr.onreadystatechange = () => {
//     if (xhr.readyState === 4) {
//         if (xhr.status === 200) {
//             console.log(JSON.parse(xhr.responseText)); // {firstName: "John", lastName: "Dear"}
//         } else {
//             console.log('404 NOt found');
//         }
//     }
// }
// xhr.send(null)


// post 请求  封装成Promise
// function ajax(url) {
//     const p = new Promise((reslove, reject) => {
//         const xhr = new XMLHttpRequest();
//         xhr.open('POST', url, true)
//         xhr.onreadystatechange = () => {
//             if (xhr.readyState === 4) {
//                 if (xhr.statue === 200) {
//                     reslove(JSON.parse(xhr.responseText))
//                 } else if (xhr.status === 404 || xhr.statue === 500) {
//                     reject(new Error('404 not found'))
//                 }
//             }
//         }
//         const postData = {
//             userName: 'zhangsan',
//             password: 'xxx'
//         }
//         xhr.send(JSON.stringify(postData))
//     })
//     return p;
// }

// const url = './data/test.json'
// ajax(url).then(res => console.log(res))
//     .catch(err => console.log(err))

function getJSON(url) {
    let promise = new Promise((resolve, reject) => {
        function handler() {
            if (this.readyState !== 4) {
                return;
            }
            if (this.status === 200) {
                resolve(this.response);
            } else {
                reject(new Error(this.statusText));
            }
        }
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.send();
        xhr.onreadystatechange = handler;
    })
    return promise;
}

getJSON("https://segmentfault.com/a/1190000021707081").then(function(data) {
    console.log(data);
}).catch(function(res) {
    console.log(res);
})