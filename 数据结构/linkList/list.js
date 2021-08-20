function List() {
    let Node = function(e) {
        this.value = e;
        this.next = null;
    }

    // 初始头结点为 null
    let head = null;

    // 链表长度
    let length = 0;

    // 操作
    this.getList = () => {
        return head;
    }

    /**
     * 查找节点 e 
     * 遍历单链表，判断节点值是否等于待查找值，相等则返回 true ，
     * 否则继续遍历下一个节点，直到遍历完整个链表还未找到，则返回 false
     * @param {*} e 
     */
    this.search = (e) => {
        if (!head) return false;
        let p = head;
        while (p) {
            if (p.value === e) return true;
            p = p.next;
        }
        return false;
    }

    /**
     * 追加节点
     * 初始化一个节点（待追加节点），遍历到链尾，在尾节点后插入该节点 
     * 
     * 确定边界条件： 当链表为 null ，直接将 head 指向待插入节点，不需要遍历
     * */
    this.append = (e) => {
        let node = new Node(e),
            p = head;
        if (!head) head = node;
        else {
            // 找到最后一个节点
            while (p.next) p = p.next
            p.next = node;
        }
        length += 1;
    }

    /**
     * 在 position 位置插入节点
     * 
     * 初始化一个节点（待插入节点 node ），
     * 遍历到 position 前一个位置节点，在该节点后插入 node
     * 
     * 确定边界条件：
     * 当 position 为 0 时，直接将插入节点 node.next 指向 head ， head 指向 node 即可，不需要遍历
     * 当待插入位置 position < 0 或超出链表长度 position > length ，
     * 都是有问题的，不可插入，此时直接返回 null ，插入失败
     * @param {*} pos 
     * @param {*} e 
     */
    this.insert = (pos, e) => {
        if (pos < 0 || pos > length) return null;
        let node = new Node(e);
        if (pos === 0) {
            node.next = head;
            head = node;
            length += 1;
            return
        }
        // 需要找到 pos 的前一个节点
        let cur = head,
            prev = head,
            index = 0;
        while (index++ < pos) {
            prev = cur;
            cur = cur.next
        }
        // prev 为前驱
        node.next = cur;
        prev.next = node;
        length += 1
    }

    /**
     * 删除
     * 确定解题思路： 遍历单链表，找到待删除节点，删除
     * 边界条件：删除头节点，如果只有一个元素，head = null，否则 head = head.next；
     * @param {*} e 
     */
    this.remove = (e) => {
        if (!head) return false;
        console.log(head);
        if (head.value === e) {
            head = head.next ? head = head.next : null
            length -= 1;
            return true
        }

        let prev = head,
            cur = head;
        while (cur) {
            if (cur.value === e) prev.next = cur.next;
            else prev = cur;
            cur = cur.next;
        }
        length -= 1;
        return true;
    }
    this.isEmpty = () => {
        return head === null
    }
    this.size = () => {
        return length
    }
}

// 测试
let list = new List()
for (let i = 0; i < 5; i += 1) {
    list.append(i)
}
list.insert(1, 10)
list.remove(0)
console.log(list.search(0));