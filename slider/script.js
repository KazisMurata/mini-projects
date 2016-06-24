var sliderInner = document.querySelector('.inner');
var imageCount = sliderInner.querySelectorAll('img').length;
var arrowLeft = document.querySelector('#arrowLeft');
var arrowRight = document.querySelector('#arrowRight');
var sliderWidth = document.querySelector('.wrapper').clientWidth;

function checkButton() {
	var currentMargin = parseInt(sliderInner.style.marginLeft || 0);
	arrowLeft.style.display = (currentMargin == 0) ? 'none': 'block';
	arrowRight.style.display = (currentMargin == -1200) ? 'none': 'block';
}

checkButton();

arrowRight.onclick = function(event) {
	event.preventDefault();
	var currentMargin = parseInt(sliderInner.style.marginLeft || 0);
	if (currentMargin != (imageCount-1)*-600) {
		sliderInner.style.marginLeft = currentMargin - 600 + 'px';
		checkButton();
	}
}

arrowLeft.onclick = function(event) {
	event.preventDefault();
	var currentMargin = parseInt(sliderInner.style.marginLeft || 0);
	if (currentMargin != 0) {
		sliderInner.style.marginLeft = currentMargin + 600 + 'px';
		checkButton();
	}
}