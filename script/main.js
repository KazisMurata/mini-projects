let prevBtn = document.querySelector('.prev');
let nextBtn = document.querySelector('.next');
let mainSlidesArea = document.querySelector('.slides');
let mainDots = document.getElementsByClassName('slide-dot');
let mainDotsArea = document.querySelector('.slider-dots');
let mainSlider = document.querySelector('.slider');
let miniDots = document.getElementsByClassName('mini-slide-dot');
let miniDotsArea = document.querySelector('.mini-slider-dots');
let miniSlidesArea = document.querySelector('.mini-slides');
let miniSlides = document.querySelector('.mini-slide');
let miniSlider = document.querySelector('.mini-slider');
let modal = document.getElementById('myModal');
let modContTitle = document.querySelector('.modal-content-title');
let modContText = document.querySelector('.modal-content-text');
let modCont = document.querySelector('.modal-content');
let moreBtn = document.querySelectorAll('.button');
let btnCloseModal = document.querySelectorAll('.modal-close');
let slides = document.querySelectorAll('.slide');
let modalImg = document.querySelector('.modal-img');
let sliderBtns = document.querySelectorAll('.slider-button');
let leftIndent = 0;

let interval = setInterval(function() {scrollFunc(-100)}, 3000);
let quantitySlides = slides.length;

mainSlidesArea.style.width = `${quantitySlides * 100}%`;
miniSlidesArea.style.width = `${quantitySlides * 100}%`;

for (let i = 0; i < quantitySlides; i++) {
  let createDotsMain = document.createElement('div');
  let createDotsMini = document.createElement('div');
  mainDotsArea.appendChild(createDotsMain);
  miniDotsArea.appendChild(createDotsMini);
  createDotsMini.className = "mini-slide-dot";
  createDotsMain.className = "slide-dot";
}

mainDots[0].classList.add('active');
miniDots[0].classList.add('active');

function scrollFunc(n) {
  leftIndent += n;
  
  if (leftIndent <= -(quantitySlides) * 100) {
    leftIndent = 0;
  } else if (leftIndent > 0) {
    leftIndent = -(quantitySlides - 1) * 100;
  }
  
  mainSlidesArea.style.left = `${leftIndent}%`;
  miniSlidesArea.style.left = `${leftIndent}%`;
  
  for (let dot of mainDots) {
    dot.classList.remove('active');
  }
  
  mainDots[-leftIndent / 100].classList.add('active');

  for (let dot of miniDots) {
    dot.classList.remove('active');
  }
  
  miniDots[-leftIndent / 100].classList.add('active');
}


function dotScrollFunc(n) {
  scrollFunc(leftIndent = -(n * 100 / 2));
}

prevBtn.addEventListener('click', function() {
  scrollFunc(100);
});

nextBtn.addEventListener('click', function() {
  scrollFunc(-100);
});

mainDotsArea.addEventListener('click', function(e) {
  for (let i = 0; i < mainDots.length; i++) {
    if (e.target.classList.contains('slide-dot') && e.target == mainDots[i]) {
      dotScrollFunc(i);
    }
  }
});

miniDotsArea.addEventListener('click', function(e) {
  for (let i = 0; i < miniDots.length; i++) {
    if (e.target.classList.contains('mini-slide-dot') && e.target == miniDots[i]) {
      dotScrollFunc(i);
    }
  }
});

mainSlider.addEventListener('mouseover', function() {
  for (let i = 0; i < sliderBtns.length; i++) {
    sliderBtns[i].style.opacity = "1";
  }
  clearInterval(interval);
});

miniSlider.addEventListener('mouseover', function() {
  clearInterval(interval);
});

mainSlider.addEventListener('mouseout', function() {
  for (let i = 0; i < sliderBtns.length; i++) {
    sliderBtns[i].style.opacity = "0";
  }
  interval = setInterval(function() {scrollFunc(-100)}, 3000);
});

for (let i = 0;i < moreBtn.length; i++) {
  moreBtn[i].addEventListener('click', function(e){
    let currentBtn = e.currentTarget;
    let modalTitle = currentBtn.parentElement.children[0].textContent;
    modContTitle.textContent = modalTitle;
    let modalContent = currentBtn.parentElement.children[1].textContent;
    modContText.textContent = modalContent;
    modal.style.display = "block";
    modCont.style.display = "block";
    modalImg.style.display = "none";
    clearInterval(interval);
  });
}

window.addEventListener('click', function(e) {
  if (e.target == modal) {
    modal.style.display = "none";
    interval = setInterval(function() {scrollFunc(-100)}, 3000); 
  }
})

for ( let i = 0; i < btnCloseModal.length; i++) {
  btnCloseModal[i].addEventListener('click', function(e) {
    modal.style.display = "none";
  });
}

modal.addEventListener('mouseover', function() {
  clearInterval(interval);
});

document.addEventListener('click', function(e) {
  for(let i = 0; i < slides.length; i++) {
    if (e.target === slides[i]) {     
      modalImg.style.backgroundImage = `url(./image/japan${[i]}.jpg)`;
      modalImg.style.display = "block";
      modal.style.display = "block";
      modCont.style.display = "none"; 
    }
  }
});