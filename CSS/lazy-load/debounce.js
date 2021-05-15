function debounce(fn, await) {
    let timer = null;
    return function(...args) {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(this, args)
        }, await)
    }
}

function trouble(fn, await) {
    let timer = null;
    return function(...arg) {
        if (timer) return;
        timer = setTimeout(() => {
            timer = null;
            fn.apply(this, arg)
        }, await)
    }
}

function trouble1(fn, delay) {
    let last = 0;
    return function(...arg) {
        let now = +new Date();
        if (now - last >= delay) {
            fn.apply(this, arg);
            last = now;
        }
    }
}

function debounce1(fn, delay) {
    let timer = null,
        last = 0;
    return function() {
        const arg = [].slice.call(arguments);
        const context = this;
        let now = +new Date();
        if (now - last < delay) {
            clearTimeout(timer);
            timer = setTimeout(() => {
                last = now;
                fn.apply(context, arg);
            }, delay)
        } else {
            //超出了时间限制 直接执行函数
            last = now;
            fn.apply(context, arg);
        }
    }
}