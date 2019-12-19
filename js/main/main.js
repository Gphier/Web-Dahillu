$(document).ready(function () {
    "use strict"
    /* Fullscreen*/
    var h = window.innerHeight;
    $(".fullscreen").css("height", h)
    /* sidenav */
    $('.sidenav').sidenav();
    /* Carousel */
    $('.carousel').carousel();
    $('.owl-carousel').owlCarousel({
        margin:10,
        loop:true,
        items:1,
    })
    /* Play Btn */
    $('.modal').modal({
        dismissible: true,
    });
    $('.materialboxed').materialbox();
    var cols = document.querySelectorAll('.grid-container');
    // console.log(cols);
    [].forEach.call(cols, (e) => {
        for (var i = e.children.length; i >= 0; i--) {
            e.appendChild(e.children[Math.random() * i | 0]);
        }
    });
});