// const ans = [];
// var permutation = function(s) {
//     if (!s.length) return [];
//     const res = new Set();
//     // const res = []
//     const visited = [];

//     function backtrack(track) {
//         // 满足答案的时候
//         if (track.length === s.length) {
//             res.add(track)
//                 // res.push(track);
//             return;
//         }
//         // 迭代
//         for (let i = 0; i < s.length; i++) {
//             if (visited[i]) continue;
//             visited[i] = true;
//             backtrack(track + s[i]);
//             // 撤销
//             visited[i] = false;
//         }
//     }
//     backtrack('');
//     return res;
//     //  return [...res];
// };

// console.log(permutation("abc"));

function lastRemaining(n, m) {
    if (n === 0) return 0;
    const set = [];
    // 初始化
    for (let i = 0; i < n; i++) {
        set[i] = i;
    }
    let index = 0;
    while (set.length > 1) {
        index = (index + m - 1) % set.length;
        set.splice(index, 1);
    }
    return set[0];
}

console.log(lastRemaining(5, 3));