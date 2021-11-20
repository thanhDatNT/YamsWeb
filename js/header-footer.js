const $= document.querySelector.bind(document)
const $$= document.querySelectorAll.bind(document)
// =======Search area===========
const searchIcon= $('#search-icon')
const searchInput= $('#search-input')
const findBtn= $('#find-btn')

// Immediately invoked function expression (IIFE)
;(function(){
    if(screen.width < 500){
        findBtn.style.display= 'none'
        searchIcon.style.display = 'none'
    }
    else{
        searchIcon.onclick = function(){
            searchInput.style.transform = 'scaleX(1)'
            searchIcon.style.display = 'none'
            findBtn.style.display = 'inline-block'
        }
        
        searchInput.onblur = function(){
            searchInput.style.transform = 'scaleX(0)'
            findBtn.style.display= 'none'
            searchIcon.style.display = 'inline-block'
        }
        
        findBtn.onclick= function(){
            searchInput.style.transform = 'scaleX(0)'
            findBtn.style.display= 'none'
            searchIcon.style.display = 'inline-block'
        }
    }
})()

// Catching scrolling event (px) => Header animation
document.onscroll= function(){
    var navElement= $('header nav')
    if(window.scrollY >100 || document.documentElement.scrollTop > 100){
        navElement.style.transform= "translateY(-60px)"
        if(window.scrollY > 640 || document.documentElement.scrollTop > 640){
            navElement.style.display= "block"
            navElement.style.position= 'fixed'
            navElement.style.top= "0"
            navElement.style.transform= "translateY(0)"
        }
    }else{
        navElement.style.position= 'relative'
        navElement.style.transform= "translateY(0)"
    }
}

