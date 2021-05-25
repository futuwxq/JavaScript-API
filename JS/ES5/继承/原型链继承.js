/* 1 原型链继承 */

// 父级
function Father() {
    this.fruits = ['apple', 'piear'];
}

Father.prototype.getFruits = function() {
    console.log(this.fruits);
}

// 子级
function Son() {}

/* 子构造函数的原型指向 父构造函数的实例 ; 子构造函数的实例的原型 间接指向 父构造函数的原型*/
// console.log(Son.prototype); // Son 原型对象
Son.prototype = new Father();

const son1 = new Son();
son1.getFruits(); // [ 'apple', 'piear' ]
son1.fruits.push('orange');
son1.getFruits(); // [ 'apple', 'piear', 'orange' ]

// 引用类型的属性被所有实例共享
const son2 = new Son();
son2.getFruits(); //[ 'apple', 'piear', 'orange' ]

/* 特点 */

// 1 引用类型的属性被所有实例共享 耦合性太强
// 2 子级不能传递参数

/* 本质 */

// 利用了原型链 ，子构造函数 prototype 属性指向 父构造函数的实例