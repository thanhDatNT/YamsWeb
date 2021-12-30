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
          <button class="remove" ><span class="iconify close" data-icon="carbon:close"></span></button>
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
            <input type="number" id="quantity" class="quality-item" step="1" min="1" max="100" value="${item.quantity}" name="quality_cart" onchange="sum1()" >
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
  showChessCake(products);
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

function showChessCake(products){
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
    if(item.tag == "Promo"){
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
    }
    else if(item.tag == ''){
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
    }
    else{
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
    }
	});
  var product = item.join('');
  $('#relevant .wrapper').innerHTML = product;
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
    showBestSeller();
  }
  else if(urlParams.toString().includes('product-detail.html')){
    showProductDetail()
  }
  else if(urlParams.toString().includes('cart.html')){
    loadFullCart();
  }
  else if(urlParams.toString().includes('menu.html')){
    showBestSeller();
    showPromotion()
  }
  loadCartTotal();
  updateCart();
}

