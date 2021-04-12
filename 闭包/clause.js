/**
 * 立即执行函数 不需要函数名 避免全局变量的污染
 * 
 */

for (var i = 1; i <= 10; i++) {
    (function(i) {
        setTimeout(function() {
            console.log(this);
            console.log(i);
        }, 1000)
    })(i)
}

/**
 * 计时器 + 结合箭头函数 保存 this 
 * 计时器回到函数 可以用匿名函数 
 */
var obj = {
    foo: function() {
        setTimeout(function() {
            console.log(this); // //Window
        })
    },
    foo1: function() {
        setTimeout(() => console.log(this)) // obj
    }
}

// obj.foo1()

/**
 * 封装计数器  私有属性 修改和获取 属性的 api  避免全局污染
 */

var Counter = function() {
    let count = 0;
    return {
        get() {
            return count
        },
        set(val) {
            if (val) count += val;
            else count++;
        }
    }
}

let c1 = new Counter();
c1.set(2);
c1.set();
console.log(c1.get()); //3


/**
 *  立即执行函数 会立即执行 
 */

document.addEventListener('click', (function() {
    console.log(1);
})())
document.addEventListener('click', function() {
    console.log(1);
})