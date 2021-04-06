var slideIndex = 0;
showSlides();
var slides,dots;

function plusSlides(position) {
    slideIndex += position;
    if (slideIndex > slides.length) {slideIndex = 1}
    else if(slideIndex < 1){slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");

      }
        slides[slideIndex-1].style.display = "block";  
        dots[slideIndex-1].className += " active";
    }

function currentSlide(index) {
    if (index > slides.length) {index = 1}
    else if(index < 1){index = slides.length}
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
        slides[index-1].style.display = "block";  
        dots[index-1].className += " active";
    }

function showSlides() {
    var i;
    slides = document.getElementsByClassName("mySlides");
    dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 6000); // Change image every 3 seconds
}


var menu = document.querySelector('#menu');
var sidebar = document.querySelector('.sidebar');
var cross = document.querySelector('#close');
var back = document.querySelector('#back');
var find = document.querySelector('#find');
var searchbar = document.querySelector('.searchbar');
var sidebarshadow = document.querySelector('.sidebarshadow');

menu.addEventListener('click',function(){
  sidebar.style.left = '0'
  sidebar.style.display = 'flex'
  sidebarshadow.style.display = 'initial'
})
sidebarshadow.addEventListener('click',function(){
 sidebar.style.left = '-100%'
 sidebar.style.display = 'none'
 sidebarshadow.style.display = 'none'
})

cross.addEventListener('click',function(){
  sidebar.style.display = 'none'
  sidebarshadow.style.display = 'none'
  sidebar.style.left = '-100%'
})

find.addEventListener('click',function(){
  searchbar.style.display = 'flex'
  searchbar.style.right = '0'
})

back.addEventListener('click',function(){
  searchbar.style.display = 'none'
  searchbar.style.right = '-100%'
})




