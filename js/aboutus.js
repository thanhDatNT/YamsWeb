var memberList = []
// Load data form members.xml
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    memberList = changeToListData(this)
    display(memberList);
  }
};
xhttp.open("GET", "../data/members.xml", true);
xhttp.send();

// Push data to member list array
function changeToListData(xml) {
  var data = [];
  var xmlDoc = xml.responseXML;
  var memberItem = xmlDoc.getElementsByTagName('item')
  for (i = 0; i < memberItem.length; i++) {
    var item = memberItem[i]
    var members = []
    members.push(item.getElementsByTagName("name")[0].childNodes[0].nodeValue,
      item.getElementsByTagName("position")[0].childNodes[0].nodeValue,
      item.getElementsByTagName("describe")[0].childNodes[0].nodeValue,
      item.getElementsByTagName("photo")[0].childNodes[0].nodeValue
    )
    data.push(members)
  }
  console.log(data)
  return data
}

// Update UI
function display(list){
  var members = list.map(member => {
    console.log(member);
    return `<div class="item">
      <div class="person-item">
        <div class="thumb"><img src="${member[3]}" alt=""></div>
        <div class="detail">
            <hr>
            <h3 class="office">${member[1]}</h3>
            
            <h3 class="name" style="margin-left: 30px;">${member[0]}</h3>
            <p class="des">${member[2]}</p>
        </div>
      </div>
    </div>`
  })
  var html = members.join('')
  $('#founder .container').innerHTML = html
}

(function ScrollEvent(){
  ScrollReveal({
      reset: false,
      distance: '60px',
      duration: 2500, 
      delay:400
  })
  ScrollReveal().reveal('.main-title, #hightlight .content-box,#story .title, #story .image-box, #material .hr, #material .content .text, #policy .title, #policy .image-box', { delay: 200, origin:'left' });

  ScrollReveal().reveal('#banners .description, #hightlight .image-box, #story .hr, #story .content .text ,#material .title, #material .image-box,  #policy .hr, #policy .content .text', { delay: 200, origin:'right' });

  ScrollReveal().reveal('#founder .container .item, #material .icon .item', { delay: 100, origin:'bottom', interval: 200});

})()