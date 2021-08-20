// 求多个数组之间的交集
const a = [1, 5, 5, 7, 9, 3]
const b = [7, 5, 2, 4]

//  去重 + 过滤 
const interset = [...new Set(a.filter((e) => b.includes(e)))]
console.log(interset);