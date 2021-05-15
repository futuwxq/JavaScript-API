/** call  */

// call() 方法调用一个函数, 其具有一个指定的 this 值和分别地提供的参数(参数的列表) 返回函数执行的结果。

/* 原理 bar.call(foo) */
//1. foo.fn = bar; 把 bar作为 foo 对象的方法=>改变 this 指向
// 2. foo.fn()  执行方法
// 3. 删除方法  delete foo.fn;

//bar.call(foo) === foo.bar 方法 
Function.prototype.myCall = function(context = window) {
    context.fn = this; //  this 指向 bar
    const arg = [...arguments].slice(1); // 传递的参数列表
    //执行方法
    const result = context.fn(arg);
    delete context.fn; // 删除方法
    return result;
}

const fn = function() {
    console.log(this.name)
}
const obj = {
    name: "look"
}

fn.myCall(obj) // look