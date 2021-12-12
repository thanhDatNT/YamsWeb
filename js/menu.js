"use strict";
(function(){
// Scroll reveal effect for #container
    
    function ShowProduct(){
        const slide= $('#bestseller .slider-product')
        const products= $$('#bestseller .slider-product .item')
        const prevBtn= $('#bestseller .indicator .prev')
        const nextBtn= $('#bestseller .indicator .next')
        var counter= 0
        const size= posts[0].clientWidth
        
        slide.style.transform= 'translateX('+ 0 +'px)';

        // Button listener
        nextBtn.addEventListener('click', () =>{
            if(counter >= posts.length -1) counter =-1;
            slide.style.transition = "transform 0.4s ease-in"
            counter++
            slide.style.transform= 'translateX('+ (-size * counter) +'px)';
            products[products.length-1].style.opacity= '1'
        })

        prevBtn.addEventListener('click', () =>{
            if(counter <= 0) return;
            slide.style.transition = "transform 0.4s ease-in-out"
            counter--
            slide.style.transform= 'translateX('+ (-size * counter) +'px)';
        })
    }
    ShowPost();
})()
