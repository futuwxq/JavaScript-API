// let a = b = 1;
// console.log(a, b);
var sortArrayByParityII = function(nums) {
    const n = nums.length;
    for (let i = 0, j = 1; i < n && j < n; i += 2) {
        if (nums[i] & 1) { //偶数下标遇见了奇数
            while (nums[j] & 1) j += 2; //在奇数下标找一个偶数
            console.log(i, j);
            [nums[i], nums[j]] = [nums[j], nums[i]]; // 替换
            console.log(nums);
        }
    }
    return nums;
};

sortArrayByParityII([3, 1, 4, 2]);