// function changeObj(o) {
//     o.siteUrl = 'http://www.baidu.com'
//         // let o = new Object(); Identifier 'o' has already been declared
//         // var o = new Object(); // var 定义变量都会合并到一个上面， 与下面无异
//     o = new Object();
//     o.siteUrl = 'http://www.google.com'
// }
// let Webiste = new Object();
// changeObj(Webiste);
// console.log(Webiste);

let a = [0, 1, 2, 3, 4],
    b = a;
console.log(a === b);
b[10] = 4

console.log(a, b);