const navElements= $$('.nav-panel .menu .item')
const fragments= $$('.fragments .fragment')

navElements.forEach(function(navElement, i){
    navElement.addEventListener('click',()=>{
        changeStyle(i);
        collapseFragments();
        openFragment(i);
    })
})

var changeStyle = function(manual){
    navElements.forEach((navElement) => {
        navElement.classList.remove('active')
    })
    navElements[manual].classList.add('active')
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

var openFragment= function(manual) {
    switch(manual) {
        case 0:
            fragments[manual].classList.add('active');
            break;
        case 1:
            fragments[manual].classList.add('active');
            break;
        case 2:
            fragments[manual].classList.add('active');
            break;
        case 3:
            fragments[manual].classList.add('active');
            break;
    }
}

// Update User photo
const camera= $('#myfile')
const preview= $('.nav-panel .user-photo .photo')
const fileTypes = [
    "image/apng",
    "image/bmp",
    "image/gif",
    "image/jpeg",
    "image/pjpeg",
    "image/png"
];
camera.addEventListener('change', updateImageDisplay);

function updateImageDisplay() {
    while(preview.firstChild) {
      preview.removeChild(preview.firstChild);
    }
    
    const para = document.createElement('p');
    const curFiles = camera.files;
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

// OPEN/CLOSE CHANGING PASSWORD DIALOG

const openDialog= $('.config .change-pw')
const closeDialog= $('.config .pw-dialog .close-dialog')
const overlay= $('.fragments .overlay')
const dialog= $('.config .pw-dialog')

openDialog.onclick= function(){
    overlay.classList.remove('inactive')
    overlay.classList.add('active')
    setTimeout(function(){
        dialog.classList.remove('inactive')
        dialog.classList.add('active')
    },300)
}

closeDialog.onclick= function(){
    overlay.classList.remove('active')
    overlay.classList.add('inactive')
    dialog.classList.remove('active')
    dialog.classList.add('inactive')
}