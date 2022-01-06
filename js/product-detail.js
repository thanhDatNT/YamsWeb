var input= $('#myfile')
var preview= $('#cus-evaluate .image')
const fileTypes = [
    "image/apng",
    "image/bmp",
    "image/gif",
    "image/jpeg",
    "image/pjpeg",
    "image/png",
    "image/svg+xml",
    "image/tiff",
    "image/webp",
    "image/x-icon"
];

input.addEventListener('change', updateImageDisplay);

function updateImageDisplay() {
    while(preview.firstChild) {
      preview.removeChild(preview.firstChild);
    }
    
    const para = document.createElement('p');
    const curFiles = input.files;
    if(curFiles.length === 0) {
      para.textContent = 'No files currently selected for upload';
      preview.appendChild(para);
    } 
    else {
      for(const file of curFiles) {
        if(validFileType(file)) {
          para.textContent = ``;
          const image = document.createElement('img');
          image.src = URL.createObjectURL(file);
  
          preview.appendChild(image);
          preview.appendChild(para);
        } else {
          para.textContent = `File name ${file.name}: Not a valid file type. Update your selection.`;
          preview.appendChild(para);
        }
      }
    }
    function validFileType(file) {
        return fileTypes.includes(file.type);
    }
}

// Click "Đánh giá" button

$('#cus-evaluate .submit').onclick = function(){
  // Get current time
  var today= new Date();
  var dd= String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0');
  var yyyy = today.getFullYear();
  var hh = today.getHours();
  var m = today.getMinutes();
  var time = hh + ":"+ m + ", " + dd +"-" + mm + "-"+ yyyy;

  // Get user photo and comment
  var avatar = $('#account-icon img').src;
  var comment = $('#cus-evaluate .text').value;
  // When user type comment and upload product image
  if(comment != '' && preview.hasChildNodes()){
    var imgSource = $('#cus-evaluate .image img').src;
    var node = `<div class="item">
        <div class="avatar"><img src="${avatar}" alt=""/></div>
          <div class="content">
              <h3 class="name">User</h3>
              <div class="star">
                  <span class="iconify" data-icon="bi:star-fill"></span>
                  <span class="iconify" data-icon="bi:star-fill"></span>
                  <span class="iconify" data-icon="bi:star-fill"></span>
                  <span class="iconify" data-icon="bi:star-fill"></span>
                  <span class="iconify" data-icon="bi:star-fill"></span>
              </div>
              <p class="comment">${comment}</p>
              <div class="image">
                <img src="${imgSource}" alt="">
              </div>
              <p class="time">${time}</p>
          </div>
      </div>`
    confirm('Nhận xét đã được đăng')
    $('#evaluate .container .cus-comment').innerHTML = node;
    $('#cus-evaluate').style.display = 'none';
  }
  else{
    alert('Vui lòng tải ít nhất 1 hình ảnh kèm lời nhận xét của bạn');
    return;
  }
}