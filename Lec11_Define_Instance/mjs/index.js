// class là bản thiết kế
var nhanVat = /** @class */ (function () {
    // để tạo ra instance
    function nhanVat(ten, slogan, hp) {
        this.ten = ten;
        this.slogan = slogan;
        this.hp = hp;
    }
    // phương thức
    nhanVat.prototype.hienThi = function () {
        return "This is " + this.ten + ". Slogan: " + this.slogan + ". Hp: " + this.hp;
    };
    return nhanVat;
}());
var nhanVat1 = new nhanVat('Logan', 'aaa', 68);
console.log(nhanVat1.hienThi());
// luyện tập
var DienThoai = /** @class */ (function () {
    function DienThoai(ten, gia, sao, mauSac) {
        this.ten = ten;
        this.gia = gia;
        this.sao = sao;
        this.mauSac = mauSac;
    }
    DienThoai.prototype.hienThi = function () {
        return this.gia + ", " + this.ten + ", " + this.sao;
    };
    return DienThoai;
}());
var sp1 = new DienThoai('Iphone', 68, 5, ['red', 'green', 'yellow']);
console.log(sp1.hienThi());
// Bài tập class và enum
// enum được đánh số tăng dần
var state;
(function (state) {
    state[state["Create"] = 10] = "Create";
    state[state["Processing"] = 11] = "Processing";
    state[state["Finished"] = 12] = "Finished";
})(state || (state = {}));
var CongViec = /** @class */ (function () {
    function CongViec(id, name, status) {
        this.id = id;
        this.name = name;
        this.status = status;
    }
    CongViec.prototype.showStatus = function () {
        return "Id: " + this.id + " - Ten: " + this.name + " - Status: " + this.status;
    };
    return CongViec;
}());
var cv1 = new CongViec(1, "React", state.Processing);
console.log(cv1.showStatus());
