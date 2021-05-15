/**
 * Object.create()方法创建一个新对象，使用现有的对象来提供新创建的对象的__proto__
 * 
 * 原理 
 * 1.构造函数的原型指向 o
 * 2.实例对象的 隐式原型 就会指向 o
 */

Object.prototype._create = (o) => {
    function fn() {};
    fn.prototype = o;
    return new fn();
}