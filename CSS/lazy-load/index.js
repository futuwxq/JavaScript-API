//**当前可视区域的高度**
const viewHeight = window.innerHeight || document.documentElement.clientHeight

const imgs = document.getElementsByTagName('img')

let num = 0;
// getBoundingClientRect() 方法来获取返回元素的大小及其相对于视口的位置
function lazylad() {
    for (let i = num; i < imgs.length; i++) {
        // 可视区的高度减去元素顶部距离可视区的高度
        let distance = viewHeight - imgs[i].getBoundingClientRect().top;
        // 可视区域高度大于等于 元素顶部距离可视区顶部的高度 元素露出
        if (distance >= 0) {
            imgs[i].src = imgs[i].getAttribute('data-src')
            num = i + 1;
        }
    }
}

window.addEventListener('scroll', lazylad, false)