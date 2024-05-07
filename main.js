function toggleElementDisplay(element) {
  element.style.display = (element.style.display === 'none') ? 'block' : 'none';
}

const elementEm = document.getElementById('forFunctionEm');
const elementEmPc = document.getElementById('forFunctionEmPc');
const elementBm = document.getElementById('divFunctionHamburguer');
const buttonHideEm = document.getElementById('ShowElement');
const buttonHideEmPc = document.getElementById('ShowElementPc');

function hideElementEm() {
    elementEm.classList.toggle('show');
    buttonHideEm.classList.toggle('transform');
}

function hideElementEmPc() {
  elementEmPc.classList.toggle('show');
  buttonHideEmPc.classList.toggle('transform');
}

const elementHeader = document.getElementById('header')
const overlayBack = document.getElementById('overlay_js');



function hideElementBmMenu() {

  if (elementBm.style.width === "0px") {
    elementBm.style.width = "60%";
  } else {
    elementBm.style.width = "0";
  }

  if (elementBm.style.width === "60%") {
    document.getElementById('icon_wpp_fixed').style.zIndex = "1";
    overlayBack.style.display = 'block';
    document.body.style.overflow = 'hidden';
  } else {
    overlayBack.style.display = 'none';
    document.body.style.overflow = '';
  }
}

// function hideElementBm() {
//   toggleElementDisplay(elementBm);
//   if(overlayBack.style.display === 'block'){
//     overlayBack.style.display = 'none';
//     document.body.style.overflow = '';
//   }

// }


function functionHoverAAndOverlay() {
  elementBm.style.width = (elementBm.style.width === '60%') ? '0' : '60%';
  overlayBack.style.display = 'none';
  document.body.style.overflow = '';
}

function functionHoverAD() {
  elementBm.style.display = (elementBm.style.display === 'block') ? 'none' : 'block';
  overlayBack.style.display = 'none';
  document.body.style.overflow = '';

  elementAd.style.display = 'block'
  buttonAd.style.display = 'none';
  div2.style.height = "44em";
}





var div2 = document.getElementById('div2');
var buttonAd = document.getElementById('hideShowElementAd');




let currentIndexDiv4 = 0;
const carousel = document.getElementById('div4Carousel');
  
function nextButtonDiv4() {
      currentIndexDiv4 = (currentIndexDiv4 + 2 ) % 6; // Avança 2 imagens por vez
      updateCarousel();
}

function updateCarousel() {
  carousel.style.transform = `translateX(${-currentIndexDiv4 * (100 / 3)}%)`;
}

 updateCarousel();


 if (window.innerWidth < 768) {
  currentIndexDiv4 = (currentIndexDiv4 + 2 ) % 3;
}
