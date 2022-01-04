"use strict";
function g(){
// Scroll reveal effect for #container
    function ScrollEvent(){
        ScrollReveal({
            reset:true,
            distance: '60px',
            duration: 2500, 
            delay:400
        })

        ScrollReveal().reveal('#banners .main-title', { delay: 50, origin:'left' });
        ScrollReveal().reveal('#banners .description', { delay: 50, origin:'right' });
        //ScrollReveal().reveal('.main-title, .title, #offer .left, #order .left', { delay: 50, origin:'left' });
        //ScrollReveal().reveal('#banners .description, #offer .right', { delay: 50, origin:'right' });
        //ScrollReveal().reveal('.container .item .product-item', { delay: 50, origin:'bottom', interval: 50});
        //ScrollReveal().reveal('.hl-box .content-box, #new .text, #offer .flavour-content', { delay: 50, origin:'left'});
        //ScrollReveal().reveal('.hl-box .image-box, #order .center, #new .flavour-content, #offer .text, #view-all, #offer .title, #box .text, #box .content .title', { delay: 50, origin:'right' });
        //ScrollReveal().reveal('#macaron .title, #cheesecake .title, #pudding .title, #tiramisu .title', { delay: 50, origin:'bottom', interval: 100});
    }
    ScrollEvent();
}

// Important
window.onhashchange = window.onload
