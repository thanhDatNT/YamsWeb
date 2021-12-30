$('#send-infor').onclick = function checkMissingField() {
    const form= document.forms['form-cus-infor']
    if (form.name.value == "" || form.email.value == "" || form.numberphone.value == "" ||form.note.value=="" ) 
    {
        alert("Vui lòng nhập đầy đủ thông tin")
    } 
    else {
        confirm("Thông tin đã gửi thành công")
        window.location.href='contact.html'
      
    }
}