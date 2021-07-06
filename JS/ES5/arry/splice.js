/**
 *  模拟实现 Array.prototype.splice
 *  array.splice(start, deleteCount, item1[, item2[, ...]]]])
 * 
 *  + start :修改的起始位置（从0计数）
 *     + start >= array.length : start  =  array.length 
 *     + start < 0, start = start + array.length 
 *     +  -start > array.length ,start = 0
 * 
 *  + deleteCount ：可选 ,整数，表示要移除的数组元素的个数。
 *      + deleteCount > arr.length - start ,删除所有的元素（含第 start 位）。
 *      + deleteCount 被省略了，删除后面所有元素 包括 start
 *      + deleteCount 是 0 或者负数，则不移除元素。这种情况下，至少应添加一个新元素。
 * 
 *  + item1, item2, ...：可选
 *    要添加进数组的元素,从start 位置开始。如果不指定，则 splice() 将只删除数组元素。
 * 
 *  + return ：数组返回的是删除的元素 ，以数组的形式展示
 */

//  删除 2 个元素，添加一个元素
// const arr = [1, 2, 3, 4, 5, 6]
// const arr1 = arr.splice(1, 2, 11)
// console.log(arr); //  [ 1, 11, 4, 5, 6 ]


// 原型上面的方法不能使用箭头函数  箭头函数的 this 指向父级作用域，比如这里指向 windows
Array.prototype._splice = function(start, deletCount, ...addlist) {
    console.log(this, 1);
    //   start 进行处理
    const n = this.length;
    if (start > n) start = n;
    if (start < 0) {
        if (Math.abs(start) > n) start = 0;
        else start += n;
    }
    if (typeof deletCount === 'undefined') deletCount = n - start;
    //  从 start 开始，删除 start + deletCount 个元素
    const removeList = this.slice(start, start + deletCount)

    // 删除后面剩余的元素
    const right = this.slice(start + deletCount)

    // 添加元素 从 addIndex 开始替换元素
    let addIndex = start;
    addlist.concat(right).forEach(e => {
        arr[addIndex++] = e
    });
    // 删除多余元素
    this.length = addIndex

    // 返回删除的元素
    return removeList;

}

const arr = [1, 2, 3, 4, 5, 6]
const arr1 = arr._splice(1, 2, 11)
console.log(arr); //  [ 1, 11, 4, 5, 6 ]