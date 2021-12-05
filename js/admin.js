const $= document.querySelector.bind(document)
const $$= document.querySelectorAll.bind(document)

const drawer = $('.nav')
var navElements= $$('#container .nav .item')
var expandElements= $$('#container .nav .expand')
var children= $$('#container .nav .child')
var fragments= $$('.infor-wrapper .fragment')

// NAVIGATION
// Click toggle button, open or close the navigation panel
$('.toggle').onclick= function(){
    this.classList.toggle('active');
    drawer.classList.toggle('active');
    $('.logo').classList.toggle('active');
    children.forEach((child) => {
        child.classList.remove('active')
    })
}

// Click each menu item, change style and open its fragment
navElements.forEach((navElement, i) => {
    navElement.addEventListener('click', () =>{
        changeStyle(i);
        collapseFragments();
        openFragment(i);
    });
})

var changeStyle = function(manual){
    navElements.forEach((navElement) => {
        navElement.classList.remove('active')
    })
    navElements[manual].classList.add('active')
}

var openFragment= function(manual) {
    switch(manual) {
        case 0:
            fragments[manual].classList.add('active');
            break;
        case 1:
            fragments[1].classList.add('active');
            break;
        case 2:
            fragments[1].classList.add('active');
            break;
        case 3:
            fragments[2].classList.add('active');
            break;
        case 4:
            fragments[3].classList.add('active');
            break;
        case 5:
            fragments[3].classList.add('active');
            break;
        case 6:
            fragments[4].classList.add('active');
            break;
        case 7:
            fragments[5].classList.add('active');
            break;
        case 8:
            fragments[6].classList.add('active');
            break;
        case 9:
            fragments[7].classList.add('active');
            break;
    }
}

var collapseFragments= function() {
    fragments.forEach(function(fragment){
        if(fragment.classList.contains('active')){
            fragment.classList.remove('active');
            fragment.classList.add('inactive');
        }
        else if(fragment.classList.contains('inactive')){
            return;
        }
    })
}

//  Order and Product/Toggle Child
expandElements.forEach((element, index) => {
    element.onclick= function(){
        if(drawer.classList.contains('active')){
            children[index].classList.toggle('active')
        }
    }
})

// ORDER FRAGMENT/TABS NAVIGATION

const tabs = $$(".all-order .tab-item");
const tabActive = $(".all-order .tab-item.active");
const line = $(".all-order .tabs .line");

line.style.left = tabActive.offsetLeft + "px";
line.style.width = tabActive.offsetWidth + "px";

tabs.forEach((tab) => {
  tab.onclick = function () {
    $(".all-order .tab-item.active").classList.remove("active");

    line.style.left = this.offsetLeft + "px";
    line.style.width = this.offsetWidth + "px";
    this.classList.add("active");
  }
});

// ORDER/ICON EXPAND
const icExpands = $$('.infor-wrapper .order table tr .expand .iconify')
const childExpand= $('.infor-wrapper .order .child')
icExpands.forEach(function(element) {
    element.onclick= function(){
        element.classList.toggle('active')
        childExpand.classList.toggle('active')
    }
})