class Pubsub {
    constructor() {
            this.handles = {};
        }
        // 订阅事件
        // 事件类型以及事件触发时的回调函数
    subscrible(type, callback) {
            if (!this.handles[type]) {
                this.handles[type] = [];
            }
            this.handles[type].push(callback)
        }
        // 取消事件
        // 取消执行 type 事件下的 fn 回调
    unsubscible(type, fn) {
        if (!this.handles[type]) return;
        let fnList = this.handles[type];
        //没有传入指定回调 就是删除事件类型下的所有事件
        if (!fn) fnList.length = 0;
        else {
            // 只返回不包含 fn 的回调
            fnList.filter(item => item != fn)
        }
    }

    // 发布事件
    // 事件类型 以及需要传递的参数
    publish(type, ...arg) {
        // 找到指定类型 执行回调
        this.handles[type].map(fn => fn.apply(null, arg))
    }
}

let sub = new Pubsub();
let fn1 = time => console.log('do work', time)
sub.subscrible('onwork', fn1)
sub.subscrible('offwork', time => console.log('off work', time))
sub.publish('onwork', '9.00')
    // sub.publish('offwork','12.00')