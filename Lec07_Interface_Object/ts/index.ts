let obj: any = {}
console.log(obj);

// interface
interface CourseInterface {
    name: string;
    time: number;
    /* 
    ?: đại diện cho việc, thuộc tính free có thể có hoặc không
    - tại Object obj1 không có thuộc tính free => ks
    */
    free?: boolean;
}

// obj1: thuộc về kiểu giá trị CourseInterface
let obj1: CourseInterface;
obj1 = {
    name: 'E',
    time: 68
}
console.log(obj1);

let obj2: CourseInterface = {
    name: 'A',
    time: 6886,
    free: false,
}
console.log(obj2);