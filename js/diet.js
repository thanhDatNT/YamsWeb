
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
      // var roundedBmi = realbmi.toFixed(1);
     
      var roundedBmi =  parseFloat(bmi).toFixed(2);
      index.innerHTML = roundedBmi;
      messageOutput.innerHTML = ""; // Clear message before calculating new BMI
      // Appropriate message for your BMI rating
      if (roundedBmi > 0 && roundedBmi < 16) {
        messageOutput.innerHTML = "Quá gầy";
      }
      else if (roundedBmi > 16 && roundedBmi < 18) {
        messageOutput.innerHTML = "Gầy";
      }
      else if (roundedBmi >= 18 && roundedBmi < 25) {
        messageOutput.innerHTML = "Cân đối";
      }
      else  if ( roundedBmi >= 25 && roundedBmi < 30) {
        messageOutput.innerHTML= "Thừa cân";
      }
      else  if ( roundedBmi >= 30) {
        messageOutput.innerHTML= "Béo phì";
      }
      else{
        alert("Please Fill in everything correctly")
      }
    
    }
    // Đề xuất bánh
    function suggestdiet(){
    
      var containerDiet = document.querySelector("#diet"); 
      containerDiet.style.display = "none";
    
      var weight = document.bmiForm.realweight.value;
      var height = (document.bmiForm.realheight.value)/100;
      var bmi = (weight)/Math.pow(height, 2);
      var roundedBmi =  parseFloat(bmi).toFixed(2);
    
      var Thin = document.querySelector(".thin");
      var SoThin = document.querySelector(".sothin");
      var Nomarl = document.querySelector(".normal");
      var Overweight = document.querySelector(".overweight");
      var Obese = document.querySelector(".obese");
      
        //  bánh cho người quá gầy
         if(roundedBmi > 0 && roundedBmi < 16){
          containerDiet.style.display = "block";
          SoThin.style.display = "block";
          Thin.style.display = "none";
          Nomarl.style.display="none";
          Overweight.style.display="none";
          Obese.style.display="none";
        }
      //bánh cho người gầy
        else if(roundedBmi >= 16 && roundedBmi < 18){
          
          containerDiet.style.display = "block";
          Thin.style.display = "block";
          SoThin.style.display = "none";
          Nomarl.style.display="none";
          Overweight.style.display="none";
          Obese.style.display="none";
        }
        else if(roundedBmi >= 18 && roundedBmi < 25){
          containerDiet.style.display = "block";
          Thin.style.display = "none";
          SoThin.style.display = "none";
          Nomarl.style.display="block";
          Overweight.style.display="none";
          Obese.style.display="none";
        }
        else if(roundedBmi >= 25 && roundedBmi < 30){
          containerDiet.style.display = "block";
          Thin.style.display = "none";
          SoThin.style.display = "none";
          Nomarl.style.display="none";
          Overweight.style.display="block";
          Obese.style.display="none";
        }
        else if(roundedBmi >= 30){
          containerDiet.style.display = "block";
          Thin.style.display = "none";
          SoThin.style.display = "none";
          Nomarl.style.display="none";
          Overweight.style.display="none";
          Obese.style.display="block";
        }
       
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
     
     const productItem= $$('.product-item')
productItem.forEach(function(product){
    product.onclick= function(){
        window.location.href= 'product-detail.html'
    }
})

const btnAddtoCart= $('.item .product-item .add')
btnAddtoCart.onclick= function(e){
    e.preventDefault()
}
    