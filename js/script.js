$(document).ready(function () {
   $('.slider-big').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      arrows: false,
      asNavFor: '.slider-small',
   });

   $('.slider-small').slick({
      arrows: true,
      slidesToShow: 5,
      vertical: true,
      verticalSwiping: true,
      slidesToScroll: 1,
      asNavFor: '.slider-big',
      focusOnSelect: true,
      centerPadding: 0,
      infinite: false,
   });

   $('.slider-big__item').zoom();

   $('.burger').click(function (event) {
      $('.burger, .header__content-nav-list').toggleClass('active');
      $('body').toggleClass('lock');
   });
});

const hideText = document.querySelector('.about__info-rolling-up');
hideText.addEventListener('click', () => {
   hideText.classList.toggle('active');
   if (hideText.classList.contains('active')) {
      hideText.innerHTML = 'краткий текст';
      document.querySelector('.about__info-hidden').style.display = 'block';
   } else {
      hideText.innerHTML = 'полный текст';
      document.querySelector('.about__info-hidden').style.display = 'none';
   }
});


