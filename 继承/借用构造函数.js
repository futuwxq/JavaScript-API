/* 1 call 方法 借用构造函数 */

// 父级
function Father() {
    this.fruits = ['apple', 'piear'];
    this.getFruits = function() {
        console.log(this.fruits);
    }
}

// 子级
function Son() {
    Father.call(this);
}

const son1 = new Son();
son1.fruits.push('orange');
son1.getFruits(); // son1.getFruits()

// 避免了父级引用类型的属性被所有实例共享
const son2 = new Son();
son2.getFruits() //['apple', 'piear']

// 2 传递参数

function Parent(name) {
    this.name = name
}

function Child(age) {
    this.age = age
    Parent.call(this, age)
}

const child = new Child('zhang', 20);
console.log(child); //Child { age: 'zhang', name: 'zhang' }

/* 特点 */
// 1. 父级的引用属性 子级不会共享 相互不影响
// 2  子级可以传递参数 设置自定义属性
// 3. 父级共享的方法必须写在构造函数的内部 每次实例化的时候都会创建 （相比原型链继承）

/* 原理 */

// 利用  call 方法把 子级构造函数的 this 指向了父级构造函数