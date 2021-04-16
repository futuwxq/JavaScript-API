/**
 * new 构造函数  创建对象实例
 * 1. 创建一个空对象 obj 作为返回的对象实例
 * 2. obj 的原型指向 构造函数的原型
 * 3. 将 obj 赋给构造函数的 this 对象 =》 this 指向 obj
 * 4. 执行构造函数的代码
 *  如果构造函数内部有  return 关键字 
 *   + 关键字为对象 且不为空 ，构造函数返回这个对象
 *   + 其他情况返回 this
 */

function _new(constru, arg) {
    var args = [].slice.call(arguments); // argments 不是数组
    const constructor = args.shift();
    const context = Object.create(constructor.prototype);
    // 通过 apply 调用函数的执行
    const result = constructor.apply(context, args);
    return (typeof result === 'object' && result !== null) ? result : context;
}

function Father(name) {
    this.color = ['red', 'yellow']
    this.name = name;
}
const f1 = _new(Father, 'b')
console.log(f1.name); //b