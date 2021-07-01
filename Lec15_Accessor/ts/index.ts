class Hero {
    private _ten: string;
    private _tuoi: number;

    constructor(_ten: string, _tuoi: number) {
        this._ten = _ten;
        this._tuoi = _tuoi;
    }

    /* Get: nhận dữ liệu
    - hàm này giúp cho một đối tượng bên ngoài,
    có thể truy nhập được vào thuộc tính 
    của một class khi vẫn khai báo private
    */
    public get ten(): string {
        return this._ten;
    }

    /* Set: thay đổi giá trị

    */
    public set ten(value: string) {
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
var matKhau: string = "abcd"
class Nguoi {
    private _ten: string;

    get ten(): string {
        return this._ten;
    }

    set ten(val: string) {
        if (matKhau === "abcd") {
            this._ten = val;
        } else {
            this._ten = "Sai matKhau"
        }
    }
}

var Adam = new Nguoi();


matKhau = "a"
// sử dụng set
Adam.ten = "Adam Hihi"

// sử dụng get
console.log(Adam.ten);
