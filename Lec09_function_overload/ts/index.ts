/* 
    - Khi overload phải 
    => thêm trường hợp function funcABC(x: any): any{}
*/
function funcABC(x: string): number;
function funcABC(x: number): string;
function funcABC(x: any): any {
    if (typeof x === "string") {
        return 100;
    } else if (typeof x === "number") {
        return "abc";
    }
};
console.log(funcABC(12));
console.log(funcABC("abc"));