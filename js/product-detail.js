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