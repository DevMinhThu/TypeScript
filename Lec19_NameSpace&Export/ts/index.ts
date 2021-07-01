// name space và export
module Adroid {
    // khai báo String -> bị trùng với keyword
    // nhưng đặt trong module => không bị lỗi.
    export class String { }
    class Number { }
}

var coca = new Adroid.String()
