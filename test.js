// let a = {}
// let b = a;
// b['a'] = Object.create(null);

// b = b['a']
// b['c'] = Object.create(null);
// b = b['c']
// b.isWord = true;
// console.log(a);

for (var i = 1; i <= 10; i++) {
    (function(i) {
        setTimeout(function() {
            console.log(i);
        }, 1000)
    })(i)
}

// (setTimeout(function fn(i) {
//   console.log(i);
// }, 1000))(i)

function _change() {}