// 多叉树的搜索节点（广度优先实现）
//执行的时候
//自己定义数据结构，数据结构大概是
function Node(val, children) {
    this.val = val;
    this.children = children;
};
const root1 = new Node(1, [])
const root2 = new Node(2, [])
const root3 = new Node(3, [])
const root = new Node(-1, [root1, root2, root3])

console.log(func(root, 10));

function func(root, target) {
    if (!root) return -1;
    const q = [root];
    while (len = q.length) {
        const node = q.shift();
        if (node.val === target) return true;
        for (const i in node.children) {
            q.push(node.children[i])
        }
    }
    return false;
}