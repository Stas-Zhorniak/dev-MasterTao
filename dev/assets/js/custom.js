$(document).ready(function(){
  
  $('.slider-cont').slick({
    dots: true,

  });
});

const burger = document.querySelector('.hamburger');
burger.addEventListener('click', function(){
    burger.classList.toggle('is-active');
}
);

