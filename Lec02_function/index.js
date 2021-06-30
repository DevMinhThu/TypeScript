// === hàm trả về number
function sum() {
    return 68;
}
console.log(sum());
// === hàm trả về string
function text() {
    return "This is string";
}
console.log(text());
// === hàm trả về array string
function mang() {
    return ['Thu', 'Minh', 'Vu'];
}
console.log(mang());
// === hàm trả về array number
function arrNumber() {
    return [1, 2, 3];
}
console.log(arrNumber());
// === hàm trả về array any
function arrAny() {
    var hs = {
        maSV: 'abc1',
        hoTen: 'abc'
    };
    return hs;
}
console.log(arrAny());
// === hàm có tham số mặc định
function user(name, age) {
    if (age === void 0) { age = 69; }
    return "Name: " + name + ", " + age + " years";
}
// nếu không truyền tham số age => mặc định là 69
console.log(user("john"));
// === function rest params
function student(name) {
    var course = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        course[_i - 1] = arguments[_i];
    }
    console.log(course);
    return name + " study " + course;
}
console.log(student("john", "JS", "NodeJS", "React"));
