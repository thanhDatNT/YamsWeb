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


function sum1(){
    // var p1 = parseFloat(document.form_cart.quality_cart.value);
     var price = parseFloat(document.form_cart.price1.value);
    var p1 = document.getElementById("quantity").value;
    
    console.log(price);
   

    p1 = parseFloat(p1);
    
    // var sum = p1 * price;

    // document.cart_form.total1.value = sum ;
    // return sum;
}