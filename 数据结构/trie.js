var TrieNode = function() {
    this.next = {};
    this.isEnd = false;
};

/**
 * Initialize your data structure here.
 */
var WordDictionary = function() {
    this.root = new TrieNode();
};

/**
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    if (!word.length) return;

    let node = this.root;
    for (let i = 0; i < word.length; ++i) {
        if (!node.next[word[i]]) {
            node.next[word[i]] = new TrieNode();
        }
        node = node.next[word[i]];
    }
    node.isEnd = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    if (!word.length) return false;

    return this.dfs(this.root, word);
};

/**
 * @param {TrieNode} root
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.dfs = function(root, word) {
    const length = word.length;
    let node = root;
    for (let i = 0; i < length; ++i) {
        const ch = word[i];
        // 若是通配符，则尝试遍历所有的情况(DFS)
        if (ch === ".") {
            const keys = Reflect.ownKeys(node.next);
            for (const key of keys) {
                const found = this.dfs(node.next[key], word.slice(i + 1));
                if (found) return true;
            }
            return false;
        }

        if (!node.next[ch]) {
            return false;
        }
        node = node.next[ch];
    }
    return node.isEnd;
};

const a = new WordDictionary();
a.addWord('apple')
a.addWord('pple')
console.log(a);