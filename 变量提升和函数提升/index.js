/**
 * 函数声明 优先  变量
 */
var f = function() {

    console.log(1);
}

function f() {
    console.log(2);
}

f(); //1