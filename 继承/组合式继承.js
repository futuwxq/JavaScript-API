/** 结合原型链 + 借用 */

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

Son.prototype = new Parent();
Son.prototype.constructor = Son;

const son1 = new Son('li', 10);
const son2 = new Son('yi', 11)
son1.fruits.push('orange');

son1.getFruits() // [ 'apple', 'orange' ]
son2.getFruits() // [ 'apple' ]

/** 特点 */

// 父实例中共享的属性可以写在构造函数内部 ，共享的方法可以写在原型链上
// 子实例 属性可以继承，也可以自定义 （多态） 
//  但是在创建子实例的时候  两次调用父构造函数  Son.prototype = new Parent();  new Son() --  Parent.call(this, age)