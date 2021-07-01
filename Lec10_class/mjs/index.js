// class là bản thiết kế
var nhanVat = /** @class */ (function () {
    // để tạo ra instance
    function nhanVat(ten, slogan, hp) {
        this.ten = ten;
        this.slogan = slogan;
        this.hp = hp;
    }
    // phương thức
    nhanVat.prototype.chay = function () { };
    return nhanVat;
}());
