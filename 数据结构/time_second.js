/**
 * 时分秒（00:00:00） 转为 时间戳
 */
function time_to_sec(time) {
    const [h, m, s] = time.split(':')
    return Number(h * 3600) + Number(m * 60) + Number(s)
}

// console.log(time_to_sec('00:10:30'));

/**
 * 时间戳 格式化为 时分秒（00:00:00）
 */

function sec_to_time(sec) {
    let h = parseInt(sec / 3600 % 24);
    h = h < 10 ? 0 + h : h;
    let m = parseInt(sec / 60 % 60);
    m = m < 10 ? 0 + m : m;
    let s = parseInt(sec % 60);
    s = s < 10 ? 0 + s : s;
    return `${h}:${m}:${s}`
}

console.log(sec_to_time(630));