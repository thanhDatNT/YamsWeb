"use strict";

function slideShow(){
    const images= $$('#banners .slider-item')
    var i=1;
    var current;
    setInterval(function(){
        if(i == 0){
            current = i
            images[images.length-1].style.display= 'none'
            images[i].style.display= 'block'
            images[current].style.opacity= '1'
            i++
        }
        else if(i >0){
            current = i
            images[i].style.display= 'block'
            images[current].style.opacity= '1'
            images[i-1].style.display= 'none'
            i++
            if(i == images.length){i=0}
        }
        setTimeout(function(){
            images[current].style.opacity= '0.8'
        }, 4000)
    }, 5000)
}

function showPost(){
    const indicators= $$('#review .wrapper .indicator input')
    const postFirst= $('#review .wrapper .slider-wrapper .slider-post .first')
    if(indicators[1].checked) {
        postFirst.style.display= "none"
    }
    else if (indicators[0].checked){postFirst.style.display="block"}
    
}

slideShow();
showPost();
