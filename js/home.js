const $= document.querySelector.bind(document)
const $$= document.querySelectorAll.bind(document)

const searchIcon= $('#search-icon')
const searchInput= $('#search-input')
const findBtn= $('#find-btn')

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