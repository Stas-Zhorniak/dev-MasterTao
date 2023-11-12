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
console.log (checkButton);

checkButton.forEach (item => {
  item.closest('.input-box').classList.add('checkbox-padding')
})