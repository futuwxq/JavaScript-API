/**
 * 实现对象的 Map 函数类似 Array.prototype.map
 */

const arr1 = [2, 6, 8, 4]
const arr2 = arr1.map(e => e / 2)
    // console.log(arr2); [ 1, 3, 4, 2 ]

function myObject(obj, fn) {
    if (typeof fn !== 'function') {
        throw new TypeError(`${fn} is  not a function`)

    }
    // return JSON.stringify(obj, fn);  是一个 string 类型
    return JSON.parse(JSON.stringify(obj, fn)) // array 类型
}

const arr3 = myObject(arr1, (key, value) => {
    if (value % 2 === 0) return value / 2
    return value
})
console.log(arr3);