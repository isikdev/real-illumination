let menu = $('.nav__links-mb');
$('.toggleMenu').on("click", function () {
    menu.toggleClass('nav__links-mb-active');
});
// $('.carousel').carousel({
//     interval: 1000
// })
$('.product__slider-img').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $('.carousel-control-prev'),
    nextArrow: $('.carousel-control-next'),
});
