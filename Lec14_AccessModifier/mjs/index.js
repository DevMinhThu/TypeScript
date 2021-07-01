class KhoaHoc {
    constructor(id, ten, doDai) {
        this.id = id;
        this.ten = ten;
        this.doDai = doDai;
    }
    xemKhoaHoc() {
        console.log(this.ten);
        console.log(`Id: ${this.id}, Ten: ${this.ten}, Do Dai: ${this.doDai}`);
    }
}
class KhoaHocLapTrinh extends KhoaHoc {
    constructor(id, ten, doDai, fileDinhkem) {
        super(id, ten, doDai);
        this.fileDinhkem = fileDinhkem;
    }
    xemKhoaHoc() {
        super.xemKhoaHoc();
        console.log('File dinh kem: ' + this.fileDinhkem);
    }
    test() {
        // truy nhập thuộc tính tên từ bên trong class con
        console.log(this.ten);
    }
}
// === public ===
// test trong class
let khoa01 = new KhoaHoc(8, "react", 10);
console.log(khoa01.ten); // truy nhập từ bên ngoài class
console.log(khoa01.xemKhoaHoc()); // truy nhập từ bên trong class, log ra tên
// class con
let khoa02 = new KhoaHocLapTrinh(9, 'JS', 13, 'a.zip');
khoa02.test();
