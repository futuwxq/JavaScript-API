// 十万个用户都拥有固定7位的座机号，现在实现一个功能，
// 输入一个数字的时候，立马出现下一位可能的数字，比如一个是5736214
// ，一个是5641213，输入5就应该显示[7, 6]

var Node = function(val) {
    this.next = {};
    // this.isEnd = false;
};

var Phone = function() {
    this.root = new Node()
}

Phone.prototype.addNum = function(num) {
    const n = num.length;
    if (!n) return;
    let node = this.root;
    for (let i = 0; i < n; i++) {
        //第一层没有 就新建
        if (!node.next[num[i]]) {
            node.next[num[i]] = new Node();
        }
        node = node.next[num[i]];
    }
    // node.isEnd = true;
}

Phone.prototype.getNext = function(num) {
    const n = num.length;
    if (!n) return [];
    let node = this.root;
    for (let i = 0; i < n; i++) {
        node = node.next[num[i]];
    }
    const res = [];
    for (let i in node.next) {
        res.push(i)
    }
    return res;
}

const pbone1 = new Phone()
pbone1.addNum('5736214')
pbone1.addNum('5641213')
console.log(pbone1.getNext('5'));