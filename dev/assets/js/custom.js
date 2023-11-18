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

document.getElementById('file').onchange = function () {
  document.getElementById('file-name').innerHTML = this.value;
}

const checkButton = document.querySelectorAll('[type="checkbox"]');


checkButton.forEach (item => {
  item.closest('.input-box').classList.add('checkbox-padding')
})

mobileOnlySlider("#advantages-slider", true, false, 991);

function mobileOnlySlider ($slidername, $dots, $arrows, $breakpoint){
  var slider = $($slidername);
  var settings = {
    mobileFirst: true,
    dots: $dots,
    arrows: $arrows,
    responsive: [
      {
        breakpoint: $breakpoint,
        settings: 'unslick'
      }
    ]
  };

  slider.slick(settings);

  $(window).on("resize", function() {
    if ($(window).width() > $breakpoint) {
      return;
    }
    if (!slider.hasClass("slick-initialized")) {
      return slider.slick(settings);
    }
  });
}