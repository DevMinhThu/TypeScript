function xem(x: number): number {
    return x;
}

function xem2(x: string): string {
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
function xem3<T>(x: T): T {
    return x;
}

console.log(xem3<string>('ABC'));
console.log(xem3<number>(68));

// === generic trong class ===
class MayTinh {
    static xemThongTin<T>(x: T[]): void {
        console.log(x);
    }
}

MayTinh.xemThongTin<string>(["a", "b", "c"])
MayTinh.xemThongTin<any>(["a", 3, "c"])