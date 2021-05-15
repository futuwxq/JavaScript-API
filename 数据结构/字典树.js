// /**
//  * 前缀树 trie
//  * Object.create(null); 可以创建一个纯净的对象作为数据字典
//  */

// var Trie = function() {
//     this.root = Object.create(null);
// };

// Trie.prototype.insert = function(word) {
//     let node = this.root;
//     for (let c of word) {
//         if (!node[c]) node[c] = Object.create(null);
//         node = node[c]; // 嵌套结构 形成一种树的结构
//     }
//     node.isend = true;
// };

// Trie.prototype.travle = function(word) { // word 是否在root 字典树里面
//     let node = this.root;
//     for (const c of word) {
//         node = node[c];
//         if (!node) return false;
//     }
//     return node;
// }

// Trie.prototype.search = function(word) {
//     const node = this.travle(word);
//     return !!node && !!node.isend; // 前置转换 结尾是不是 true
// };

// Trie.prototype.startsWith = function(prefix) {
//     return !!this.travle(prefix); // !!强制类型转换
// };