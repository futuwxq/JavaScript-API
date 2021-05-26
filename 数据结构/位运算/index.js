/**
 * 按位非运算符（~），反转操作数的位 32 位以内。
 *   3 步曲
 * 把运算数转换成 32 位数字
 * 把二进制数转换成它的二进制反码（0->1, 1->0）
 * 把二进制数转换成浮点数
 */

// 对任一数值 x 进行按位非操作的结果为 -(x + 1)
// 都是 -1
// console.log(~null);
// console.log(~undefined);
// console.log(~[]);
// console.log(~0);

// console.log(~true); // -2
// console.log(~1.2); //-2
// console.log(~1.2536489);//-2

/**
 * 判断数值中是否有某元素时
 */

const arr = [1, 5, 6, 9]
if (arr.indexOf(9) > -1) {
    console.log('ok');
}

// if (~arr.indexOf(9)) console.log('has');

/** 
 * ~~x就为 -(-(x+1) + 1) 
 * 对于浮点数，~~value可以代替parseInt(value)，而且前者效率更高些
 */

console.log(~~null); //0
console.log(~~1.2536489); //1