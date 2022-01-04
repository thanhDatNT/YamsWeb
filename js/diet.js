// Scroll reveal effect for #container
(function ScrollEvent(){
  ScrollReveal({
      reset: true,
      distance: '60px',
      duration: 2500, 
      delay:400
  })
  ScrollReveal().reveal('.main-title', { delay: 400, origin:'left' });
  ScrollReveal().reveal('#banners .description', { delay: 500, origin:'right' });
})()

// =========BMI=======
var weightSlider = document.getElementById("myWeight");
var weightOutput = document.getElementById("inputWeight");
var heightSlider = document.getElementById("myHeight");
var heightOutput = document.getElementById("inputHeight");

// Display slider value
weightOutput.innerHTML = weightSlider.value;
heightOutput.innerHTML = heightSlider.value;

// Update sliders while dragging it
  weightSlider.oninput = function () {
  weightOutput.innerHTML = this.value;
}
heightSlider.oninput = function () {
  heightOutput.innerHTML = this.value;
}

// Change weight-slider value on weight-number, height-numer input
function showValWeight(newVal) {
  weightSlider.value=newVal;
};

function showValHeight(newVal) {
  heightSlider.value=newVal;
};

// *** Change number input when dragging slider ***
// Add 2 eventListeners for weight and input sliders
weightSlider.addEventListener("input", updateValueWeight);
heightSlider.addEventListener("input", updateValueHeight);

function updateValueWeight(e) {
  weightOutput.value = e.srcElement.value;
}

function updateValueHeight(e) {
  heightOutput.value = e.srcElement.value;
}

function calculateBmi() {
  var weight = document.bmiForm.realweight.value;
  var height = (document.bmiForm.realheight.value)/100;

  var bmi = (weight)/Math.pow(height, 2);

  var index = document.getElementById("indexBMI");
  var messageOutput = document.getElementById("status");
 
  var roundedBmi =  parseFloat(bmi).toFixed(2);
  index.innerHTML = roundedBmi;
  messageOutput.innerHTML = ""; // Clear message before calculating new BMI
  // Appropriate message for your BMI rating
  
  if (roundedBmi < 18) {
    messageOutput.innerHTML = "Gầy";
    suggestDiet(1)
  }
  else if (roundedBmi >= 18 && roundedBmi < 25) {
    messageOutput.innerHTML = "Cân đối";
    suggestDiet(2)
  }
  else  if ( roundedBmi >= 25 && roundedBmi < 30) {
    messageOutput.innerHTML= "Thừa cân";
    suggestDiet(3)
  }
  else  if ( roundedBmi >= 30) {
    messageOutput.innerHTML= "Béo phì";
    suggestDiet(4)
  }
  else{
    alert("Please Fill in everything correctly")
  }

}
// Đề xuất bánh
async function suggestDiet(tag){
  var flagBack = false;
  var loadMore = $('.load-more');

  $('#diet').style.display = "block";
  const products = await getProducts();

  // Get product list by key "diet" in data
  let diet_products = products.filter((product) => {
    return product.diet == tag
  });

  var partOne = diet_products.slice(0, 9);
  loadMoreProduct(partOne);
  
  loadMore.onclick = () =>{
    if(flagBack){
      loadMoreProduct(partOne);
      flagBack = false;
      loadMore.innerHTML = 'Xem thêm'
    }
    else{
      var partTwo = diet_products.slice(9, diet_products.length - 1);
      loadMoreProduct(partTwo);
      flagBack = true;
      loadMore.innerHTML = 'Trở lại';
    }
  }
}

function loadMoreProduct(diet_products){
  var item = diet_products.map(item => {
    return `<div class="item">
          <div class="product-item">
               <div class="tag">${item.tag}</div>
               <div class="thumb"><img src="${item.image}" alt=""></div>
               <div class='detail'>
                   <a href="product-detail.html?id=${item.id}" class="name" data-id="${item.id}">${item.name}</a>
                   <p class="price"><span class="iconify" data-icon="ion:pricetag"></span><del>${item.price}</del> ${item.currentPrice} <u>đ</u></p>
                   <a href="product-detail.html?id=${item.id}" class="add" data-id="${item.id}"><span class="iconify" data-icon="carbon:add-filled"></span></a>
               </div>
              </div>
          </div>`
  });
  var products = item.join('');
  $('#diet .diet__proposal .container').innerHTML = products;

  var tags = $$('#diet .diet__proposal .item .tag');
  var oldPrice = $$('#diet .diet__proposal .item del');
  tags.forEach((tag, i) => {
    if(tag.innerHTML == ''){
      tag.style.display = 'none';
    }
    else if(tag.innerHTML == 'Promo'){
      tag.style.fontSize = '1.2rem';
      oldPrice[i].style.display = 'inline-block';
    }
  })
}

function retype()
{
  var index = document.getElementById("indexBMI");
  var messageOutput = document.getElementById("status");
  messageOutput.innerHTML = "";
  index.innerHTML="";
  var containerDiet = document.querySelector("#diet"); 
  containerDiet.style.display = "none";
}
     