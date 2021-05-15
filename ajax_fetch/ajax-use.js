/**
 * 关于 xhr 
 * XMLHttpRequest（XHR）对象用于与服务器交互。通过 XMLHttpRequest 可以在不刷新页面的情况下请求特定 URL，
 * 获取数据。
 * 
 * 
 * 1 ajax 使用
 * 1.1  xhr.open(method, url, async) 初始化 
 *    async：是否异步请求，默认为 true（异步）
 * 1.2  xhr.send(data) 发送请求
 * 2 属性
 * 2.1 responseText： 请求返回的数据内容 
 * 2.2 status： 响应的HTTP状态，如 200 304 404 等
 * 2.3 readyStatus： 请求/响应过程的当前活动阶段
 */

// get 请求
const xhr = new XMLHttpRequest(); //新建XMLHttpRequest对象
// const xhr = new ActiveXObject('Microsoft.XMLHTTP')
xhr.open('GET', 'https://api.github.com/users/futuwxq', true)

// 当readyStatus的状态发生改变时，会触发 xhr 的事件onreadystatechange，于是我们就可以在这个方法中，对接收到的数据进行处理
xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) { // 成功完成
        // 判断响应结果
        if (xhr.status === 200) {
            console.log(JSON.parse(xhr.responseText)); // {firstName: "John", lastName: "Dear"}
        } else {
            // 失败，根据响应码判断失败原因:
            console.log(xhr.status);
        }
    }
}
xhr.send(null)