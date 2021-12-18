"use strict";
(function(){
// Scroll reveal effect for #container
    function ScrollEvent(){
        ScrollReveal({
            reset:true,
            distance: '60px',
            duration: 2500, 
            delay:400
        })
        ScrollReveal().reveal('.main-title, #hightlight .content-box,#story .title, #story .image-box, #material .hr, #material .content .text, #policy .title, #policy .image-box', { delay: 400, origin:'left' });

        ScrollReveal().reveal('#banners .description, #hightlight .image-box, #story .hr, #story .content .text ,#material .title, #material .image-box,  #policy .hr, #policy .content .text', { delay: 300, origin:'right' });

        ScrollReveal().reveal('.container .item .person-item, #certi, #founder .title', { delay: 200, origin:'bottom', interval: 200});
  
    }
    ScrollEvent();
})()