/**
 * History模式，
 * 可以使用history.pushState,history.replaceState来控制url地址,history.pushState() 和 history.replaceState() 的区别在于：
 * history.pushState() 在保留现有历史记录的同时，将 url 加入到历史记录中。
 * history.replaceState() 会将历史记录中的当前页面历史替换为 url。
 */
class Router {
    constructor() {
        this.routes = {};
        this.currentUrl = '';
    }
    route(path, callback) {
        this.routes[path] = callback || function() {};
    }
    updateView(url) {
        this.currentUrl = url;
        this.routes[this.currentUrl] && this.routes[this.currentUrl]();
    }
    bindLink() {
        const allLink = document.querySelectorAll('a[data-href]');
        for (let i = 0, len = allLink.length; i < len; i++) {
            const current = allLink[i];
            current.addEventListener(
                'click',
                e => {
                    e.preventDefault();
                    const url = current.getAttribute('data-href');
                    history.pushState({}, null, url);
                    this.updateView(url);
                },
                false
            );
        }
    }
    init() {
        this.bindLink();
        window.addEventListener('popstate', e => {
            this.updateView(window.location.pathname);
        });
        window.addEventListener('load', () => this.updateView('/'), false);
    }
}