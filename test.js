let a = {}
let b = a;
b['a'] = Object.create(null);

b = b['a']
b['c'] = Object.create(null);
b = b['c']
b.isWord = true;
console.log(a);