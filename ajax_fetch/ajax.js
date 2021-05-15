function getJSON(url) {
    const p = new Promise((reslove, reject) => {
        function handler() {
            if (this.readyState === 4) {
                if (this.status === 200) {
                    reslove(this.response)
                } else {
                    reject(new Error(this.statusText))
                }
            }
        }
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.send();
        xhr.onreadystatechange = handler;
    })
    return p;
}

getJSON("https://api.github.com/users/futuwxq").then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
})



// post 请求  封装成Promise
function ajax(url) {
    const p = new Promise((reslove, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', url, true)
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.statue === 200) {
                    reslove(JSON.parse(xhr.responseText))
                } else {
                    reject(new Error(xhr.statue))
                }
            }
        }
        const postData = {
            userName: 'zhangsan',
            password: 'xxx'
        }
        xhr.send(JSON.stringify(postData))
    })
    return p;
}

const url = './data/test.json'
ajax(url).then(res => console.log(res))
    .catch(err => console.log(err))

/**
 * 改写成 await 版本
 */
function getJSON2(url) {
    return new Promise((reslove, reject) => {
        function handler() {
            if (this.readyState === 4) {
                if (this.status === 200) {
                    reslove(this.response)
                } else {
                    reject(new Error(this.statusText))
                }
            }
        }
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.send();
        xhr.onreadystatechange = handler;
    })
}

async function request() {
    const response = await getJSON(url);
    console.log(response);
}