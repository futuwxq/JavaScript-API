/**
 * heap 使用的是从后往前 自上而下堆化建堆
 * 参考 https://github.com/sisterAn/JavaScript-Algorithms/issues/60
 * 
 * 数组存储下标，如果子元素是 i ，那么父亲是 Math.ceil(i / 2) -1;
 * 
 * 从下往上堆化大顶堆：item[i]  < item[Math.ceil(i / 2) -1] 一直循环，直到 i < 0
 */


/**
 *  建立一个大顶堆 时间复杂度： O(logn)，为树的高度
 * 
 * 1.  插入节点  从下往上堆化  大顶堆
 * 
 */

const Heap = () => {

    // 每插入一个节点 就从该叶子节点向上堆化
    const insert = (key) => {
        items.push(key);
        let index = items.length - 1;
        //  从最后一个叶子节点开始 孩子节点是否大于父节点，是则交换
        while (Math.ceil(index / 2) - 1 >= 0 && items[index] > items[Math.ceil(index / 2) - 1]) {
            const i = Math.ceil(index / 2) - 1;
            [items[index], items[i]] = [items[i], items[index]]
            // 从儿子到父亲
            index = i;
        }
    }

    const items = []
    for (let i = 0; i < 7; i++) insert(i + 1)
    console.log(items) // [ 7, 4, 6, 1, 3, 2, 5 ]
}

Heap();

/**
 * 2. 原地建堆 已经有数组元素  小顶堆
 * 
 */
let arr = [5, 2, 3, 4, 1]

/**
 * 
 * 2.1  从前往后、自下而上式堆化建堆 小顶堆
 * 
 */
const buildHeap = (items, heapSize) => {
    // heapSize 超出数组长度
    // 从第一个元素开始堆化
    while (heapSize < items.length - 1) {
        heapSize++;
        heapify(items, heapSize)
    }
}

//  从第一个子元素开始 
const heapify = (items, i) => {
    // 自下而上式堆化  一个递归循环的过程 直到 
    // 如果比父元素小 就交换 
    while (Math.ceil(i / 2) - 1 >= 0 && items[i] < items[Math.ceil(i / 2) - 1]) {
        const j = Math.ceil(i / 2) - 1;
        [items[j], items[i]] = [items[i], items[j]]
        i = j;
    }
}


buildHeap(arr, 0);
console.log(arr) // [ <1 empty item>, 9, 8, 7, 6, 3, 2, 4, 1, 5 ]

// 2.2 从后往前、自上而下式堆化建堆  大顶堆
// 从最后一个非叶子节点开始, 从 n/2 位置节点开始堆化

const buildHeap1 = (items, heapSize) => {
    // 从 n/2 位置节点开始堆化  因为到了最后一个元素是要向上和每一个父元素比较
    for (let i = Math.floor(heapSize / 2); i >= 0; --i) {
        heapify1(items, heapSize, i)
    }
}

function heapify1(items, heapSize, i) {
    // 自上而下式堆化
    let minIndex = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    //   找出当前元素最大的孩子 进行交换
    if (left < heapSize && items[i] < items[left]) minIndex = left;

    if (right < heapSize && items[minIndex] < items[right]) minIndex = right;
    // 父亲已经是最小的了
    if (minIndex !== i) {
        [items[i], items[minIndex]] = [items[minIndex], items[i]]
        heapify1(items, heapSize, minIndex)
    }
}


var item = [5, 2, 3, 4, 1]
buildHeap1(item, item.length)
console.log(item)