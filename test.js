// var parttion = function(nums, left, right) {
//     const pivot = nums[left];
//     let j = left;
//     // j 左指针 保存小于 基准
//     for (let i = j + 1; i < nums.length; i++) {
//         if (nums[i] < pivot) {
//             j++;
//             console.log(i, j);
//             swap(nums, j, i)
//         }
//     }
//     swap(nums, left, j);

//     return j;
// }
// var swap = function(nums, i, j) {
//     let temp = nums[i];
//     nums[i] = nums[j];
//     nums[j] = temp;
// }

// parttion([3, 2, 1, 5, 6, 4], 0, 5)

//  i 指向大于 基准值的下标（最远）  j 指向小于基准值的下标（最远） 从左往右遍历（i），如果遇见小的就和 j 互换 最后 left 和 j 互换，成为变价


// var length = 10;

// function fn() {
//     return this.length + 1;
// }

// var obj = {
//     length: 5,
//     test1: function() {
//         return fn();
//     }
// };

// obj.test2 = fn;

// console.log(obj.test1())
// console.log(fn() === obj.test2())



// carray(1)(2)(3)

// function carray(...arg1) {
//     return function(...arg2) {
//         return function(...arg3) {
//             console.log(arg1 + arg2 + arg3);
//         }
//     }
// }


// obj.mybind(c)
// function mybind(context, ...arg) {

//     const fn = this;
//     return function(...arg1) {
//         return fn.apply(context, [...arg, ...arg1])
//     }
// }

// const a = {
//     aa: 1
// }

// function fn() {
//     console.log(this.aa);
// }

// fn.bind(a)

// function postOrder(root) {
//     if (!root) return null;
//     const stk = [];
//     const ans = [];
//     let cur = root;
//     while (cur || stk.length) {
//         if (cur) {
//             stk.push(cur);
//             ans.unshift(cur.val);
//             cur = cur.right;
//         } else {
//             cur = stk.pop().left;
//         }
//         // if(root.right)
//         // cur = cur.left;
//     }
// }