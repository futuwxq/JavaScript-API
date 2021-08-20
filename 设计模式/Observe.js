// 观察者 主题对象和观察者之间 一对多 关系。当主题对象发生改变，通知每个观察者

/**
 * 主题对象
 */
class Subject {
    constructor() {
        this.observers = []
    }
    addObserver(onserver) {
        this.observers.push(onserver);
    }

    removeObserver(observer) {
        let index = this.observers.indexOf(observer);
        if (index !== -1) {
            this.observers.splice(index, 1); //删除
        }
    }

    /**
     *  通知 observer 每一个元素，并调用 update 方法
     */
    notify() {
        this.observers.forEach(e => e.update())
    }
}


/**
 * 观察者对象
 */
class Observer {
    update() {
            console.log('update');
        }
        /**
         *  订阅主题
         * @param {*} subject 
         */
    subscribeTo(subject) {
        subject.addObserver(this);
    }
}

// 测试
const sub = new Subject();
const obs1 = new Observer();

obs1.subscribeTo(sub);

sub.notify() // update