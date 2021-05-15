const router = new Router();
router.init();
router.route('/', function() {
    document.getElementById('content').innerHTML = 'Home';
});
router.route('/about', function() {
    document.getElementById('content').innerHTML = 'About';
});
router.route('/topics', function() {
    document.getElementById('content').innerHTML = 'Topics';
});
console.log(router);