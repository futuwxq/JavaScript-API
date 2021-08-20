/**
 * 思路：
 * 1. 将数组元素构建一个大顶堆 heap ：
 *   1.1 数组下标从 0 开始，元素 i ，左孩子的下标为 2 * i + 1 ,右孩子的下标为 2 * i + 2
 * 2.heap从尾部开始， 依次和 heap[0] 交换
 * 3. 交换之后，需要从 0 开始向下堆化
 * 
 * 时间复杂度:建堆过程的时间复杂度是 O(n) ，排序过程的时间复杂度是 O(nlogn) ，整体时间复杂度是 O(nlogn)
 * 
 * 空间复杂度: O(1)
 */
const heapSort = (items) => {
    const heapify = (heap, i) => {
        // 自上而下式堆化
        let minIndex = i;
        const left = 2 * i + 1;
        const right = 2 * i + 2;
        //  大顶堆 找出当前元素最大的孩子 进行交换
        if (left < heapSize && heap[i] < heap[left]) minIndex = left;
        if (right < heapSize && heap[minIndex] < heap[right]) minIndex = right;
        // 父亲已经是最小的了
        if (minIndex !== i) {
            [heap[i], heap[minIndex]] = [heap[minIndex], heap[i]]
            heapify(heap, minIndex)
        }
    }

    const heap = [...items];
    let heapSize = heap.length;
    // 构建大顶堆 从非叶子节点开始 父节点开始
    // 数组中元素是从 0 开始， heapzise 比下标多 1 ，所以下标 i 的做元素
    for (let i = Math.floor(heapSize / 2); i >= 0; i--) heapify(heap, i)

    for (i = heap.length - 1; i > 0; i--) {
        // 最后一个元素和第一个元素交换
        [heap[0], heap[i]] = [heap[i], heap[0]]
        // 有序长度减 1
        heapSize--;
        heapify(heap, 0)
    }
    return heap;
}

var items = [1, 9, 2, 8, 3, 7, 4, 6, 5]
console.log(heapSort(items));