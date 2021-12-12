const $= document.querySelector.bind(document)
const $$= document.querySelectorAll.bind(document)
// LOAD USER DATA
var data=[]
var ajax= new XMLHttpRequest();
ajax.onreadystatechange = function(){
    if(this.readyState == 4 && this.status==200){
        data= getData(this);
    }
}

ajax.open("GET","/data/user.xml", true);
ajax.send();

function getData(xml){
    var xmlDoc = xml.responseXML;
    var users= xmlDoc.getElementsByTagName('userlist')[0].getElementsByTagName('user');
    for(var i=0; i<users.length; i++){
        var user= users[i];
        var userInfor= [];
        userInfor.push(user.getElementsByTagName('name')[0].childNodes[0].nodeValue,
        user.getElementsByTagName('username')[0].childNodes[0].nodeValue,
            user.getElementsByTagName('password')[0].childNodes[0].nodeValue,
            user.getElementsByTagName('photo')[0].childNodes[0].nodeValue,
            user.getElementsByTagName('phone')[0].childNodes[0].nodeValue,
            user.getElementsByTagName('email')[0].childNodes[0].nodeValue,
            user.getElementsByTagName('address')[0].childNodes[0].nodeValue
        );
        data.push(userInfor);
    }
    return data;
}

// Direct page after submitting
$('#submit').onclick= function() {
    var username= $('#username').value
    var password= $('#password').value
    data.forEach((user, i) => {
        if(user[1] === username && user[2] === password){
            if(user[1] == 'ad'){
                window.location.href= 'admin.html'
            }
            else{
                window.location.href= 'customer-account.html'
            }
        }
        if(i == data.length && user[1] != username){
            alert('Tên đăng nhập hoặc mật khẩu không tồn tại!')
        }
    })
}

