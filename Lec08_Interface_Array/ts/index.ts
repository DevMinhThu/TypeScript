let course: string[] = ['a', 'b', 'c']
console.log(course);

// interface arr
interface CourseList {
    // chỉ số kiểu number, giá trị là string
    [index: number]: string
}
let course1: CourseList = ['a', 'b', 'c']
console.log(course1);
