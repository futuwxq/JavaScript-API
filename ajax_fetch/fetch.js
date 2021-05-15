/**
 * fetch()接受一个 URL 字符串作为参数，默认向该网址发出 GET 请求，返回一个 Promise 对象。
 */

//  fetch()采用模块化设计，API 分散在多个对象上（Response 对象、Request 对象、Headers 对象），更合理一些；
//  相比之下，XMLHttpRequest 的 API 设计并不是很好，输入、输出、状态都在同一个接口管理，容易写出非常混乱的代码。

// fetch()接收到的response是一个 Stream 对象，
// response.json()是一个异步操作，取出所有内容，并将其转为 JSON 对象。
fetch('https://api.github.com/users/futuwxq').then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.log('Request Failed', err));


// 通过 await 语法，语义更加清晰
const data = async function getJSON() {
    let url = 'https://api.github.com/users/futuwxq';
    // await 必须在 try ... catch 里面，才能捕获异步操作中可能发生的顺序
    try {
        let response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.log('Request Failed', error);
    }
}

// data().then(res => console.log(res)) // 获取到数据


/**
 * response 里面的同步属性
 */

async function fetchText() {
    let response = await fetch('/readme.txt');
    console.log(response.status); // 404
    console.log(response.statusText); // not found
}

/*
 * 处理fetch 3 秒超时 
 */
function timeout(url) {
    setTimeout(function() {
        return fetch(url)
    }, 5000)
}
async function getJSON1(url) {
    let response = await timeout(url);
    const data = await response.json();

    setTimeout(function() {

        if (!data) {
            console.log(111);
            return new Error('Time out')
        }
    }, 3000)
    return data;
}

// console.log(getJSON1('https://api.github.com/users/futuwxq'));
getJSON1('https://api.github.com/users/futuwxq').then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
})