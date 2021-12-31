const $= document.querySelector.bind(document)
const $$= document.querySelectorAll.bind(document)

$('.tab-2').onclick = function(){
    this.classList.remove('inactive')
    this.classList.add('active')
    $('.tab-3').classList.remove('active')
    $('.payment').classList.remove('active')
    $('.deli-infor').classList.add('active')
}

function pickAddress(v) {
    var selectDistrict = document.getElementById('district')
    switch (parseInt(v)) {
        case 1:
            selectDistrict.innerHTML =
                "<option>Quận 1</option>" +
                "<option>Quận 2</option>" +
                "<option>Quận 3</option>" +
                "<option>Quận 4</option>" +
                "<option>Quận 5</option>" +
                "<option>Quận 6</option>" +
                "<option>Quận 7</option>" +
                "<option>Quận 8</option>" +
                "<option>Quận 9</option>" +
                "<option>Quận 10</option>" +
                "<option>Quận 11</option>" +
                "<option>Quận Gò Vấp</option>" +
                "<option>Quận Tân Bình</option>" +
                "<option>Quận Bình Thạnh</option>" +
                "<option>Quận Phú Nhuận</option>" +
                "<option>Quận Thủ Đức</option>" +
                "<option>Quận Tân Phú</option>" +
                "<option>Quận Bình Tân</option>" +
                "<option>Huyện Bình Chánh</option>"

            break;
        case 71:
            selectDistrict.innerHTML =
                "<option>Thành phố Sông Công</option>" +
                "<option>Huyện Phú Bình</option>" +
                "<option>Thị xã Phổ Yên</option>" +
                "<option>Huyện Đại Từ</option>" +
                "<option>Huyện Định Hóa</option>" +
                "<option>Huyện Phú Lương</option>" +
                "<option>Huyện Võ Nhai</option>" +
                "<option>Huyện Đồng Hỷ</option>" +
                "<option>Thành phố Thái Nguyên</option>"

            break;
        case 78:
            selectDistrict.innerHTML =

                "<option >Quận Ngô Quyền</option>" +
                "<option>Huyện Tiên Lãng</option>" +
                "<option>Quận Lê Chân</option>" +
                "<option>Huyện Thủy Nguyên</option>" +
                "<option>Quận Kiến An</option>" +
                "<option>Quận Đồ Sơn</option>" +
                "<option>Quận Dương Kinh</option>" +
                "<option>Quận Hải An</option>" +
                "<option>Quận Hồng Bàng</option>" +
                "<option>Huyện An Dương</option>" +
                "<option>Huyện An Lão</option>" +
                "<option>Huyện Bạch Long Vĩ</option>" +
                "<option>Huyện Cát Hải</option>" +
                "<option>Huyện Kiến Thụy</option>" +
                "<option>Huyện Vĩnh Bảo</option>"

            break;
        case 81:
            selectDistrict.innerHTML =
                "<option>Thành phố Bắc Giang</option>" +
                "<option>Huyện Lạc Giang</option>" +
                "<option>Huyện Tân Yên</option>" +
                "<option>Huyện  Lục Nam</option>" +
                "<option>Huyện  Lục Ngạn</option>" +
                "<option>Huyện Hiệp Hoà</option>" +
                "<option>Huyện Sơn Động</option>" +
                "<option>Huyện Việt Yên</option>" +
                "<option>Huyện Yên Dũng</option>" +
                "<option>Huyện Yên Thế</option>"

            break;
        case 84:
            selectDistrict.innerHTML =
                "<option>Thành phố Vĩnh Yên</option>" +
                "<option>Huyện Tam Dương</option>" +
                "<option >Huyện Vĩnh Tường</option>" +
                "<option >Thị xã Phúc Yên</option>" +
                "<option>Huyện Bình Xuyên</option>" +
                "<option >Huyện Lập Trạch</option>" +
                "<option>Huyện Sông Lô</option>" +
                "<option >Huyện Tam Đảo</option>" +
                "<option>Huyện Yên Lạc</option>"

            break;
        case 90:
            selectDistrict.innerHTML =
                "<option>Thành Phố Thanh Hoá</option>" +
                "<option>Thành phố Sầm Sơn</option>" +
                "<option>Huyện Bá Thước</option>" +
                "<option>Huyện Cẩm Thủy</option>" +
                "<option>Huyện Đông Sơn</option>" +
                "<option>Huyện Hà Trung</option>" +
                "<option >Huyện Lang Chánh</option>" +
                "<option>Huyện Mường Lát</option>" +
                "<option>Huyện Nga Sơn</option>" +
                "<option>Huyện Ngọc Lặc</option>" +
                "<option>Huyện Như Thanh</option>" +
                "<option>Huyện Như Xuân</option>" +
                "<option>Huyện Nông Cống</option>" +
                "<option>Huyện Quan Hóa</option>" +
                "<option>Huyện Quan Sơn</option>" +
                "<option>Huyện Thạch Thành</option>" +
                "<option>Huyện Thiệu Hóa</option>" +
                "<option>Huyện Thọ Xuân</option>" +
                "<option>Huyện Thường Xuân</option>" +
                "<option >Huyện Triệu Sơn</option>" +
                "<option>Huyện Vĩnh Lộc</option>" +
                "<option>Huyện Yên Định</option>" +
                "<option>Huyện Hoằng Hóa</option>" +
                "<option>Huyện Hậu Lộc</option>" +
                "<option >Thị xã Bỉm Sơn</option>" +
                "<option >Huyện Tĩnh Gia</option>" +
                "<option >Huyện Quảng Xương</option>"

            break;
        case 92:
            selectDistrict.innerHTML =
                "<option>Thị Xã Hồng Lĩnh</option>" +
                "<option>Huyện Cẩm Xuyên</option>" +
                "<option>Thị xã Kỳ Anh</option>" +
                "<option>Thành phố Hà Tĩnh</option>" +
                "<option>Huyện Can Lộc</option>" +
                "<option>Huyện Đức Thọ</option>" +
                " <option>Huyện Hương Khê</option>" +
                "<option>Huyện Hương Sơn</option>" +
                "<option>Huyện Kỳ Anh</option>" +
                "<option >Huyện Lộc Hà</option>" +
                "<option>Huyện Nghi Xuân</option>" +
                "<option>Huyện Thạch Hà</option>" +
                "<option >Huyện Vũ Quang</option>"

            break;
        case 97:
            selectDistrict.innerHTML =
                "<option>Thành Phố Tam Kỳ</option>" +
                "<option>Huyện Bắc Trà My</option>" +
                "<option>Huyện Đông Giang</option>" +
                "<option >Huyện Duy Xuyên</option>" +
                "<option>Huyện Hiệp Đức</option>" +
                "<option>Huyện Nam Giang</option>" +
                "<option>Huyện Nam Trà My</option>" +
                "<option>Huyện Nông Sơn</option>" +
                "<option>Huyện Phước Ninh</option>" +
                "<option >Huyện Phú Sơn</option>" +
                "<option>Huyện Quế Sơn</option>" +
                "<option>Huyện Tây Giang</option>" +
                "<option>Huyện Tiên Phước</option>" +
                "<option>Thành phố Hội An</option>" +
                "<option>Huyện Núi Thành</option>" +
                "<option>Huyện Thăng Bình</option>" +
                "<option>Huyện Đại Lộc</option>" +
                "<option>Thị xã Điện Bàn</option>"

            break;
        case 100:
            selectDistrict.innerHTML =
                "<option>Thành Phố Tuy Hoà</option>" +
                "<option>Thị xã Sông Cầu</option>" +
                "<option>Huyện Đông Hòa</option>" +
                "<option>Huyện Đồng Xuân</option>" +
                "<option>Huyện Phú Hòa</option>" +
                "<option>Huyện Sơn Hòa</option>" +
                "<option>Huyện Sông Hinh</option>" +
                "<option>Huyện Tây Hòa</option>" +
                "<option>Huyện Tuy An</option>"

            break;
        case 101:
            selectDistrict.innerHTML = "<option>Thành phố Nha Trang</option>"

            break;
        case 104:
            selectDistrict.innerHTML =
                "<option>Thành Phố Pleiku</option>" +
                "<option>Thị xã An Khê</option>" +
                "<option>Thị xã Ayun Pa</option>" +
                "<option>Huyện Chư Păh</option>" +
                "<option>Huyện Chư Prông</option>" +
                "<option>Huyện Chư Pưh</option>" +
                "<option>Huyện Chư Sê</option>" +
                "<option>Huyện Đắk Đoa</option>" +
                "<option>Huyện Đak Pơ</option>" +
                "<option>Huyện Đức Cơ</option>" +
                "<option>Huyện Ia Grai</option>" +
                "<option>Huyện Ia Pa</option>" +
                "<option>Huyện K'Bang</option>" +
                "<option>Huyện Kông Chro</option>" +
                "<option>Huyện Krông Pa</option>" +
                "<option>Huyện Mang Yang</option>" +
                "<option>Huyện Phú Thiện</option>"

            break;
        case 112:
            selectDistrict.innerHTML =
                "<option>Thành phố Tây Ninh</option>" +
                "<option>Huyện Bến Cầu</option>" +
                "<option>Huyện Châu Thành</option>" +
                "<option>Huyện Dương Minh Châu</option>" +
                "<option>Huyện Gò Dầu</option>" +
                "<option>Huyện Hòa Thành</option>" +
                "<option>Huyện Tân Biên</option>" +
                "<option>Huyện Tân Châu</option>" +
                "<option>Huyện Trảng Bàng</option>"

            break;
        case 113:
            selectDistrict.innerHTML = "<option>Thành phố Biên Hoà</option>"

            break;
        case 115:
            selectDistrict.innerHTML = "<option>Huyện Cần Giuộc</option>" +
                "<option>Huyện Cần Đước</option>" +
                "<option>Huyện Đức Hòa</option>" +
                "<option>Huyện Đức Huệ</option>" +
                "<option>Thành phố Tân An</option>" +
                "<option>Huyện Bến Lức</option>" +
                "<option>Thị xã Kiến Tường</option>" +
                "<option>Huyện Châu Thành</option>" +
                "<option>Huyện Mộc Hóa</option>" +
                "<option>Huyện Tân Hưng</option>" +
                "<option>Huyện Tân Thạnh</option>" +
                "<option>Huyện Tân Trụ</option>" +
                "<option>Huyện Thạnh Hóa</option>" +
                "<option>Huyện Thủ Thừa</option>" +
                "<option>Huyện Vĩnh Hưng</option>"

            break;
        case 117:
            selectDistrict.innerHTML = "<option>Huyện Châu Phú</option>" +
                "<option>Huyện Chợ Mới</option>" +
                "<option>Huyện Thoại Sơn</option>" +
                "<option>Huyện Châu Thành</option>" +
                "<option>Huyện  Tri Tôn</option>" +
                "<option>Thị Xã Tân Châu</option>" +
                "<option>Thành Phố Long Xuyên</option>" +
                "<option>Thành Phố Châu Đốc</option>" +
                "<option>Huyện An Phú</option>" +
                "<option>Huyện Phú Tân</option>" +
                "<option>Huyện Tịnh Biên</option>"

            break;
        case 119:
            selectDistrict.innerHTML = "<option>Huyện Cai Lậy</option>" +
                "<option>Huyện Chợ Gạo</option>" +
                "<option>Huyện Cái Bè</option>" +
                "<option>Huyện Châu Thành</option>" +
                "<option>Thị xã Gò Công</option>" +
                "<option>Thành phố Mỹ Tho</option>" +
                "<option>Thị xã Cai Lậy</option>" +
                "<option>Huyện Gò Công Đông</option>" +
                "<option>Huyện Gò Công Tây</option>" +
                "<option>Huyện Tân Phú Đông</option>" +
                "<option>Huyện Tân Phước</option>"

            break;
        case 120:
            selectDistrict.innerHTML = "<option>Huyện Thạnh Phú</option>" +
                "<option>Huyện Ba Tri</option>" +
                "<option>Huyện Giồng Trôm</option>" +
                "<option>Huyện Châu Thành</option>" +
                "<option>Huyện Chợ Lách</option>" +
                "<option>Huyện Mỏ Cày Bắc</option>" +
                "<option>Huyện Mỏ Cày Nam</option>" +
                "<option>Huyện Bình Đại</option>" +
                "<option>Thành Phố Bến Tre</option>"

            break;
        case 121:
            selectDistrict.innerHTML = "<option>Thành phố Vĩnh Long</option>" +
                "<option>Huyện Trà Ôn</option>" +
                "<option>Huyện Long Hồ</option>" +
                "<option>Huyện Vũng Liêm</option>" +
                "<option>Thị xã Bình Minh</option>" +
                "<option>Huyện Bình Tân</option>" +
                "<option>Huyện Mang Thít</option>" +
                "<option>Huyện Tam Bình</option>"

            break;
        case 122:
            selectDistrict.innerHTML = "<option>Huyện Cầu Kè</option>" +
                "<option>Huyện Trà Cú</option>" +
                "<option>Huyện Cầu Ngang</option>" +
                "<option>Huyện Tiểu Cần</option>" +
                "<option>Huyện Càn Long</option>" +
                "<option>Huyện Châu Thành</option>" +
                "<option>Thành phố Trà Vinh</option>" +
                "<option>Thị xã Duyên Hải</option>" +
                "<option>Huyện Duyên Hải</option>"

            break;
        case 123:
            selectDistrict.innerHTML = "<option>Quận Ninh Kiều</option>"

            break;
        case 124:
            selectDistrict.innerHTML = "<option>Thành phố Sóc Trăng</option>" +
                "<option>Thị xã Vĩnh Châu</option>" +
                "<option>Thị xã Ngã Năm</option>" +
                "<option>Huyện Châu Thành</option>" +
                "<option>Huyện Cù Lao Dung</option>" +
                "<option>Huyện Long Phú</option>" +
                "<option>Huyện Trần Đề</option>" +
                "<option>Huyện Kế Sách</option>" +
                "<option>Huyện Mỹ Xuyên</option>" +
                "<option>Huyện Mỹ Tú</option>" +
                "<option>Huyện Thạnh Trị</option>"

            break;
        case 125:
            selectDistrict.innerHTML = "<option>Huyện Phú Quốc</option>" +
                "<option>Huyện Tân Hiệp</option>" +
                "<option>Thị xã Hà Tiên</option>" +
                "<option>Huyện Hòn Đất</option>" +
                "<option>Huyện Vĩnh Thuận</option>" +
                "<option>Huyện Gò Quao</option>" +
                "<option>Huyện Giồng Riềng</option>" +
                "<option>Huyện U Minh Thượng</option>" +
                "<option>Huyện Châu Thành</option>" +
                "<option>Huyện Kiên Lương</option>" +
                "<option>Huyện An Biên</option>" +
                "<option>Thành Phố Rạch Giá</option>" +
                "<option>Huyện An Minh</option>" +
                "<option>Huyện Giang Thành</option>" +
                "<option>Huyện Kiên Hải</option>"

            break;
        case 126:
            selectDistrict.innerHTML = "<option>Thị xã Giá Rai</option>" +
                "<option>Huyện Hòa Bình</option>" +
                "<option>Huyện  Hồng Dân</option>" +
                "<option>Huyện  Đông Hải</option>" +
                "<option>Huyện Phước Long</option>" +
                "<option>Huyện Vĩnh Lợi</option>" +
                "<option>Thành phố Bạc Liêu</option>"

            break;
        case 127:
            selectDistrict.innerHTML = "<option>Thành Phố Cà Mau</option>" +
                "<option>Huyện Năm Căn</option>" +
                "<option>Huyện Cái Nước</option>" +
                "<option>Huyện Đầm Dơi</option>" +
                "<option>Huyện Ngọc Hiển</option>" +
                "<option>Huyện Phú Tân</option>" +
                "<option>Huyện Thới Bình</option>" +
                "<option>Huyện Trần Văn Thời</option>" +
                "<option>Huyện U Minh</option>"

            break;
        case 128:
            selectDistrict.innerHTML = "<option>Thị xã Ba Đồn</option>" +
                "<option>Huyện Bố Trạch</option>" +
                "<option>Huyện Lệ Thủy</option>" +
                "<option>Huyện Minh Hóa</option>" +
                "<option>Huyện Quảng Ninh</option>" +
                "<option>Huyện Quảng Trạch</option>" +
                "<option>Huyện Tuyên Hóa</option>" +
                "<option>Thành phố Đồng Hới</option>"

            break;
        case 129:
            selectDistrict.innerHTML = "<option>Huyện Từ Sơn</option>" +
                "<option>Huyện Quế Võ</option>" +
                "<option>Thị xã Từ Sơn</option>" +
                "<option>Huyện Yên Phong</option>" +
                "<option>Thành phố Bắc Ninh</option>" +
                "<option>Huyện Thuận Thành</option>" +
                "<option>Huyện Gia Bình</option>" +
                "<option>Huyện Lương Tài</option>"

            break;
        case 130:
            selectDistrict.innerHTML = "<option>Thị xã Thuận An</option>" +
                "<option>Thị xã Dĩ An</option>" +
                "<option>Thành phố Thủ Dầu Một</option>"

            break;
        case 131:
            selectDistrict.innerHTML = "<option>Huyện Phù Cát</option>" +
                "<option>Huyện Hoài Ân</option>" +
                "<option>Huyện Tuy Phước</option>" +
                "<option>Huyện Hoài Nhơn</option>" +
                "<option>Thị xã An Nhơn</option>" +
                "<option>Thành phố Quy Nhơn</option>" +
                "<option>Huyện An Lão</option>" +
                "<option>Huyện Phù Mỹ</option>" +
                "<option>Huyện Tây Sơn</option>" +
                "<option>Huyện Vân Canh</option>" +
                "<option>Huyện Vĩnh Thạnh</option>"

            break;
        case 132:
            selectDistrict.innerHTML = "<option>Quận Hải Châu</option>"

            break;
        case 133:
            selectDistrict.innerHTML = "<option>Thành phố Cao Lãnh</option>" +
                "<option>Thành phố Sa Đéc</option>" +
                "<option>Huyện Tháp Mười</option>" +
                "<option>Huyện Lấp Vò</option>" +
                "<option>Huyện Tam Nông</option>" +
                "<option>Huyện Cao Lãnh</option>" +
                "<option>Huyện Hồng Ngự</option>" +
                "<option>Huyện Tân Hồng</option>" +
                "<option>Thị xã Hồng Ngự</option>" +
                "<option>Huyện Châu Thành</option>" +
                "<option>Huyện Lai Vung</option>" +
                "<option>Huyện Thanh Bình</option>"

            break;
        case 135:
            selectDistrict.innerHTML = "<option>Huyện Mỹ Hảo</option>" +
                "<option>Huyện Văn Giang</option>" +
                "<option>Huyện Ân Thi</option>" +
                "<option>Thành phố Hưng Yên</option>" +
                "<option>Huyện Khoái Châu</option>" +
                "<option>Huyện Kim Động</option>" +
                "<option>Huyện Phú Cừ</option>" +
                "<option>Huyện Tiên Lữ</option>" +
                "<option>Huyện Văn Lâm</option>" +
                "<option>Huyện Yên Mỹ</option>"

            break;
        case 136:
            selectDistrict.innerHTML = "<option>Thành phố Kon Tum</option>" +
                "<option>Huyện Đắk Glei</option>" +
                "<option>Huyện Đắk Hà</option>" +
                "<option>Huyện Đắk Tô</option>" +
                "<option>Huyện Ia H'Drai</option>" +
                "<option>Huyện Kon Plông</option>" +
                "<option>Huyện Kon Rẫy</option>" +
                "<option>Huyện Ngọc Hồi</option>" +
                "<option>Huyện Sa Thầy</option>" +
                "<option>Huyện Tu Mơ Rông</option>"

            break;
        case 137:
            selectDistrict.innerHTML = "<option>Thành phố Nam Định</option>" +
                "<option>Huyện Hải Hậu</option>" +
                "<option>Huyện Trực Ninh</option>" +
                "<option>Huyện Giao Thủy</option>" +
                "<option>Huyện Mỹ Lộc</option>" +
                "<option>Huyện Nam Trực</option>" +
                "<option>Huyện Nghĩa Hưng</option>" +
                "<option>Huyện Vụ Bản</option>" +
                "<option>Huyện Xuân Trường</option>" +
                "<option>Huyện Ý Yên</option>"

            break;
        case 138:
            selectDistrict.innerHTML = "<option>Thành phố Tam Điệp</option>" +
                "<option>Huyện Gia Viễn</option>" +
                "<option>Huyện Hoa Lư</option>" +
                "<option>Huyện Kim Sơn</option>" +
                "<option>Huyện Nho Quan</option>" +
                "<option>Huyện Yên Khánh</option>" +
                "<option>Thành phố Ninh Bình</option>" +
                "<option>Huyện Yên Mô</option>"

            break;
        case 139:
            selectDistrict.innerHTML = "<option>Thị xã Phú Thọ</option>" +
                "<option>Huyện Đoan Hùng</option>" +
                "<option>Huyện Hạ Hòa</option>" +
                "<option>Huyện Lâm Thao</option>" +
                "<option>Huyện Phù Ninh</option>" +
                "<option>Huyện Tân Sơn</option>" +
                "<option>Huyện Thanh Sơn</option>" +
                "<option>Huyện Thanh Thủy</option>" +
                "<option>Huyện Yên Lập</option>" +
                "<option>Thành phố Việt Trì</option>" +
                "<option>Huyện Thanh Ba</option>" +
                "<option>Huyện Cẩm Khê</option>" +
                "<option>Huyện Tam Nông</option>"

            break;
        case 140:
            selectDistrict.innerHTML = "<option>Thị xã Đông Triều</option>" +
                "<option>Thành phố Móng Cái</option>" +
                "<option>Huyện Cẩm Phả</option>" +
                "<option>Thành phố Cẩm Phả</option>" +
                "<option>Thành phố Uông Bí</option>" +
                "<option>Huyện Hải Hà</option>" +
                "<option>Huyện Đầm Hà</option>" +
                "<option>Huyện Vân Đồn</option>" +
                "<option>Huyện Hoành Bồ</option>" +
                "<option>Huyện Cô Tô</option>" +
                "<option>Huyện Bình Liêu</option>" +
                "<option>Huyện Tiên Yên</option>" +
                "<option>Huyện Ba Chẽ</option>" +
                "<option>Thị xã Quảng Yên</option>" +
                "<option>Thành phố Hạ Long</option>"

            break;
        case 141:
            selectDistrict.innerHTML = "<option>Huyện Đông Hưng</option>" +
                "<option>Huyện Kiến Xương</option>" +
                "<option>Huyện Quỳnh Phụ</option>" +
                "<option>Huyện Thái Thụy</option>" +
                "<option>Huyện Tiền Hải</option>" +
                "<option>Huyện Vũ Thư</option>" +
                "<option>Thành phố Thái Bình</option>" +
                "<option>Huyện Hưng Hà</option>"

            break;
        case 142:
            selectDistrict.innerHTML = "<option>Thị xã Buôn Hồ</option>" +
                "<option>Huyện Buôn Đôn</option>" +
                "<option>Huyện Cư Kuin</option>" +
                "<option>Huyện Cư M'gar</option>" +
                "<option>Huyện Ea H'leo</option>" +
                "<option>Huyện Ea Kar</option>" +
                "<option>Huyện Ea Súp</option>" +
                "<option>Huyện Krông Ana</option>" +
                "<option>Huyện Krông Bông</option>" +
                "<option>Huyện Krông Búk</option>" +
                "<option>Huyện Krông Năng</option>" +
                "<option>Huyện Krông Pắk</option>" +
                "<option>Huyện Lắk</option>" +
                "<option>Huyện M'Đrắk</option>" +
                "<option>Thành phố Buôn Mê Thuột</option>"

            break;
        case 143:
            selectDistrict.innerHTML = "<option>Thị xã Ngã Bảy</option>" +
                "<option>Huyện Long Mỹ</option>" +
                "<option>Huyện Phụng Hiệp</option>" +
                "<option>Huyện Vị Thủy</option>" +
                "<option>Thành phố Vị Thanh</option>" +
                "<option>Thị xã Long Mỹ</option>" +
                "<option>Huyện Châu Thành</option>" +
                "<option>Huyện Châu Thành A</option>"

            break;
        case 144:
            selectDistrict.innerHTML = "<option>Thị xã Chí Linh</option>" +
                "<option>Huyện Bình Giang</option>" +
                "<option>Huyện Cẩm Giàng</option>" +
                "<option>Huyện Gia Lộc</option>" +
                "<option>Huyện Kim Thành</option>" +
                "<option>Huyện Kinh Môn</option>" +
                "<option>Huyện Nam Sách</option>" +
                "<option>Huyện Ninh Giang</option>" +
                "<option>Huyện Thanh Hà</option>" +
                "<option>Huyện Thanh Miện</option>" +
                "<option>Huyện Tứ Kỳ</option>" +
                "<option>Thành phố Hải Dương</option>"

            break;
        case 145:
            selectDistrict.innerHTML = "<option>Huyện Bắc Sơn</option>" +
                "<option>Huyện Bình Gia</option>" +
                "<option>Huyện Cao Lộc</option>" +
                "<option>Huyện Chi Lăng</option>" +
                "<option>Huyện Đình Lập</option>" +
                "<option>Huyện Hữu Lũng</option>" +
                "<option>Huyện Lộc Bình</option>" +
                "<option>Huyện Tràng Định</option>" +
                "<option>Huyện Văn Lãnh</option>" +
                "<option>Huyện Văn Quan</option>" +
                "<option>Thành phố Lạng Sơn</option>"

            break;
        case 146:
            selectDistrict.innerHTML = "<option>Huyện Bắc Hà</option>" +
                "<option>Huyện Bảo Thắng</option>" +
                "<option>Huyện Bảo Yên</option>" +
                "<option>Huyện Bát Xát</option>" +
                "<option>Huyện Mường Khương</option>" +
                "<option>Huyện Sapa</option>" +
                "<option>Huyện Si Ma Cai</option>" +
                "<option>Thành phố Lào Cai</option>" +
                "<option>Huyện Văn Bàn</option>"

            break;
        case 147:
            selectDistrict.innerHTML = "<option>Thị xã Nghĩa Lộ</option>" +
                "<option>Huyện Mù Cang Chải</option>" +
                "<option>Huyện Trạm Tấu</option>" +
                "<option>Huyện Trấn Yên</option>" +
                "<option>Huyện Văn Chấn</option>" +
                "<option>Huyện Văn Yên</option>" +
                "<option>Huyện Yên Bình</option>" +
                "<option>Huyện Lục Yên</option>" +
                "<option>Thành phố Yên Bái</option>"

            break;
        case 148:
            selectDistrict.innerHTML = "<option>Huyện Chiêm Hóa</option>" +
                "<option>Huyện Hàm Yên</option>" +
                "<option>Huyện Lâm Bình</option>" +
                "<option>Huyện Na Hang</option>" +
                "<option>Huyện Yên Sơn</option>" +
                "<option>Huyện Sơn Dương</option>" +
                "<option>Thành phố Tuyên Quang</option>"

            break;
        case 149:
            selectDistrict.innerHTML = "<option>Huyện Bắc Mê</option>" +
                "<option>Huyện Đồng Văn</option>" +
                "<option>Huyện Hoàng Su Phì</option>" +
                "<option>Huyện Mèo Vạc</option>" +
                "<option>Huyện Quản Bạ</option>" +
                "<option>Huyện Quang Bình</option>" +
                "<option>Huyện Vị Xuyên</option>" +
                "<option>Huyện Xín Mần</option>" +
                "<option>Huyện Yên Minh</option>" +
                "<option>Huyện Bắc Quang</option>" +
                "<option>Thành phố Hà Giang</option>"

            break;
        case 150:
            selectDistrict.innerHTML = "<option>Huyện Bảo Lạc</option>" +
                "<option>Huyện Bảo Lâm</option>" +
                "<option>Huyện Hạ Lang</option>" +
                "<option>Huyện Hà Quảng</option>" +
                "<option>Huyện Hòa An</option>" +
                "<option>Huyện Nguyên Bình</option>" +
                "<option>Huyện Phục Hòa</option>" +
                "<option>Huyện Quảng Uyên</option>" +
                "<option>Huyện Thạch An</option>" +
                "<option>Huyện Thông Nông</option>" +
                "<option>Huyện Trà Lĩnh</option>" +
                "<option>Huyện Trùng Khánh</option>" +
                "<option>Thành phố Cao Bằng</option>"

            break;
        case 151:
            selectDistrict.innerHTML = "<option>Thành phố Điện Biên Phủ</option>" +
                "<option>Thị xã Mường Lay</option>" +
                "<option>Huyện Điện Biên Đông</option>" +
                "<option>Huyện Mường Ảng</option>" +
                "<option>Huyện Mường Chà</option>" +
                "<option>Huyện Mường Nhé</option>" +
                "<option>Huyện Nậm Pồ</option>" +
                "<option>Huyện Tủa Chùa</option>" +
                "<option>Huyện Tuần Giáo</option>" +
                "<option>Huyện Điên Biên</option>"

            break;
        case 152:
            selectDistrict.innerHTML = "<option>Huyện Mai Sơn</option>" +
                "<option>Huyện Phù Yên</option>" +
                "<option>Huyện Mộc Châu</option>" +
                "<option>Huyện Sông Mã</option>" +
                "<option>Thành phố Sơn La</option>" +
                "<option>Huyện Bắc Yên</option>" +
                "<option>Huyện Mường La</option>" +
                "<option>Huyện Quỳnh Nhai</option>" +
                "<option>Huyện Sốp Cộp</option>" +
                "<option>Huyện Thuận Châu</option>" +
                "<option>Huyện Vân Hồ</option>" +
                "<option>Huyện Yên Châu</option>"

            break;
        case 153:
            selectDistrict.innerHTML = "<option>Thành phố Hòa Bình</option>" +
                "<option>Huyện Cao Phong</option>" +
                "<option>Huyện Đà Bắc</option>" +
                "<option>Huyện Kim Bôi</option>" +
                "<option>Huyện Kỳ Sơn</option>" +
                "<option>Huyện Lạc Sơn</option>" +
                "<option>Huyện Lạc Thủy</option>" +
                "<option>Huyện Mai Châu</option>" +
                "<option>Huyện Yên Thủy</option>" +
                "<option>Huyện Tân Lạc</option>" +
                "<option>Huyện Lương Sơn</option>"

            break;
        case 154:
            selectDistrict.innerHTML = "<option>Huyện Mường Tè</option>" +
                "<option>Huyện Nậm Nhùn</option>" +
                "<option>Huyện Phong Thổ</option>" +
                "<option>Huyện Sìn Hồ</option>" +
                "<option>Huyện Tam Đường</option>" +
                "<option>Huyện Than Uyên</option>" +
                "<option>Thành phố Lai Châu</option>" +
                "<option>Huyện Tân Uyên</option>"

            break;
        case 155:
            selectDistrict.innerHTML = "<option>Huyện Bình Lục</option>" +
                "<option>Huyện Duy Tiên</option>" +
                "<option>Huyện Kim Bảng</option>" +
                "<option>Huyện Lý Nhân</option>" +
                "<option>Thị xã Phủ Lý</option>" +
                "<option>Huyện Thanh Liêm</option>"

            break;
        case 156:
            selectDistrict.innerHTML = "<option>Thị xã Cửa Lò</option>" +
                "<option>Thị xã Hoàng Mai</option>" +
                "<option>Thị xã Thái Hòa</option>" +
                "<option>Huyện Anh Sơn</option>" +
                "<option>Huyện Con Cuông</option>" +
                "<option>Huyện Đô Lương</option>" +
                "<option>Huyện Hưng Nguyên</option>" +
                "<option>Huyện Kỳ Sơn</option>" +
                "<option>Huyện Nam Đàn</option>" +
                "<option>Huyện Nghi Lộc</option>" +
                "<option>Huyện Nghĩa Đàn</option>" +
                "<option>Huyện Quế Phong</option>" +
                "<option>Huyện Quỳ Châu</option>" +
                "<option>Huyện Quỳ Hợp</option>" +
                "<option>Huyện Quỳnh Lưu</option>" +
                "<option>Huyện Tân Kỳ</option>" +
                "<option>Huyện Thanh Chương</option>" +
                "<option>Huyện Tương Dương</option>" +
                "<option>Huyện Yên Thành</option>" +
                "<option>Huyện Diễn Châu</option>" +
                "<option>Thành phố Vinh</option>"

            break;
        case 157:
            selectDistrict.innerHTML = "<option>Huyện Bác Ái</option>" +
                "<option>Huyện Ninh Hải</option>" +
                "<option>Huyện Ninh Phước</option>" +
                "<option>Huyện Ninh Sơn</option>" +
                "<option>Huyện Thuận Bắc</option>" +
                "<option>Huyện Thuận Nam</option>" +
                "<option>Thành phố Phan Rang - Tháp Chàm</option>"

            break;
        case 158:
            selectDistrict.innerHTML = "<option>Thành phố Phan Thiết</option>" +
                "<option>Huyện Tuy Phong</option>" +
                "<option>Thị xã Lagi</option>" +
                "<option>Huyện Đức Linh</option>" +
                "<option>Huyện Tánh Linh</option>" +
                "<option>Hàm Hàm Thuận Bắc</option>" +
                "<option>Huyện Phú Quý</option>" +
                "<option>Huyện Hàm Thuận Nam</option>" +
                "<option>Huyện Hàm Tân</option>"

            break;
        case 159:
            selectDistrict.innerHTML = "<option>Thành phố Bảo Lộc</option>" +
                "<option>Huyện Đơn Dương</option>" +
                "<option>Thành phố Đà Lạt</option>" +
                "<option>Huyện Lâm Hà</option>" +
                "<option>Huyện Đức Trọng</option>" +
                "<option>Huyện Di Linh</option>" +
                "<option>Huyện Đam Rông</option>" +
                "<option>Huyện Bảo Lâm</option>" +
                "<option>Huyện Đạ Huoai</option>" +
                "<option>Huyện Lạc Dương</option>" +
                "<option>Huyện Đạ Tẻh</option>"

            break;
        case 160:
            selectDistrict.innerHTML = "<option>Thị xã Gia Nghĩa</option>" +
                "<option>Huyện Đắk Mil</option>" +
                "<option>Huyện Krông Nô</option>" +
                "<option>Huyện Tuy Đức</option>" +
                "<option>Huyện Cát Tiên</option>" +
                "<option>Huyện Bắc Bình</option>" +
                "<option>Huyện Đắk Song</option>" +
                "<option>Huyện Đắk R'lấp</option>" +
                "<option>Huyện Đắk Glong</option>" +
                "<option>Huyện Cư Jút</option>"

            break;
        case 161:
            selectDistrict.innerHTML = "<option>Huyện Ba Tơ</option>" +
                "<option>Huyện Đức Phổ</option>" +
                "<option>Huyện Lý Sơn</option>" +
                "<option>Huyện Minh Long</option>" +
                "<option>Huyện Nghĩa Hành</option>" +
                "<option>Huyện Sơn Hà</option>" +
                "<option>Huyện Sơn Tây</option>" +
                "<option>Huyện Tây Trà</option>" +
                "<option>Huyện Trà Bồng</option>" +
                "<option>Thành phố Quảng Ngãi</option>" +
                "<option>Huyện Sơn Tịnh</option>" +
                "<option>Huyện  Bình Sơn</option>" +
                "<option>Huyện  Mộ Đức</option>" +
                "<option>Huyện  Tư Nghĩa</option>"

            break;
        case 162:
            selectDistrict.innerHTML = "<option>Thị xã Quảng Trị</option>" +
                "<option>Huyện Cam Lộ</option>" +
                "<option>Huyện Cồn Cỏ</option>" +
                "<option>Huyện Đa Krông</option>" +
                "<option>Huyện Gio Linh</option>" +
                "<option>Huyện Hải Lăng</option>" +
                "<option>Huyện Hướng Hóa</option>" +
                "<option>Huyện Vĩnh Linh</option>" +
                "<option>Thành phố Đông Hà</option>" +
                "<option>Huyện Triệu Phong</option>"

            break;
        case 163:
            selectDistrict.innerHTML = "<option>Thị xã Hương Trà</option>" +
                "<option>Huyện A Lưới</option>" +
                "<option>Huyện Nam Đông</option>" +
                "<option>Huyện Phong Điền</option>" +
                "<option>Huyện Phú Lộc</option>" +
                "<option>Huyện Quảng Điền</option>" +
                "<option>Thành phố Huế</option>" +
                "<option>Thị xã Hương Thủy</option>" +
                "<option>Huyện Phú Vang</option>"

            break;
        case 164:
            selectDistrict.innerHTML = "<option>Thành phố Bà Rịa</option>" +
                "<option>Thành phố Vũng Tàu</option>" +
                "<option>Huyện Châu Đức</option>" +
                "<option>Huyện Côn Đảo</option>" +
                "<option>Huyện Đất Đỏ</option>" +
                "<option>Huyện Long Điền</option>" +
                "<option>Huyện Tân Thành</option>" +
                "<option>Huyện Xuyên Mộc</option>"



            break;
        case 165:
            selectDistrict.innerHTML =
                "<option >Thành phố Bắc Kạn</option>" +
                "<option>Huyện Ba Bể</option>" +
                "<option >Huyện Bạch Thông</option>" +
                "<option>Huyện Chợ Đồn</option>" +
                "<option >Huyện Chợ Mới</option>" +
                "<option>Huyện Na Rì</option>" +
                "<option >Huyện Ngân Sơn</option>" +
                "<option >Huyện Pác Nặm</option>"

            break;
        case 166:
            selectDistrict.innerHTML =
                "<option>Thị xã Đồng Xoài</option>" +
                "<option >Thị xã Bình Long</option>" +
                "<option>Thị xã Phước Long</option>" +
                "<option >Huyện Bù Đăng</option>" +
                "<option >Huyện Bù Đốp</option>" +
                "<option >Huyện Bù Gia Mập</option>" +
                "<option >Huyện Chơn Thành</option>" +
                "<option>Huyện Đồng Phú</option>" +
                "<option >Huyện Hớn Quản</option>" +
                "<option >Huyện Lộc Ninh</option>" +
                "<option>Huyện Phú Riềng</option>"

            break;
        case 167:
            selectDistrict.innerHTML =
                "<option>Quận Cầu Giấy</option>" +
                "<option>Quận Hoàn Kiếm</option>" +
                "<option>Quận Đống Đa</option>"

            break;

    }
}

$('#submit-infor').onclick = function checkMissingField() {
    const form= document.forms['form-cus-infor']
    if (form.name.value == "" || form.email.value == "" || form.numberphone.value == "" || 
    form.city.value == "" || form.district.value== "" || 
    form.wards.value == "" || form.location.value =="") 
    {
        alert("Vui lòng nhập đầy đủ thông tin")
    } 
    else {
        confirm("Thông tin đã được lưu")
        $('.payment').classList.add('active')
        $('.deli-infor').classList.remove('active')
        $('.tab-2').classList.remove('active')
        $('.tab-3').classList.remove('inactive')
        $('.tab-3').classList.add('active')
    }
}

