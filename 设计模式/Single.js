// 单例模式  全局共享 实例只要一个 自行实例化

function CreateSingle(name) {
    this.name = name;
}

CreateSingle.prototype.getName = function() {
    console.log(this.name);
}

/**
 * 单例对象 利用闭包 
 */

var Singleton = (function() {
    var instance;
    return function(name) {
        if (!instance) instance = new CreateSingle(name)
        return instance;
    }
})();

const a = new Singleton('a') // CreateSingle { name: 'a' }
const b = new Singleton('b') // CreateSingle { name: 'a' }
console.log(a === b); //true