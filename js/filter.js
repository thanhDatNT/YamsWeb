function ScrollEvent(){
    ScrollReveal({
        reset: true,
        distance: '60px',
        duration: 2500, 
        delay:400
    })

    ScrollReveal().reveal('.banners .main-title, #combo .left', { delay: 200, origin:'left' });
    ScrollReveal().reveal('.banners .description, #combo .right', { delay: 200, origin:'right' });
    ScrollReveal().reveal('.all-product .container .item', { delay: 200, origin:'bottom', interval: 200});
    ScrollReveal().reveal('#new .text, #offer-pro .flavour-content', { delay: 200, origin:'left'});
    ScrollReveal().reveal('#new .flavour-content, #offer-pro .text, #offer-pro .title, #box .text', { delay: 100, origin:'right' });
    ScrollReveal().reveal('#macaron .title, #cheese-cake .title, #pudding .title, #tiramisu .title', { delay: 100, origin:'bottom'});
}

// Important
window.onhashchange = function(){
   
    window.scrollTo(0, 0);
    location.reload();
    window.onload();
}

