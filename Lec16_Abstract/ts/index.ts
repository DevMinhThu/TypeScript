/* 
- khai báo abstract cho class DienThoai
=> chắc chắn không sử dụng được class DienThoai
=> class DienThoai chỉ để kế thừa từ class khác
- Giống như bản vẽ nháp, mô tả tính năng của class
*/
abstract class DienThoai {
    ten: string;

    abstract guiTinNhan(): void;

    public goiDienThoai() {
        console.log("Goi dien thoai");
    }
}

// kế thừa
// chính xác hóa nó bằng cách tạo class  sử dụng lại bản thiết kế abstract
class Iphone extends DienThoai {
    guiTinNhan() {
        console.log("Gui tin nhan trong Iphone");

    }
}

var iphone = new Iphone();
iphone.guiTinNhan()
iphone.goiDienThoai()