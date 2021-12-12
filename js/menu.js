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
        ScrollReveal().reveal('.main-title, .title, #offer .left, #order .left', { delay: 400, origin:'left' });
        ScrollReveal().reveal('#banners .description, #offer .right', { delay: 300, origin:'right' });
        ScrollReveal().reveal('.container .item .product-item, #review .slider-wrapper .post:not(:last-child)', { delay: 200, origin:'bottom', interval: 200});
        ScrollReveal().reveal('.hl-box .content-box, #new .text, #offer .flavour-content', { delay: 200, origin:'left'});
        ScrollReveal().reveal('.hl-box .image-box, #order .center, #new .flavour-content, #offer .text, #view-all, #offer .title', { delay: 200, origin:'right' });
        ScrollReveal().reveal('#macaron .title, #cheesecake .title, #pudding .title, #tiramisu .title', { delay: 200, origin:'bottom', interval: 200});
    }
    ScrollEvent();
})()

const productItem= $$('#bestseller .product-item')
productItem.forEach(function(product){
    product.onclick= function(){
        window.location.href= 'product-detail.html'
    }
})

const btnAddtoCart= $('#bestseller .item .product-item .add')
btnAddtoCart.onclick= function(e){
    e.preventDefault()
}
