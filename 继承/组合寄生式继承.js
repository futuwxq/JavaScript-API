/** 结合寄生式 */

function Parent(name) {
    this.name = name;
    this.fruits = ['apple']
}

Parent.prototype.getFruits = function() {
    console.log(this.fruits);
}

function Son(age) {
    this.age = age
    Parent.call(this, age)
}

// 使用一个中间值 fn 来做桥梁  fn.prototype = new Parent(); 只会在开始调用使用一次
// const fn = function(){};
// fn.prototype = new Parent();
// Son.prototype  = new fn();
// Son.prototype.constructor = Son;
prototype(Parent, Son)

const son1 = new Son('li', 10);
const son2 = new Son('yi', 11)
son1.fruits.push('orange');

son1.getFruits() // [ 'apple', 'orange' ]
son2.getFruits() // [ 'apple' ]

// 2 封装

// 返回一个原型指向 参数o 的实例
function object(o) {
    const fn = function() {};
    fn.prototype = o;
    return new fn()
}

// 参数 o 是父构造函数的实例
//  prototye 的 原型  指向父构造函数的原型， constructor 指向 子构造函数
// 子构造函数的原型 指向这个 prototype
// 目的 子构造函数的 prototype 属性可以指向 父构造函数的原型对象 ，但是子构造函数的prototype对象的 constructor 指回 子构造函数本身。
function prototype(parent, son) {
    const prototype = object(parent.prototype);
    prototype.constructor = son;
    son.prototype = prototype;
}