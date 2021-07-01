function xem(x) {
    return x;
}
function xem2(x) {
    return x;
}
/*
- Hàm thông thường khi gọi
=> ta chỉ được truyền đối số là giá trị mong muốn và đúng kiểu dữ liệu
*/
console.log(xem(100));
/*
- Đối với hàm Generic => cho phép ta truyền cả giá trị và kiểu dữ liệu của tham số đó
T: là bất cứ kiểu dữ liệu nào truyền vào cũng được
*/
// === Generic trong function ===
function xem3(x) {
    return x;
}
console.log(xem3('ABC'));
console.log(xem3(68));
// === generic trong class ===
class MayTinh {
    static xemThongTin(x) {
        console.log(x);
    }
}
MayTinh.xemThongTin(["a", "b", "c"]);
MayTinh.xemThongTin(["a", 3, "c"]);
