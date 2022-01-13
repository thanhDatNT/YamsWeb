var url = 'https://thanhdatnt.github.io/database-web/products.json'
const getProducts = async () => {
  try {
    const results = await fetch(url);
    const data = await results.json();
    const products = data.products;
    return products;
  } catch (err) {
    console.log(err);
  }
};

// ======= CART PAGE =========

function loadFullCart(){
  var carts = loadCart();
  var totalBill = 0;
  carts.forEach(item => totalBill += item.product.price * item.quantity);
  var cartWarpper = carts.map(function(item){
    var subTotal = item.quantity * item.product.price;
    return `<tr class="cart-item">
        <td class="product-remove">
          <button class="remove" onclick="removeItem(${item.product.id})"><span class="iconify close" data-icon="carbon:close"></span></button>
        </td>
        <td class="product-image">
            <a href="#"><img class="image-item"src="${item.product.image}" ></a>
        </td>
        <td class="product-name" data-title="Product">
            <a class="name" href="product-detail.html?id=${item.product.id}">${item.product.name}</a>
        </td>
        <td class="product-price" data-title="Price">
            <p class="price">${item.product.price} VND</p>
        </td>
        <td class="product-quantity">
            <input type="number" id="quantity" class="quality-item" step="1" min="1" max="100" value="${item.quantity}" name="quality_cart" onchange="cartQuantityChange(${item.product.id}, this)" >
        </td>
        <td class="product-subtotal">
            <span>
                <input type="text" name="total1" value="${subTotal}" > VND
            </span>
        </td>
      </tr>`   
  })
  var html = cartWarpper.join('');
  $('.content .cart .cart-list').innerHTML = html;
  $('.content .total-session .sum-money').innerText = totalBill;
}

function removeItem(id) {
  let cart = JSON.parse(localStorage.getItem('cart'));
	cart = cart.filter(x => x.product.id != id);
	localStorage.setItem('cart', JSON.stringify(cart));
	loadCartTotal();
  loadFullCart();
  updateCart();
}

function cartQuantityChange(item_id, e){
  let quantity = e.value;
	let cart = loadCart() || [];
	let target_index = cart.findIndex(x => x.product.id == item_id);
	if (quantity > 0) {
		cart[target_index].quantity = parseInt(quantity);
	};
	saveCart(cart);
	loadCartTotal();
	loadFullCart();
  updateCart();
}
// ======== ORDER PAGE ========

function loadPurchasingList(){
  var carts = loadCart();
  var subTotal = 0;
  var deliFee = 30000;

  carts.forEach(item => subTotal += item.product.price * item.quantity);
  var cartWarpper = carts.map(function(item){
    return `<li class="products-item">
      <img class="image-item" src="${item.product.image}" alt="">     
      <div class="product-infor">
          <h5 class="name">${item.product.name}</h5>
          <div  class="quantity_price">
              <p class="quantity">${item.quantity} </p>
              <span class="iconify" data-icon="carbon:close"></span>
              <p class="price">${item.product.price} <u>đ</u></p>
          </div>
      </div>
    </li>`
  })
  var html = cartWarpper.join('');
  $('.content-right .list-items').innerHTML = html;
  $('.content-right .total-sub .money').innerText = subTotal + "VND";
  // Calculate with delivery fee
  calcInvoice(deliFee, subTotal);
  $('#deli').onclick = function(){
    deliFee = 30000;
    calcInvoice(deliFee, subTotal);
  }
  $('#pickup').onclick = function(){
    deliFee = 0;
    calcInvoice(deliFee, subTotal);
  }
  $('.complete').onclick = function(){
    localStorage.clear();
    loadCartTotal();
    updateCart();
  }
}

function calcInvoice(deliFee, subTotal){
  var totalBill = subTotal + deliFee;
  $('.content-right .fee-delivery .fee').innerText = deliFee + "VND";
  $('.content-right .sum .sum-bill').innerText = totalBill + "VND";
}

// ======= HOME PAGE =========
// Best seller session

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

// ======= MENU PAGE =========
// Promotion session

