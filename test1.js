// // "[]"

// // function checkValidString(str) {
// //     // write code here
// //     const n = str.length;
// //     const stk = [];
// //     for (let c of str) {
// //         // console.log(stk);
// //         if (c === ']') {
// //             if (!stk.length || (stk[stk.length - 1] !== '[' && stk[stk.length - 1] !== '.')) {
// //                 return false;
// //             }
// //             stk.pop();
// //         } else {
// //             stk.push(c);
// //         }
// //     }
// //     return !stk.length;
// // }

// // console.log(checkValidString('[.]'));

// // [1,8,6,2,5,4,8,3,7]
// // function maxArea( height ) {
// //   // write code here
// //   const n = arr.length;
// //   let max = height[0];
// //   for(let i =1;i < n;i++){
// //     if(max)
// //   }

// //   // for(const num of height)
// // }

// // [1,2,5],11
// // function proccessData(lethality, amount) {
// //     // write code here
// //     let dp = new Array(amount + 1).fill(Infinity);
// //     dp[0] = 0;
// //     for (let i = 1; i <= amount; i++) {
// //         for (let num of lethality) {
// //             if (i - num >= 0) {
// //                 dp[i] = Math.min(dp[i], dp[i - num] + 1)
// //             }
// //         }
// //     }
// //     return dp[amount] === Infinity ? -1 : dp[amount];
// // }
// // console.log(proccessData([1, 2, 5], 11));

// // [8,7,5],[7,4,9]
// // function per(wangCars) {
// //     const n = wangCars.length;
// //     const res = [];
// //     const used = [];

// //     function backtrack(track) {
// //         if (track.length === n) {
// //             res.push(track.slice());
// //             return;
// //         }
// //         for (const num of wangCars) {
// //             if (used[num]) continue;
// //             track.push(num);
// //             used[num] = true;
// //             backtrack(track);
// //             track.pop();
// //             used[num] = false;
// //         }
// //     }
// //     backtrack([]);
// //     return res;
// // }

// // // [8,7,5]
// // let ans = per([7, 4, 9]);

// // function process(arr1, arr2) {
// //     const n = arr1.length;
// //     let max = 0;
// //     for (const x of arr2) {
// //         let scores = 0;
// //         for (let i = 0; i < n; i++) {
// //             if (x[i] > arr1[i]) {
// //                 scores += 3
// //             } else if (arr1[i] === x[i]) scores += 1;
// //         }
// //         max = Math.max(max, scores);
// //     }

// //     return max;
// // }

// // console.log(add([8, 7, 5], ans));

// // function process(tangCars, wangCars) {
// //     // write code here
// //     const n = tangCars.length;
// //     const arr2 = per(wangCars);
// //     let max = 0;
// //     for (const x of arr2) {
// //         let scores = 0;
// //         for (let i = 0; i < n; i++) {
// //             if (x[i] > tangCars[i]) {
// //                 scores += 3
// //             } else if (tangCars[i] === x[i]) scores += 1;
// //         }
// //         max = Math.max(max, scores);
// //     }

// //     return max;
// // }

// // function per(wangCars) {
// //     const n = wangCars.length;
// //     const res = [];
// //     const used = [];

// //     function backtrack(track) {
// //         if (track.length === n) {
// //             res.push(track.slice());
// //             return;
// //         }
// //         for (const num of wangCars) {
// //             if (used[num]) continue;
// //             track.push(num);
// //             used[num] = true;
// //             backtrack(track);
// //             track.pop();
// //             used[num] = false;
// //         }
// //     }
// //     backtrack([]);
// //     return res;
// // }

// // console.log(process([8, 7, 5], [7, 4, 9]));

// // [1,8,6,2,5,4,8,3,7]
// // function maxArea(height) {
// //     const n = height.length;
// //     const dp = new Array(n).fill(0);
// //     dp[0] = 0;
// //     let min = 0;
// //     for (let i = 0; i < n; i++) {
// //         for (let j = i + 1; j < n; j++) {
// //             min = Math.min(height[i], height[j]);
// //             dp[i] = Math.max(min * (j - i), dp[i]);
// //         }
// //     }
// //     return dp;
// // }
// function maxArea(height) {
//     // write code here
//     const n = height.length;
//     const dp = new Array(n).fill(0);
//     dp[0] = 0;
//     let min = 0;
//     for (let i = 0; i < n; i++) {
//         for (let j = i + 1; j < n; j++) {
//             min = Math.min(height[i], height[j]);
//             dp[i] = Math.max(min * (j - i), dp[i]);
//         }
//     }
//     let max = 0;
//     for (let i = 0; i < n; i++) {
//         if (dp[i] > max) max = dp[i]
//     }
//     return max;
// }
// console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));

function A(num) {
    this.num = num
}
A.prototype.add = function(arg) {
    return new A(this.num + arg)
}