$(document).ready(function(){
  $('.slider-cont').slick({
     dots: true,
     appendArrows: '.first-screen-nav',

     responsive: [
      {
        breakpoint: 991,
        settings: {
          arrows: false,
        }
      },
    ]

  });
});

const burger = document.querySelector('.hamburger');
burger.addEventListener('click', function(){
    burger.classList.toggle('is-active');
}
);

