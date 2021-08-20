/**
 * 二分 + 递归 + 额外的数组 temp ，比较每次 左右两个数组的 依次加入 temp，之后把temp复制到数组中。事件复杂度是 O(nlogn) ，但是空间复杂度是 o(n)
 */
const ar = [5, 1, 2, 7, 8, 0];

// 对有序数组进行合并
const merge = (leftArr, rightArr) => {
    const result = [];
    while (leftArr.length > 0 && rightArr.length > 0) {
        if (leftArr[0] <= rightArr[0])
            result.push(leftArr.shift());
        else result.push(rightArr.shift());
    }
    return result.concat(leftArr).concat(rightArr)
}
const mergeSort = (arr) => {
    // 递归结束时，只有一个元素
    if (arr.length === 1) return arr;
    let mid = Math.floor(arr.length / 2);
    // 分割数组元
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
    // 递归合并，排序
    return merge(mergeSort(left), mergeSort(right))

}

arr1 = mergeSort(ar)
console.log(arr1);