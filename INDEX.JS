// 固定行数的多行输入
const lines = [];
var num = 3; //设定输入行数
var rows = []; //用于存储每行的输入

rl.on('line', function(data) {

    rows.push(data); //将每次输入的行数据存入

    if (num === rows.length) { //输入的行数等于num值
        console.log(rows); //输出结果
    }
});

while (line = readline()) {
    // line 是一行里面的东西 arr 存储着一行的东西  ' '
    let arr = line.split(' ').map(item => +item)
    console.log(arr[0] + arr[1])
}

// 获取一行 这个就是常见的 m  n
// num 就是多少行数据
let num = parseInt(readline());
for (let i = 0; i < num; i++) {
    let [a, b] = readline().split(' ');
    console.log(Number(a) + Number(b));
}

/**
 * 不知道有多少行
 */
//  有结束条件的元素为 0 
while (line = readline()) {
    let [a, b] = line.split(' ');
    if (Number(a) === 0 && Number(b) === 0) break;
    else console.log(Number(a) + Number(b));
}

//  多行 第一个元素是结束条件
while (line = readline()) {
    let arr = line.split(' ');
    let n = Number(arr[0]);
    if (n === 0) break;
    let add = 0;
    for (let i = 1; i <= n; i++) {
        add += Number(arr[i]);
    }
    console.log(add);
}

/**
 * 字符串
 */
//  5
//  c d a bb e
line1 = readline();
line2 = readline();
line2 = line2.split(' ').sort().join(' ');
console.log(line2);

// 不知道多少行的
while (line = readline()) {
    line = line.split(" ").sort().join(" ");
    console.log(line)
}

var m;
var sum, n;
var sc

while (sc = read_line()) {
    var arr = sc.split(' ');
    n = parseInt(arr[0]);
    m = parseInt(arr[1]);
    sum = 0;
    for (var i = 0; i < m; i++) {
        sum = sum + n;
        n = Math.sqrt(n);
    }
    print(sum.toFixed(2));
}