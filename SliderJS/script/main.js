let mainSlidesArea = document.querySelectorAll('.slides');
let mainSlider = document.querySelectorAll('.slider');
let miniSlidesArea = document.querySelector('.mini-slides');
let miniSlides = document.querySelector('.mini-slide');
let miniSlider = document.querySelector('.mini-slider');
let modal = document.getElementById('myModal');
let modContTitle = document.querySelector('.modal-content-title');
let modContText = document.querySelector('.modal-content-text');
let modCont = document.querySelector('.modal-content');
let moreBtn = document.querySelectorAll('.button');
let btnCloseModal = document.querySelector('.modal-close');
let slides = document.querySelectorAll('.slide');
let modalImg = document.querySelector('.modal-img');

let leftIndent = 0;

let interval = setInterval(function() {scrollFunc(-100)}, 3000);

let quantitySlides = mainSlidesArea[0].children.length;

for (let i = 0; i < mainSlidesArea.length; i++) {
  for (let j = 0; j < mainSlidesArea[i].children.length; j++) {
    mainSlidesArea[i].children[j].style.backgroundImage = `url(./image/japan${[j]}.jpg)`;
  }
}

for (let i = 0; i < mainSlidesArea.length; i++) {
  mainSlidesArea[i].style.width = `${quantitySlides * 100}%`;
  miniSlidesArea.style.width = `${quantitySlides * 100}%`;
}

for (let i = 0; i < mainSlider.length; i++) {
  let mainDotsArea = document.createElement('div');
  mainDotsArea.className = "slider-dots";
  mainSlider[i].appendChild(mainDotsArea);
}

let mainDotsArea = document.querySelectorAll('.slider-dots');

let miniDotsArea = document.createElement('div');
miniDotsArea.className = "mini-slider-dots";
miniSlider.appendChild(miniDotsArea);

for (let slider of mainSlider) {
  let prevBtn = document.createElement('div');
  let nextBtn = document.createElement('div');
  prevBtn.textContent = "<";
  nextBtn.textContent = ">";
  prevBtn.className = "slider-button prev";
  nextBtn.className = "slider-button next";
  slider.appendChild(nextBtn);
  slider.appendChild(prevBtn);
}

let sliderBtns = document.querySelectorAll('.slider-button');
let prevBtn = document.querySelectorAll('.prev');
let nextBtn = document.querySelectorAll('.next');

for (let i = 0; i < mainDotsArea.length; i++) {
  for (let j = 0; j < quantitySlides; j++) {
    let createDotsMain = document.createElement('div');
    mainDotsArea[i].appendChild(createDotsMain);
    createDotsMain.className = "slide-dot";
  }
}

for (let i = 0; i < quantitySlides; i++) {
  let createDotsMini = document.createElement('div');
  miniDotsArea.appendChild(createDotsMini);
  createDotsMini.className = "mini-slide-dot";
}

let mainDots = document.querySelectorAll('.slide-dot');
let miniDots = document.querySelectorAll('.mini-slide-dot');

for (let dot of mainDotsArea) {
  dot.children[0].classList.add('active');
}

miniDots[0].classList.add('active');

function scrollFunc(n) {
  leftIndent += n;
  
  if (leftIndent <= -(quantitySlides) * 100) {
    leftIndent = 0;
  } else if (leftIndent > 0) {
    leftIndent = -(quantitySlides - 1) * 100;
  }
  
  for (let i = 0; i < mainSlidesArea.length; i++) {
    mainSlidesArea[i].style.left = `${leftIndent}%`;
    miniSlidesArea.style.left = `${leftIndent}%`;
  }
  
  for (let dot of mainDots) {
    dot.classList.remove('active');
  }
  
  for (let dot of mainDotsArea) {
    dot.children[-leftIndent / 100].classList.add('active');
  }
  
  for (let dot of miniDots) {
    dot.classList.remove('active');
  }
  
  miniDots[-leftIndent / 100].classList.add('active');
}


function dotScrollFunc(n) {
  scrollFunc(leftIndent = -(n * 100 / 2));
}


document.addEventListener('click', function(e) {
  if (e.target.classList.contains('next')) {
    scrollFunc(-100);
  } else if (e.target.classList.contains('prev')) {
    scrollFunc(100);
  }

  if (e.target.classList.contains('slide-dot')) {
    for (let i = 0; i < mainDotsArea.length; i++) {
      for (let j = 0; j < quantitySlides; j++) {
        if (e.target.classList.contains('slide-dot') && e.target == mainDotsArea[i].children[j]) {
          dotScrollFunc(j);
        }
      }
    }  
  }
  
  if (e.target.classList.contains('slide')) {
    for(let i = 0; i < mainSlidesArea.length; i++) {
      for(let j = 0; j < mainSlidesArea[i].children.length; j++) {
        if (e.target === mainSlidesArea[i].children[j]) {     
          modalImg.style.backgroundImage = `url(./image/japan${[j]}.jpg)`;
          modalImg.style.display = "block";
          modal.style.display = "block";
          modCont.style.display = "none"; 
        }
      }
    }
  }
  
  if (e.target.classList.contains('button')) {
    for (let i = 0; i < moreBtn.length; i++) {
      if (e.target === moreBtn[i]) {
        let currentBtn = e.target;
        let modalTitle = currentBtn.parentElement.children[0].textContent;
        modContTitle.textContent = modalTitle;
        let modalContent = currentBtn.parentElement.children[1].textContent;
        modContText.textContent = modalContent;
        modal.style.display = "block";
        modCont.style.display = "block";
        modalImg.style.display = "none";
        clearInterval(interval);
      }
    }
  }

  if (e.target.classList.contains('mini-slide-dot')) {
    for (let i = 0; i < miniDots.length; i++) {
      if (e.target.classList.contains('mini-slide-dot') && e.target == miniDots[i]) {
        dotScrollFunc(i);
      }
    }  
  }

  if (e.target.classList.contains('modal-close')) {
    modal.style.display = "none";
  }
});


document.addEventListener('mouseover', function(e) {
  if (e.target.classList.contains('slide') || e.target.classList.contains('next') || e.target.classList.contains('prev')) {
    for (let i = 0; i < mainSlider.length; i++) {    
      nextBtn[i].style.opacity = "1";
      prevBtn[i].style.opacity = "1";     
    }
    clearInterval(interval);
  }

  if (e.target.classList.contains('modal') || e.target.classList.contains('modal-img') || e.target.classList.contains('modal-content')) {
    clearInterval(interval);
  }
});


miniSlider.addEventListener('mouseover', function() {
  clearInterval(interval);
});


document.addEventListener('mouseout', function(e) {
  if (e.target.classList.contains('slide')  || e.target.classList.contains('next') || e.target.classList.contains('prev')) {
    for (let i = 0; i < mainSlider.length; i++) {
      nextBtn[i].style.opacity = "0";
      prevBtn[i].style.opacity = "0";
    }
    interval = setInterval(function() {scrollFunc(-100)}, 3000);
  }
});


window.addEventListener('click', function(e) {
  if (e.target == modal) {
    modal.style.display = "none";
    interval = setInterval(function() {scrollFunc(-100)}, 3000); 
  }
})
