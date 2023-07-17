const porcentajeHtml = document.getElementById ("porcentaje-html")
const imgHtml = document.getElementById ("html-img")
const porcentajeCss = document.getElementById ("porcentaje-css")
const imgCss = document.getElementById ("css-img")
const porcentajeJava = document.getElementById ("porcentaje-java")
const imgJava = document.getElementById ("java-img")
const porcentajeReact = document.getElementById ("porcentaje-react")
const imgReact = document.getElementById ("react-img")
const porcentajeAngular = document.getElementById ("porcentaje-angular")
const imgAngular = document.getElementById ("angular-img")

porcentajeHtml.style.display = "none"
porcentajeCss.style.display = "none"
porcentajeJava.style.display = "none"
porcentajeReact.style.display = "none"
porcentajeAngular.style.display = "none"

imgHtml.addEventListener("click", htmlLogo)
porcentajeHtml.addEventListener("click", porcentajehtml)
imgCss.addEventListener("click", cssLogo)
porcentajeCss.addEventListener("click", porcentajecss)
imgJava.addEventListener("click", javaLogo)
porcentajeJava.addEventListener("click", porcentajejava)
imgReact.addEventListener("click", reactLogo)
porcentajeReact.addEventListener("click", porcentajereact)
imgAngular.addEventListener("click", angularLogo)
porcentajeAngular.addEventListener("click", porcentajeangular)

function htmlLogo(){
  porcentajeHtml.style.display = "flex"
  imgHtml.style.display = "none"
}

function porcentajehtml(){
  porcentajeHtml.style.display = "none"
  imgHtml.style.display = "flex"
}

function cssLogo(){
  porcentajeCss.style.display = "flex"
  imgCss.style.display = "none"
}

function porcentajecss(){
  porcentajeCss.style.display = "none"
  imgCss.style.display = "flex"
}

function javaLogo(){
  porcentajeJava.style.display = "flex"
  imgJava.style.display = "none"
}

function porcentajejava(){
  porcentajeJava.style.display = "none"
  imgJava.style.display = "flex"
}

function reactLogo(){
  porcentajeReact.style.display = "flex"
  imgReact.style.display = "none"
}

function porcentajereact(){
  porcentajeReact.style.display = "none"
  imgReact.style.display = "flex"
}

function angularLogo(){
  porcentajeAngular.style.display = "flex"
  imgAngular.style.display = "none"
}

function porcentajeangular(){
  porcentajeAngular.style.display = "none"
  imgAngular.style.display = "flex"
}



//ACA COMIENZA EL CODIGO DEL CARRUSEL DE IMAGENES DE LA PAGINA DE MAQUILLAJE//
const carouselContainer = document.querySelector('.carousel-container');
const carouselSlide = document.querySelector('.carousel-slide');

let slideIndex = 0;

function showSlide(index) {
  carouselSlide.style.transform = `translateX(${-index * 100}%)`;
}

function nextSlide() {
  slideIndex++;
  if (slideIndex >= carouselSlide.children.length) {
    slideIndex = 0;
  }
  showSlide(slideIndex);
}

function startCarousel() {
  setInterval(nextSlide, 5000); 
}

startCarousel();
//ACA TERMINA EL CODIGO DEL CARRUSEL DE IMAGENES DE LA PAGINA DE MAQUILLAJE//



//ACA COMIENZA CODIGO DEL CARRUSEL DE IMAGENES DE LA PAGINA DE MUEBLES//
const carouselContainer1 = document.querySelector('.carousel-container-muebles');
const carouselSlide1 = document.querySelector('.carousel-slide-muebles');

let slideIndex1 = 0;

function showSlide1(index) {
  carouselSlide1.style.transform = `translateX(${-index * 100}%)`;
}

function nextSlide1() {
  slideIndex1++;
  if (slideIndex1 >= carouselSlide1.children.length) {
    slideIndex1 = 0;
  }
  showSlide1(slideIndex1);
}

function startCarousel1() {
  setInterval(nextSlide1, 5000); 
}

startCarousel1();
//ACA TERMINA CODIGO DEL CARRUSEL DE IMAGENES DE LA PAGINA DE MUEBLES//



//ACA COMIENZA CODIGO DEL CARRUSEL DE IMAGENES DE LA PAGINA DE SNAKE//
const carouselContainer2 = document.querySelector('.carousel-container-snake');
const carouselSlide2 = document.querySelector('.carousel-slide-snake');

let slideIndex2 = 0;

function showSlide2(index) {
  carouselSlide2.style.transform = `translateX(${-index * 100}%)`;
}

function nextSlide2() {
  slideIndex2++;
  if (slideIndex2 >= carouselSlide2.children.length) {
    slideIndex2 = 0;
  }
  showSlide2(slideIndex2);
}

function startCarousel2() {
  setInterval(nextSlide2, 5000); 
}

startCarousel2();
//ACA TERMINA CODIGO DEL CARRUSEL DE IMAGENES DE LA PAGINA DE SNAKE//



