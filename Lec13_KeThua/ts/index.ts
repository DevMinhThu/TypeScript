class Tuong {
    ten: string;
    moTa: string;
    kyNang: string[];

    constructor(ten: string, moTa: string, kyNang: string[]) {
        this.ten = ten;
        this.moTa = moTa;
        this.kyNang = kyNang;
    }

    hienThi(): string {
        var kn: string = ''
        for (let i = 0; i < this.kyNang.length; i++) {
            kn += this.kyNang[i];
            kn += " | ";
        }
        return `
        Ten: ${this.ten}, 
        Mo ta: ${this.moTa}, 
        Kỹ Năng: ${kn}`
    }
}

// kế thừa
class SatThu extends Tuong {
    skillSatThu: string;

    constructor(ten: string, moTa: string, kyNang: string[], skillSatThu: string) {
        super(ten, moTa, kyNang);
        this.skillSatThu = skillSatThu;
    }

    /* 
    - nếu tên hàm của lớp con cùng tên với hàm của lớp cha
    => nó sẽ ghi đè lại hàm của lớp cha
     */
    show(): string {
        var kn: string = ''
        for (let i = 0; i < this.kyNang.length; i++) {
            kn += this.kyNang[i];
            kn += " | ";
        }
        return `
        Ten: ${this.ten}, 
        Mo ta: ${this.moTa}, 
        Kỹ Năng: ${kn},
        Skill SatThu: ${this.skillSatThu}`
    }
}

let rocket = new Tuong("AAA", "Good", ["run", "jump", 'box']);
console.log(rocket.hienThi());

// sử dụng lớp đi kế thừa
var talon = new SatThu("Talon", "abc", ["kill", "down", "hhh"], "Kỹ năng riêng")
console.log(talon.hienThi());
console.log(talon.show());