/**
 * 快排 时间复杂度是 nlogn
 * 分治
 */

function quick_sort(nums, l, r) {
    //只有一个元素
    if (l >= r) return;
    const p = partition(nums, l, r);
    quick_sort(nums, l, p - 1);
    quick_sort(nums, p + 1, r);

}


function partition(nums, l, r) {
    //区间只剩下一个元素
    if (l === r) return l;
    let i = l,
        j = r + 1;
    const privote = nums[l];
    while (true) {
        while (nums[++i] < privote) {
            if (i === r) break;
        }
        while (nums[--j] > privote) {
            if (j === l) break;
        }
        if (i >= j) break; //所有元素都走了一遍 就退出循环了
        swap(nums, i, j);
    }
    // [l-j] <= privote  [j+1, n] >privote
    swap(nums, l, j);
    return j; //privote 回归到 j
}

function swap(nums, i, j) {
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}

let a = [5, 1, 2, 9, 4, 6];
quick_sort(a, 0, 5);
console.log(a);