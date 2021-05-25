// bind() 方法返回一个绑定上下文的函数
Function.prototype.mybind = function(thisArg = window) {
    const fn = this; // 暂存属性
    const arg = [...arguments].slice(1);
    // 返回一个函数
    return function() {
        // 利用 apply 方法 
        fn.apply(thisArg, [...arg, ...arguments])
    }

}