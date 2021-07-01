// Interface cơ bản
interface Nguoi {
    tuoi: number;
    ten: string;
}

function xem(motNguoi: Nguoi): void {
    console.log(`Xin chao ${motNguoi.ten} năm nay bạn ${motNguoi.tuoi} à?`);
}

xem({ tuoi: 40, ten: 'abc' })

// Interface class
// quy định khi có một class tạo từ interface
// => class đó phải có tối thiểu đủ 
// các thuộc tính và các hàm của interface
interface tuongInterface {
    ten: string;
    mau: number;
    satThuong: number;
    moTa: string;

    xemTuong(): void;
    donKiNang(mau: number): any;
    bienVe(): void;
}

class Tuong implements tuongInterface {
    ten: string;
    mau: number;
    satThuong: number;
    moTa: string;

    xemTuong(): void {
        console.log('Azu');
    }

    donKiNang(mau: number): any {
        return "Don ki nang"
    }

    bienVe(): void {
        console.log("Bien ve");
    }
}