let testString = 'study the replace function of javascript';
//只替换了第一个a
// study the replAce function of javascript
// console.log(testString.replace('a', 'A'));
// // study the replAce function of jAvAscript
// console.log(testString.replace(/a/g, 'A'));

let templateStr = 'i am {{name}},age {{age}},job {{job}} ';
let data = {
    name: 'xbd',
    age: 18,
    job: 'CTO'
}

const templateFunc = (str, data) => {
    return str.replace(/\{\{(\w+)\}\}/g, (match, key) => {
        console.log(match, key);
        // {{name}} name
        // {{age}} age
        // {{job}} job
        return data[key]
    })
}
console.log(templateFunc(templateStr, data));