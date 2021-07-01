function xem(motNguoi) {
    console.log(`Xin chao ${motNguoi.ten} năm nay bạn ${motNguoi.tuoi} à?`);
}
xem({ tuoi: 40, ten: 'abc' });
class Tuong {
    xemTuong() {
        console.log('Azu');
    }
    donKiNang(mau) {
        return "Don ki nang";
    }
    bienVe() {
        console.log("Bien ve");
    }
}
