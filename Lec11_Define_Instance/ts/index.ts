// class là bản thiết kế
class nhanVat {
    ten: string;
    slogan: string;
    hp: number;

    // để tạo ra instance
    constructor(ten: string, slogan: string, hp: number) {
        this.ten = ten;
        this.slogan = slogan;
        this.hp = hp;
    }

    // phương thức
    hienThi() {
        return `This is ${this.ten}. Slogan: ${this.slogan}. Hp: ${this.hp}`
    }
}

var nhanVat1 = new nhanVat('Logan', 'aaa', 68);
console.log(nhanVat1.hienThi());

// luyện tập
class DienThoai {
    ten: string;
    gia: number;
    sao: number;
    mauSac: string[];

    constructor(ten: string, gia: number, sao: number, mauSac: string[]) {
        this.ten = ten;
        this.gia = gia;
        this.sao = sao;
        this.mauSac = mauSac;
    }

    hienThi() {
        return `${this.gia}, ${this.ten}, ${this.sao}`
    }
}

var sp1 = new DienThoai('Iphone', 68, 5, ['red', 'green', 'yellow']);
console.log(sp1.hienThi());

// Bài tập class và enum
// enum được đánh số tăng dần
enum state {
    Create = 10,
    Processing,
    Finished,
}

class CongViec {
    id: number;
    name: string;
    status: state;

    constructor(id: number, name: string, status: state) {
        this.id = id;
        this.name = name;
        this.status = status;
    }

    showStatus() {
        return `Id: ${this.id} - Ten: ${this.name} - Status: ${this.status}`;
    }
}

let cv1 = new CongViec(1, "React", state.Processing)
console.log(cv1.showStatus());