//ACA COMIENZA CODIGO DEL CARRUSEL DE IMAGENES DE LA PAGINA DE CALCULADORA//
const carouselContainer3 = document.querySelector('.carousel-container-calculadora');
const carouselSlide3 = document.querySelector('.carousel-slide-calculadora');

let slideIndex3 = 0;

function showSlide3(index) {
  carouselSlide3.style.transform = `translateX(${-index * 100}%)`;
}

function nextSlide3() {
  slideIndex3++;
  if (slideIndex3 >= carouselSlide3.children.length) {
    slideIndex3 = 0;
  }
  showSlide3(slideIndex3);
}

function startCarousel3() {
  setInterval(nextSlide3, 5000); 
}

startCarousel3();
//ACA TERMINA CODIGO DEL CARRUSEL DE IMAGENES DE LA PAGINA DE CALCULADORA//


//ACA COMIENZA CODIGO DEL CARRUSEL DE IMAGENES DE LA PAGINA DE PLANETAS//
const carouselContainer4 = document.querySelector('.carousel-container-planetas');
const carouselSlide4 = document.querySelector('.carousel-slide-planetas');

let slideIndex4 = 0;

function showSlide4(index) {
  carouselSlide4.style.transform = `translateX(${-index * 100}%)`;
}

function nextSlide4() {
  slideIndex4++;
  if (slideIndex4 >= carouselSlide4.children.length) {
    slideIndex4 = 0;
  }
  showSlide4(slideIndex4);
}

function startCarousel4() {
  setInterval(nextSlide4, 5000); 
}

startCarousel4();
//ACA TERMINA CODIGO DEL CARRUSEL DE IMAGENES DE LA PAGINA DE PLANETAS//

//ACA COMIENZA CODIGO DEL CARRUSEL DE IMAGENES DE LA PAGINA DE PERROS//
const carouselContainer5 = document.querySelector('.carousel-container-perros');
const carouselSlide5 = document.querySelector('.carousel-slide-perros');

let slideIndex5 = 0;

function showSlide5(index) {
  carouselSlide5.style.transform = `translateX(${-index * 100}%)`;
}

function nextSlide5() {
  slideIndex5++;
  if (slideIndex5 >= carouselSlide5.children.length) {
    slideIndex5 = 0;
  }
  showSlide5(slideIndex5);
}

function startCarousel5() {
  setInterval(nextSlide5, 5000); 
}

startCarousel5();
//ACA TERMINA CODIGO DEL CARRUSEL DE IMAGENES DE LA PAGINA DE PERROS//

//ACA COMIENZA CODIGO DEL CARRUSEL DE IMAGENES DE LA PAGINA DE CONECTA//
const carouselContainer6 = document.querySelector('.carousel-container-conecta');
const carouselSlide6 = document.querySelector('.carousel-slide-conecta');

let slideIndex6 = 0;

function showSlide6(index) {
  carouselSlide6.style.transform = `translateX(${-index * 100}%)`;
}

function nextSlide6() {
  slideIndex6++;
  if (slideIndex6 >= carouselSlide6.children.length) {
    slideIndex6 = 0;
  }
  showSlide6(slideIndex6);
}

function startCarousel6() {
  setInterval(nextSlide6, 5000); 
}

startCarousel6();
//ACA TERMINA CODIGO DEL CARRUSEL DE IMAGENES DE LA PAGINA DE CONECTA//


//ACA COMIENZA CODIGO DEL CARRUSEL DE IMAGENES DE LA PAGINA DE CIUDADES//
const carouselContainer7 = document.querySelector('.carousel-container-ciudades');
const carouselSlide7 = document.querySelector('.carousel-slide-ciudades');

let slideIndex7 = 0;

function showSlide7(index) {
  carouselSlide7.style.transform = `translateX(${-index * 100}%)`;
}

function nextSlide7() {
  slideIndex7++;
  if (slideIndex7 >= carouselSlide7.children.length) {
    slideIndex7 = 0;
  }
  showSlide7(slideIndex7);
}

function startCarousel7() {
  setInterval(nextSlide7, 5000); 
}

startCarousel7();
//ACA TERMINA CODIGO DEL CARRUSEL DE IMAGENES DE LA PAGINA DE CIUDADES//


//ACA COMIENZA CODIGO DEL CARRUSEL DE IMAGENES DE LA PAGINA DE APARTAMENTOS//
const carouselContainer8 = document.querySelector('.carousel-container-apartamentos');
const carouselSlide8 = document.querySelector('.carousel-slide-apartamentos');

let slideIndex8 = 0;

function showSlide8(index) {
  carouselSlide8.style.transform = `translateX(${-index * 100}%)`;
}

function nextSlide8() {
  slideIndex8++;
  if (slideIndex8 >= carouselSlide8.children.length) {
    slideIndex8 = 0;
  }
  showSlide8(slideIndex8);
}

function startCarousel8() {
  setInterval(nextSlide8, 5000); 
}

startCarousel8();
//ACA TERMINA CODIGO DEL CARRUSEL DE IMAGENES DE LA PAGINA DE APARTAMENTOS//  
