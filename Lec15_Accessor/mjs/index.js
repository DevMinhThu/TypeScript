class Hero {
    constructor(_ten, _tuoi) {
        this._ten = _ten;
        this._tuoi = _tuoi;
    }
    /* Get: nhận dữ liệu
    - hàm này giúp cho một đối tượng bên ngoài,
    có thể truy nhập được vào thuộc tính
    của một class khi vẫn khai báo private
    */
    get ten() {
        return this._ten;
    }
    /* Set: thay đổi giá trị

    */
    set ten(value) {
        this._ten = value;
    }
}
var zeus = new Hero('Zeus', 68);
/* Dùng hàm GET
- zeus.ten: là gọi tới hàm ten(), chứ không phải gọi tới thuộc tính ten của class
*/
console.log('Ten: ' + zeus.ten);
console.log('Tuoi: ' + zeus._tuoi);
// Dùng hàm SET
zeus.ten = "Zeus ABC";
console.log("After change name: ", zeus.ten);
// === Practice ===
var matKhau = "abcd";
class Nguoi {
    get ten() {
        return this._ten;
    }
    set ten(val) {
        if (matKhau === "abcd") {
            this._ten = val;
        }
        else {
            this._ten = "Sai matKhau";
        }
    }
}
var Adam = new Nguoi();
matKhau = "a";
// sử dụng set
Adam.ten = "Adam Hihi";
// sử dụng get
console.log(Adam.ten);
