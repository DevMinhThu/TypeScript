function funcABC(x) {
    if (typeof x === "string") {
        return 100;
    }
    else if (typeof x === "number") {
        return "abc";
    }
}
;
console.log(funcABC(12));
console.log(funcABC("abc"));
