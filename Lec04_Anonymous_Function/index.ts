var x = function (x: number, y: string): string {
    return `Hello ${x}, this is ${y}`;
}
console.log(x(20, 'Rocket'))

// cach 2:
var y: (x: number, y: string) => string = function (x, y) {
    return `Hello ${x}, this is ${y}`;
}
console.log(y(20, 'Rocket2'))