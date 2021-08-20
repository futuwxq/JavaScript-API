function CircularLinkList() {
    let Node = function(e) {
            this.val = e;
            this.next = null;
        }
        // 初始化头结点
    let head = null;
    let length = 0;

    /**
     *  查找
     *  和单链表类似，唯一不同的是：循环单链表的循环结束条件为  p !== head ,链表头是否等于链表尾
     *  
     *  边界条件：对头结点单独判断
     * @param {*} e 
     */
    this.search = (e) => {
        if (!head) return false;
        console.log(head);
        // 头结点
        if (head.val === e) return true;
        let p = head.next;
        while (p !== head) {
            if (p.val === e) return true;
            p = p.next;
        }
        return false;
    }

    /**
     * 在 positon 后插入
     * 
     * 初始化一个节点（待插入节点 node ），遍历到 position 前一个位置节点
     * ，在该节点后插入 node
     * 确定边界条件：
     * 当 position 为 0 时，需要遍历到尾节点，然后在尾节点后插入节点 ，
     *  并将 head 指向
     * pos为0 ，head 为 null 的时候，直接把 head = node ，node。next = head
     * @param {*} pos 
     * @param {*} e 
     */
    this.insert = (pos, e) => {
        if (pos < 0 || pos > length) return null
        const node = new Node(e);
        let prev = head,
            cur = head,
            index = 0;
        if (pos === 0) {
            if (!head) {
                head = node;
                node.next = head;
            } else {
                while (cur.next !== head) cur = cur.next;
                cur.next = node;
                node.next = head;
                head = node;
            }

        } else {
            while (index < pos) {
                prev = cur;
                cur = cur.next;
                index++
            }
            prev.next = node;
            node.next = cur;
        }
        length += 1;
    }
    this.append = (e) => {

    }

    /**
     * 删除
     * @param {*} e 
     */
    this.remove = (e) => {
        if (!head) return false;
        if (length === 1 && e === head.val) {
            head = null;
            length--;
            return
        }
        let prev = head,
            cur = head;
        while (cur.next !== head) {
            if (cur.val === e) {
                prev.next = cur.next;
                length -= 1
            } else {
                prev = cur;
                cur = cur.next;
            }
        }
    }

    this.isEmpty = () => length === 0

    this.size = () => length;

    this.lastRemaining = (n) => {
        let p = head,
            prev = head;
        while (p.next !== p) {
            console.log(p);
            while (--n) {
                prev = p;
                p = p.next;
            }
            prev.next = p.next;
            p = p.next;
        }
        return p.val;
    }
}

const list = new CircularLinkList();
// list.insert(0, 10)
// list.remove(10)
// console.log(list.search(10));

// n = 5, m = 3

// 生成
for (let i = 0; i < 5; i++) {
    // const node = new Node(i);
    list.insert(i, i)
}
console.log(list.lastRemaining(3));