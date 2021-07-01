var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Tuong = /** @class */ (function () {
    function Tuong(ten, moTa, kyNang) {
        this.ten = ten;
        this.moTa = moTa;
        this.kyNang = kyNang;
    }
    Tuong.prototype.hienThi = function () {
        var kn = '';
        for (var i = 0; i < this.kyNang.length; i++) {
            kn += this.kyNang[i];
            kn += " | ";
        }
        return "\n        Ten: " + this.ten + ", \n        Mo ta: " + this.moTa + ", \n        K\u1EF9 N\u0103ng: " + kn;
    };
    return Tuong;
}());
// kế thừa
var SatThu = /** @class */ (function (_super) {
    __extends(SatThu, _super);
    function SatThu(ten, moTa, kyNang, skillSatThu) {
        var _this = _super.call(this, ten, moTa, kyNang) || this;
        _this.skillSatThu = skillSatThu;
        return _this;
    }
    /*
    - nếu tên hàm của lớp con cùng tên với hàm của lớp cha
    => nó sẽ ghi đè lại hàm của lớp cha
     */
    SatThu.prototype.show = function () {
        var kn = '';
        for (var i = 0; i < this.kyNang.length; i++) {
            kn += this.kyNang[i];
            kn += " | ";
        }
        return "\n        Ten: " + this.ten + ", \n        Mo ta: " + this.moTa + ", \n        K\u1EF9 N\u0103ng: " + kn + ",\n        Skill SatThu: " + this.skillSatThu;
    };
    return SatThu;
}(Tuong));
var rocket = new Tuong("AAA", "Good", ["run", "jump", 'box']);
console.log(rocket.hienThi());
// sử dụng lớp đi kế thừa
var talon = new SatThu("Talon", "abc", ["kill", "down", "hhh"], "Kỹ năng riêng");
console.log(talon.hienThi());
console.log(talon.show());
