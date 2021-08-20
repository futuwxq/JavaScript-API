/**
 * 数组法
 * @param {*} n 
 * @param {*} m 
 * @returns 
 */
function lastRemaining(n, m) {
    if (n === 0) return 0;
    const set = [];
    // 初始化
    for (let i = 0; i < n; i++) {
        set[i] = i;
    }
    let index = 0;
    while (set.length > 1) {
        index = (index + m - 1) % set.length;
        set.splice(index, 1);
    }
    return set[0];
}

console.log(lastRemaining(5, 3));

/**
 *  队列法
 *  1-m 每 n 个删除一个人
 */
function myCirculQueue() {
    // 向队列插入元素
    const item = [];
    this.enQueue = function(val) {
            return item.push(val)
        }
        //删除元素
    this.deQueue = function() {
        return item.shift();
    }
    this.size = function() {
        return item.length;
    }
}

function countOff(m, n) {
    const queue = new myCirculQueue();
    // 先存元素 m次
    for (let i = 1; i <= m; i++) {
        queue.enQueue(i);
    }

    while (queue.size() > 1) {
        // n 次
        for (let i = 0; i < n - 1; i++) {
            queue.enQueue(queue.deQueue());
        }
        //淘汰第 n 个
        queue.deQueue();
    }
    return queue.deQueue();
}

console.log(countOff(5, 3));

/**
 * 3 循环链表
 * 循环链表的最后一个元素指向下一个元素的指针不是null，而是指向第一个元素（head)
 */

function CirDbList(element) {
    this.head.next = this.head;
    this.head.prev = this.head;
}