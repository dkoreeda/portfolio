function changeOpacity(x){
  x.style.opacity = 0.5;
}

function returnOpacity(x){
  x.style.opacity = 1;
}

// inicio: slide 1
var slideIndex = 1;
console.log("SlideIndex", slideIndex);

// chama funcao que determina a funcionalidade do slideshow
showSlides(slideIndex);

// funcao chamada no projects.html qdo ha clique em >
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// funcao chamada no projects.html qdo ha clique em <
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// funcao que determina animacao do slideshow
function showSlides(n) {
  //contador i
  var i;

  //scaneia todo o documento em busca de slides com classe mySlides
  var slides = document.querySelectorAll(".mySlides");
  console.log("slides", slides.length);
  var dots = document.querySelectorAll(".dot");
  console.log("dots", dots.length);
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = 'block';
  console.log(slides[slideIndex-1]);
  dots[slideIndex-1].className += " active";
}

//nav bad - mostrar qual link esta selecionado


