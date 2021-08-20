const hashmap = new Map();

for (let i = 0; i < 7; i++) {
    hashmap.set(i, i + 10)

}

for (const [i, val] of hashmap.entries()) {
    console.log(i, val);
}


for (const i of hashmap.values()) {
    console.log(i);
}

for (const i of hashmap.keys()) {
    console.log(i);
}