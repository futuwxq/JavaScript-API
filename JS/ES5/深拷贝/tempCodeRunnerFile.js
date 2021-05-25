function deepClone(obj) {
    let result;
    if (typeof obj === 'object') {
        result = obj instanceof Array ? [] : {};
        for (let i in obj) result[i] = deepClone(obj[i])
    } else {
        result = obj;
    }
    return result;
}