async function showPromotion(){
  const products = await getProducts();
  let promo_products = products.filter((product) => {
    return product.tag == 'Promo'
  });
  promo_products = promo_products.slice(0, 6);
	var item = promo_products.map(item => {
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
  var product = item.join('');
  $('#sale .container').innerHTML = product;
  showMacaron(products);
  showCheeseCake(products);
  showPudding(products);
  showTiramisu(products);
}

function showMacaron(products){
  let macarons = products.filter((product) => {
    return product.category == '6'
  });
  macarons = macarons.slice(0, 3);
	var item = macarons.map(item => {
			return `<div class="item">
            <div class="product-item">
                 <div class="tag" style="display: none;">${item.tag}</div>
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
  $('#macaron .container').innerHTML = product;
}

function showCheeseCake(products){
  let chessCake = products.filter((product) => {
    return product.category == '2'
  });
  chessCake = chessCake.slice(0, 3);
	var item = chessCake.map(item => {
			return `<div class="item">
            <div class="product-item">
                 <div class="tag" style="display: none;">${item.tag}</div>
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
  $('#cheesecake .container').innerHTML = product;
}

function showPudding(products){
  let pudding = products.filter((product) => {
    return product.category == '7'
  });
  pudding = pudding.slice(0, 3);
	var item = pudding.map(item => {
			return `<div class="item">
            <div class="product-item">
                 <div class="tag" style="display: none;">${item.tag}</div>
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
  $('#pudding .container').innerHTML = product;
}

function showTiramisu(products){
  let tiramisu = products.filter((product) => {
    return product.category == '8'
  });
  tiramisu = tiramisu.slice(0, 3);
	var item = tiramisu.map(item => {
			return `<div class="item">
            <div class="product-item">
                 <div class="tag" style="display: none;">${item.tag}</div>
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
  $('#tiramisu .container').innerHTML = product;
}

// ======= FILTER PAGE =========

function navigateFilter(){
  var urlParams = window.location.hash;
  $$('.fragment').forEach(item => {
    item.classList.remove('active')
  })

  switch (urlParams){
    case '#bestseller':
      $('#bestseller').classList.add('active');
      showBestSellerFilter();
      break;
    case '#new':
      $('#new-pro').classList.add('active');
      showNewFilter();
      break;
    case '#promotion':
      $('#promotion').classList.add('active');
      showPromoFilter();
      break;
    case '#offer':
      $('#offer-pro').classList.add('active');
      showOfferFilter();
      break;
    case '#macaron':
      $('#macaron').classList.add('active');
      showMacaronFilter();
      break;
    case '#cheesecake':
      $('#cheese-cake').classList.add('active');
      showCheeseCakeFilter();
      break;
    case '#pudding':
      $('#pudding').classList.add('active');
      showPuddingFilter();
      break;
    case '#tiramisu':
      $('#tiramisu').classList.add('active');
      showTiramisuFilter();
      break;
  }
  $('.loading').style.display = 'none';
}

async function showBestSellerFilter(){
  const products = await getProducts();
  let top_products = products.filter((product) => {
    return product.tag == 'Top'
  });
	var item = top_products.map(item => {
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

async function showNewFilter(){
  const products = await getProducts();
  let new_products = products.filter((product) => {
    return product.tag == 'New'
  });
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
  $('#new-pro .container').innerHTML = product;
}

async function showOfferFilter(){
  const products = await getProducts();
  let offer_products = products.filter((product) => {
    return product.tag == ''
  });
	var item = offer_products.map(item => {
			return `<div class="item">
            <div class="product-item">
                 <div class="tag" style="display: none;">${item.tag}</div>
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
  $('#offer-pro .offer-list').innerHTML = product;
}

async function showPromoFilter(){
  const products = await getProducts();
  let new_products = products.filter((product) => {
    return product.tag == 'Promo'
  });
	var item = new_products.map(item => {
			return `<div class="item">
            <div class="product-item">
                 <div class="tag" style="font-size: 1.2rem;">${item.tag}</div>
                 <div class="thumb"><img src="${item.image}" alt=""></div>
                 <div class='detail'>
                     <a href="product-detail.html?id=${item.id}" class="name" data-id="${item.id}">${item.name}</a>
                     <p class="price"><span class="iconify" data-icon="ion:pricetag"></span><del>${item.price}</del> ${item.currentPrice} <u>đ</u></p>
                     <a href="product-detail.html?id=${item.id}" class="add" data-id="${item.id}"><span class="iconify" data-icon="carbon:add-filled"></span></a>
                 </div>
                </div>
            </div>`
	});
  var product = item.join('');
  $('#promotion .container').innerHTML = product;
}

async function showMacaronFilter(){
  const products = await getProducts();
  let macarons = products.filter((product) => {
    return product.category == '6'
  });
	var item = macarons.map(item => {
			return `<div class="item">
            <div class="product-item">
                 <div class="tag" style="display: none;">${item.tag}</div>
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
  $('#macaron .container').innerHTML = product;
}

async function showCheeseCakeFilter(){
  const products = await getProducts();
  let chessCake = products.filter((product) => {
    return product.category == '2'
  });
	var item = chessCake.map(item => {
			return `<div class="item">
            <div class="product-item">
                 <div class="tag" style="display: none;">${item.tag}</div>
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
  $('#cheese-cake .container').innerHTML = product;
}

async function showPuddingFilter(){
  const products = await getProducts();
  let pudding = products.filter((product) => {
    return product.category == '7'
  });
	var item = pudding.map(item => {
			return `<div class="item">
            <div class="product-item">
                 <div class="tag" style="display: none;">${item.tag}</div>
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
  $('#pudding .container').innerHTML = product;
}

async function showTiramisuFilter(){
  const products = await getProducts();
  let tiramisu = products.filter((product) => {
    return product.category == '8'
  });
	var item = tiramisu.map(item => {
			return `<div class="item">
            <div class="product-item">
                 <div class="tag" style="display: none;">${item.tag}</div>
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
  $('#tiramisu .container').innerHTML = product;
}

// ======= PRODUCT DETAIL PAGE =========
// Detail session

async function showProductDetail(){
  const products = await getProducts();
  const urlParams = new URLSearchParams(window.location.search);
	const product_id = urlParams.get('id');
  var tag;
  const product = products.filter(product => {
    return product.id == product_id;
  })
  product.forEach(p =>{
    tag = p.tag;
    $('.product-wrapper .thumbnail img').setAttribute('src', p.image);
    $('#evaluate .item .image img').setAttribute('src', p.image);
    $('.product-wrapper .detail .name').innerText = p.name;
    $('.product-wrapper .detail .price').innerHTML = `${p.currentPrice} <u>đ</u>`;
    $('.product-wrapper .detail .material').innerText = p.ingredient;
    $('.product-wrapper .description .content').innerText = p.description;
  })
  // Click on the "Add to cart button"
  $('#add-cart').onclick = function () {
    var cart = loadCart() || [];
    var count = $('.product-wrapper .detail #quantity').value
    let item = {
      id: '',
      name: '',
      image: '',
      price: 0
    };
    product.forEach(p => {
      item.id = p.id;
      item.name = p.name;
      item.image = p.image;
      item.price = p.currentPrice;
    })
    let duplicate_index = cart.findIndex(cart_item => cart_item.product.id === item.id);
		if (duplicate_index > -1) {
			cart[duplicate_index].quantity += parseInt(count);
		} 
    else {
			cart.push({
				product: item,
				quantity: parseInt(count)
			});
		}
    saveCart(cart)
    loadCartTotal()
    updateCart();
  }
  loadSuggestion(products, tag);
  updateCart();
}

function updateCart(){
  var carts = loadCart() || [];
  var totalBill = 0;
  if(carts.length == 0){
    $('header #cart .empty-cart').style.display = 'block'
    $('header #cart .non-empty').style.display = 'none'
    return
  }else{
  carts.forEach(item => totalBill += item.product.price * item.quantity);
  var cartWarpper = carts.map(function(item , index){
    if (index > carts.length - 3){
      return `
            <div class="item">
                <div class="thumb"><img src="${item.product.image}" alt=""></div>
                <div class="detail">
                    <p class="name">${item.product.name}</p>
                    <p><span class="quantity">${item.quantity}</span> x <span class="price">${item.product.price}đ</span></p>
                </div>
            </div>`
    }
  })
  var html = cartWarpper.join('');
  $('header #cart .non-empty .wrapper').innerHTML = html;
  $('.cart-wrapper .item-list').innerHTML = html;
  $('.cart-wrapper .total .total-bill').innerHTML = `${totalBill}<u>đ</u>`
}
}

function loadSuggestion(products, tag){
  let suggestion_products = products.filter((product) => {
    return product.tag == tag
  });
  suggestion_products = suggestion_products.slice(0, 6);
	var item = suggestion_products.map(item => {
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
  var product = item.join('');
  $('#relevant .wrapper').innerHTML = product;
  var tags = $$('#relevant .wrapper .tag');
  var oldPrice = $$('#relevant .wrapper del');
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

function loadCartTotal() {
	let carts = JSON.parse(localStorage.getItem('cart'));
	let total_cartItems = 0;
	carts.forEach(x => total_cartItems += x.quantity);
    $('#cart .item-count').innerHTML = total_cartItems;
}

function loadCart() {
	if (localStorage.getItem('cart')) {
		return JSON.parse(localStorage.getItem('cart'));
	}
}

function saveCart(cart) {
	if (cart) {
		return localStorage.setItem('cart', JSON.stringify(cart));
	}
	return false;
}

window.onload = function(){
  var urlParams = window.location.href;
  if(urlParams.toString().includes('index.html')){
    // showBestSeller();
  }
  else if(urlParams.toString().includes('product-detail.html')){
    showProductDetail()
  }
  else if(urlParams.toString().includes('cart.html')){
    loadFullCart();
  }
  else if(urlParams.toString().includes('menu.html')){
    showBestSeller();
    showPromotion();
  }
  else if(urlParams.toString().includes('filter.html')){
    setTimeout(() => {
      ScrollEvent();
      window.scrollTo(0, 0);
      navigateFilter();
    }, 1000);
  }
  else if(urlParams.toString().includes('order.html')){
    loadPurchasingList()
  }
  loadCartTotal();
  updateCart();
}

