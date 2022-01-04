"use strict";
(function(){
// Scroll reveal effect for #container
    function ScrollEvent(){
        ScrollReveal({
            reset: false,
            distance: '60px',
            duration: 2500, 
            delay:50
        })
        ScrollReveal().reveal('.main-title', { delay: 50, origin:'left' });
        ScrollReveal().reveal('#banners .description', { delay: 50, origin:'right' });
    }
    ScrollEvent();
})()

