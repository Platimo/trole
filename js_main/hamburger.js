var hamburger_items = document.getElementsByClassName('js__hamburger');
var hamburger = document.getElementById('hamburger');

hamburger.addEventListener('click', function () {
	for (var i = 0; i < hamburger_items.length; i++) {
        hamburger_items[i].classList.toggle('--active');
	}
});
