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
    let i = l;
    // j = r + 1;
    const privote = nums[l];
    for (let j = i + 1; j < nums.length; j++) {
        if (nums[j] < privote) {
            i++;
            [nums[i], nums[j]] = [nums[j], nums[i]]
        }
    }
    [nums[l], nums[i]] = [nums[i], nums[l]]

    return i; //privote 回归到 j
}

function swap(nums, i, j) {
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}

let a = [5, 1, 2, 9, 4, 6, 10, 0, 1];
quick_sort(a, 0, 8);
console.log(a);