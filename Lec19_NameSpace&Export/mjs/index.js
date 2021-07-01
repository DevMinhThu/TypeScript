// name space và export
var Adroid;
(function (Adroid) {
    // khai báo String -> bị trùng với keyword
    // nhưng đặt trong module => không bị lỗi.
    class String {
    }
    Adroid.String = String;
    class Number {
    }
})(Adroid || (Adroid = {}));
var coca = new Adroid.String();
