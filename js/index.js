(function(){
    function SlideShow(){
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
// Scroll reveal effect for #container
    function ScrollEvent(){
        ScrollReveal({
            reset:false,
            distance: '60px',
            duration: 2500, 
            delay:400
        })
        ScrollReveal().reveal('.main-title, .title, #offer .left, #order .left', { delay: 400, origin:'left' });
        ScrollReveal().reveal('#banners .description, #offer .right', { delay: 500, origin:'right' });
        ScrollReveal().reveal('.summary, #bestseller .container .item, #review .slider-wrapper .post:not(:last-child)', { delay: 400, origin:'bottom', interval: 200});
        ScrollReveal().reveal('.hl-box .content-box', { delay: 500, origin:'left'});
        ScrollReveal().reveal('.hl-box .image-box, #order .center', { delay: 500, origin:'right' });
        ScrollReveal().reveal('#order .right', { delay: 600, origin:'right'});
    }
    
    function ShowPost(){
        const slide= $('#review .slider-post')
        const posts= $$('#review .slider-post .post')
        const prevBtn= $('#review .indicator .prev')
        const nextBtn= $('#review .indicator .next')
        var counter= 0
        const size= posts[0].clientWidth
        
        slide.style.transform= 'translateX('+ 0 +'px)';

        // Button listener
        nextBtn.addEventListener('click', () =>{
            if(counter >= posts.length -1) counter =-1;
            slide.style.transition = "transform 0.4s ease-in"
            counter++
            slide.style.transform= 'translateX('+ (-size * counter) +'px)';
            posts[posts.length-1].style.opacity= '1'
        })

        prevBtn.addEventListener('click', () =>{
            if(counter <= 0) return;
            slide.style.transition = "transform 0.4s ease-in-out"
            counter--
            slide.style.transform= 'translateX('+ (-size * counter) +'px)';
        })

        // slide.addEventListener('transitionend', function(){
        //     if(posts[counter].id === 'lastClone'){
        //         slide.style.transition = 'none'
        //         counter= 0
        //         slide.style.transform= 'translateX('+ (-size * counter) +'px)';
        //     }
        //     if(posts[counter].id === 'firstClone'){
        //         slide.style.transition = 'none'
        //         counter= posts.length - counter
        //         slide.style.transform= 'translateX('+ (-size * counter) +'px)';
        //     }
        // })
    }
    SlideShow();
    ScrollEvent();
    ShowPost();
    showBestSeller()
    async function showBestSeller(){
        const products = await getProducts();
        let new_products = products.filter((product) => {
          return product.tag == 'Top'
        });
        new_products = new_products.slice(0, 9);
          var item = new_products.map(item => {
                  return `<div class="item">
                  <div class="product-item">
                       <div class="tag">${item.tag}</div>
                       <div class="thumb"><img src="${item.image}" alt=""></div>
                       <div class='detail'>
                           <a href="product-detail.html?id=${item.id}" class="name" data-id="${item.id}">${item.name}</a>
                           <p class="price"><span class="iconify" data-icon="ion:pricetag"></span>${item.currentPrice} <u>đ</u></p>
                           <a href="product-detail.html?id=${item.id}" class="add" data-id="${item.id}"><span class="iconify" data-icon="carbon:add-filled"></span></a>
                       </div>
                      </div>
                  </div>`
          });
        var product = item.join('');
        $('#bestseller .container').innerHTML = product;
      }
})()
