/**
 * 事件切片法的思路是，通过 settimeout API, 一段时间渲染一部分布局。
 * 适用场景：同时加载大量简单的 DOM
 */
let now = Date.now();

let ul = document.getElementById('container');
// 一共插 10 万条数据
const total = 100000;
// 一次插 20 条数据
let once = 20;
// 总页数
let page = total / once;
// let index = 0;
// 循环加载数据
/**
 * 
 * @param {*} curTotal 还剩多少条数据
 * @param {*} curIndex 当前循环的第一个数据下标
 * @returns 
 */
function loop(curTotal, curIndex) {
    if (curTotal <= 0) return false;
    //  每页的数据
    let pageCount = Math.min(curTotal, once);
    // setTimeout(() => {
    //     for (let i = 0; i < pageCount; i++) {
    //         let li = document.createElement('li');
    //         li.innerText = ` ${curIndex} ${i}  : ${~~Math.random()*total}`;
    //         ul.appendChild(li);
    //     }
    //     loop(curTotal - pageCount, curIndex + pageCount)
    // }, 0)

    //   window.requestAnimationFrame(() => {
    //     for (let i = 0; i < pageCount; i++) {
    //         let li = document.createElement('li');
    //         li.innerText = ` ${curIndex} ${i}  : ${~~Math.random()*total}`;
    //         ul.appendChild(li);
    //     }
    //     loop(curTotal - pageCount, curIndex + pageCount)
    // })

    //每次创建的 dom 存放在 DocumentFragment
    window.requestAnimationFrame(() => {
        let fragment = document.createDocumentFragment();
        for (let i = 0; i < pageCount; i++) {
            let li = document.createElement('li');
            li.innerText = ` ${curIndex} ${i}  : ${~~Math.random()*total}`;
            // 不会触发重绘
            fragment.appendChild(li);
        }
        ul.appendChild(fragment);
        loop(curTotal - pageCount, curIndex + pageCount)
    })
}
loop(total, 0)

// 页面加载的时间已经非常快了，每次刷新时可以很快的看到第一屏的所有数据，但是当我们快速滚动页面的时候，会发现页面出现闪屏或白屏的现象.

// setTimeout的执行步调和屏幕的刷新步调不一致,,在setTimeout中对dom进行操作，
// 必须要等到屏幕下次绘制时才能更新到屏幕上，如果两者步调不一致，就可能导致中间某一帧的操作被跨越过去，而直接更新下一帧的元素，从而导致丢帧现象

// 解决方法一 ：requestAnimationFrame 进行分批渲染  ：requestAnimationFrame 每帧自动更新
// 优化方案一：DocumentFragment  : 不是真实的 dom 树的一部分，不会触发 dom 树的重新渲染 回流