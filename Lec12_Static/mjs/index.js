var state;
(function (state) {
    state[state["Create"] = 10] = "Create";
    state[state["Processing"] = 11] = "Processing";
    state[state["Finished"] = 12] = "Finished";
})(state || (state = {}));
var CongViec = /** @class */ (function () {
    function CongViec(id, name, status) {
        this.name = "Cooking";
        this.id = id;
        this.name = name;
        this.status = status;
    }
    CongViec.prototype.showInfo = function () {
        return "Id: " + this.id + " - Ten: " + this.name + " - Status: " + this.status;
    };
    CongViec.id = 68;
    return CongViec;
}());
var cv1 = new CongViec(1, "React", state.Processing);
// sử dụng đối tượng để truy xuất
console.log(cv1.name);
// không sử dụng đối tượng để truy xuất. sử dụng tên class.thuoc tính hoặc phương thức
console.log(CongViec.id);
// static giúp không cần tạo instance (hay đối tượng)
// mà vẫn sử dụng được các phương thức và thuộc tính.
