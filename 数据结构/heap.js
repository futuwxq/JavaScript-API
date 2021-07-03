/**
 * heap 使用的是从后往前 自上而下堆化建堆
 * 参考 https://github.com/sisterAn/JavaScript-Algorithms/issues/60
 */


/**
 *  建立一个大顶堆 时间复杂度： O(logn)，为树的高度
 * 
 * 1.  插入节点  从下往上堆化  大顶堆
 * 因为节点是从最后面开始插入的
 */

function Heap() {
    let items = [, ]

    for (let i = 0; i < 7; i++) insert(i + 1)
        // 从最后一个节点的父元素开始比较  子元素大于父元素 就交换
    function insert(key) {
        items.push(key);
        let index = items.length - 1;
        while (Math.floor(index / 2) > 0 && items[index] > items[Math.floor(index / 2)]) {
            swap(items, index, Math.floor(index / 2))
                // 从儿子到父亲
            index = Math.floor(index / 2);
        }
    }

    function swap(items, i, j) {
        [items[i], items[j]] = [items[j], items[i]]
    }
    console.log(items) // [ <1 empty item>, 7, 4, 6, 1, 3, 2, 5 ]
}

// Heap();

/**
 * 2. 原地建堆 已经有数组元素  小顶堆
 * 
 */
let arr = [, 5, 2, 3, 4, 1]
    /**
     * 
     * 2.1  从前往后、自下而上式堆化建堆从第二排开始 和父元素比较 
     */
function buildHeap(items, heapSize) {
    // heapSize 超出数组长度
    while (heapSize < items.length - 1) {
        //  不需要处理下标为 1 的数
        heapSize++;
        heapify(items, heapSize)
    }
}

function heapify(items, i) {
    // 自下而上式堆化 如果比父元素小 就交换
    while (Math.floor(i / 2) > 0 && items[i] < items[Math.floor(i / 2)]) {
        console.log(i)
        swap(items, i, Math.floor(i / 2))
            // 从儿子到父亲 自下而上
        i = Math.floor(i / 2);
    }
}


// buildHeap(arr, 1);
// console.log(arr)  // [ <1 empty item>, 9, 8, 7, 6, 3, 2, 4, 1, 5 ]

// 2.2 从后往前、自上而下式堆化建堆
// 从最后一个非叶子节点开始, 从 n/2 位置节点开始堆化

function buildHeap1(items, heapSize) {
    // 从 n/2 位置节点开始堆化  因为到了最后一个元素是要向上和每一个父元素比较
    for (let i = Math.floor(heapSize / 2); i >= 1; --i) {
        heapify1(items, heapSize, i)
    }
}

function heapify1(items, heapSize, i) {
    // 自上而下式堆化
    while (true) {
        let minIndex = i;
        //  大顶堆 找出当前元素最大的孩子 进行交换
        if (2 * i <= heapSize && items[i] < items[i * 2]) {
            minIndex = i * 2;
        }
        if (2 * i + 1 <= heapSize && items[minIndex] < items[i * 2 + 1]) {
            minIndex = i * 2 + 1;
        }
        // 父亲已经是最小的了
        if (minIndex === i) break;
        swap(items, i, minIndex);
        i = minIndex; // 从父亲到儿子  自上而下
    }
}

function swap(items, i, j) {

    [items[i], items[j]] = [items[j], items[i]]
}
// var item = [,5, 2, 3, 4, 1]

//  length -1 ,第一个元素不算，从下标 1  开始
// buildHeap1(item, item.length - 1)
// console.log(item) //[ <1 empty item>, 1, 2, 3, 4, 5 ]


/**
 * 排序算法：堆排序  顺序
 * 取堆的第一个元素（最大值） 和 最后一个元素交换
 * 
 * 
 */

function heapSort(items) {
    // 构建大顶堆
    buildHeap1(items, items.length - 1)
        // 防止数组越界
    let haepSize = items.length - 1;
    for (let i = items.length - 1; i > 1; i--) {
        // 最后一个元素和第一个元素交换
        swap(items, 1, i);
        // 有序长度减 1
        haepSize--;
        // 堆化有序序列
        //  自上而下式堆化
        heapify1(items, haepSize, 1)
    }
    return items;
}

var items = [, 1, 9, 2, 8, 3, 7, 4, 6, 5]
heapSort(items)
console.log(items);