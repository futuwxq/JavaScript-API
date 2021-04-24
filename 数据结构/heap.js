/**
 * heap 使用的是从后往前 自上而下堆化建堆
 * 参考 https://github.com/sisterAn/JavaScript-Algorithms/issues/60
 */


/**
 * 从最后一个叶子节点的父节点 n/2 开始，从上往下堆化。 
 * @param {*} nums 
 * @param {*} heapSize 
 */
function buildHeap(nums, heapSize) {
    for (let i = Math.floor(heapSize / 2); i >= 1; i--) {
        heapify(nums, heapSize, i); //堆化
    }
}

/**
 * 分别比较父元素和左右孩子，如果子元素较小，就和 父元素交换。父元素交换之后，向下依次比较，确保下面的结构都是父元素小于左右孩子
 * @param {*} nums 
 * @param {*} heapSize 
 * @param {*} i 
 */
function heapify(nums, heapSize, i) {
    let minIndex = i; // 记录最小元素的下标
    if (i * 2 <= heapSize && nums[i * 2] < nums[i]) minIndex = i * 2;
    if (i * 2 + 1 <= heapSize && nums[i * 2 + 1] < nums[minIndex]) minIndex = i * 2 + 1;
    if (minIndex !== i) { //需要交换
        swap(nums, i, minIndex);
        //向下调整
        heapify(nums, heapSize, minIndex);
    }

}

function swap(num, i, j) {
    const temp = num[i];
    num[i] = num[j];
    num[j] = temp;
}

// test
// 用完全二叉树来存储 第一个节点不存储元素
const arr = [, 5, 1, 1, 2, 0, 0];
buildHeap(arr, arr.length - 1)
console.log(arr); //[ <1 empty item>, 1, 2, 3, 4, 5 ]