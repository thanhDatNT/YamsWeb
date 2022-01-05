(function(){
 
    // Scroll reveal effect for #container
      function ScrollEvent(){
          ScrollReveal({
              reset:true,
              distance: '60px',
              duration: 2500, 
              delay:400
          })
          ScrollReveal().reveal('.main-title', { delay: 400, origin:'left' });
          ScrollReveal().reveal('#banners .description', { delay: 500, origin:'right' });
          // ScrollReveal().reveal('.summary, #diet .diet__proposal .container .item .product-item, #review .slider-wrapper .post:not(:last-child)', { delay: 400, origin:'bottom', interval: 200});
          
      }
      
      ScrollEvent();
      
    })()



