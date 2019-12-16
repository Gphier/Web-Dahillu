$(document).ready(function () {
    "use strict"
    /* Fullscreen*/
    var h = window.innerHeight;
    $(".fullscreen").css("height", h)
    /* sidenav */
    $('.sidenav').sidenav();
    /* Carousel */
    $('.carousel').carousel();
    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: true
      });
    /* Play Btn */
    $('.modal').modal({
        dismissible: true,
    });
});