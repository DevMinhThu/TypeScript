enum state {
    Create = 10,
    Processing,
    Finished,
}

class CongViec {
    static id: number = 68;
    name: string = "Cooking";
    status: state;

    constructor(id: number, name: string, status: state) {
        this.id = id;
        this.name = name;
        this.status = status;
    }

    showInfo() {
        return `Id: ${this.id} - Ten: ${this.name} - Status: ${this.status}`;
    }
}

let cv1 = new CongViec(1, "React", state.Processing)
// sử dụng đối tượng để truy xuất
console.log(cv1.name);

// không sử dụng đối tượng để truy xuất. sử dụng tên class.thuoc tính hoặc phương thức
console.log(CongViec.id);

// static giúp không cần tạo instance (hay đối tượng)
// mà vẫn sử dụng được các phương thức và thuộc tính.