// === hàm trả về number
function sum(): number {
    return 68
}
console.log(sum())

// === hàm trả về string
function text(): string {
    return "This is string"
}
console.log(text())

// === hàm trả về array string
function mang(): string[] {
    return ['Thu', 'Minh', 'Vu']
}
console.log(mang())

// === hàm trả về array number
function arrNumber(): number[] {
    return [1, 2, 3]
}
console.log(arrNumber())

// === hàm trả về array any
function arrAny(): any {
    var hs = {
        maSV: 'abc1',
        hoTen: 'abc'
    }

    return hs
}
console.log(arrAny())

// === hàm có tham số mặc định
function user(name: string, age: number = 69): string {
    return `Name: ${name}, ${age} years`
}
// nếu không truyền tham số age => mặc định là 69
console.log(user("john"));

// === function rest params
function student(name: string, ...course: string[]): string {
    console.log(course);
    return name + " study " + course;
}
console.log(student("john", "JS", "NodeJS", "React"));
