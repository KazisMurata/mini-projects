var buttonsShow = document.querySelectorAll('button');
var buttonsHide = document.querySelectorAll('.popup-close');
var popupsWrapper = document.querySelectorAll('.popup-wrapper');
var popupsInner = document.querySelectorAll('.popup-inner');

for (var i = 0; i < buttonsShow.length; i++) {
	buttonsShow[i].onclick = function(){
		document.getElementById('popup' + this.dataset.popup).style.display = 'block';
	}
}

for (var i = 0; i < buttonsHide.length; i++) {
	buttonsHide[i].onclick = function(event){
		event.preventDefault();
		event.target.parentNode.parentNode.style.display = 'none';
	}
}

for (var i = 0; i < popupsInner.length; i++) {
	popupsInner[i].onclick = function(event){
		event.stopPropagation();
	}
}

for (var i = 0; i < popupsWrapper.length; i++) {
	popupsWrapper[i].onclick = function(){
		this.style.display = 'none';
	}
}
