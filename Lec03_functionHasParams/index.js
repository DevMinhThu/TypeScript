var x;
var y;
var tbc;
x = 10;
y = 15;
tbc = (x + y) / 2;
console.log("TBC: ", tbc);
// function có tham số
function trungBinhCong(x, y) {
    return (x + y) / 2;
}
console.log("Use func: ", trungBinhCong(2, 3));
// function có tham số
function trungBinhCong2(x, y) {
    var tbc = (x + y) / 2;
    console.log("TBC use func void: ", tbc);
}
console.log(trungBinhCong2(1, 2));
