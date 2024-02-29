/*1. GIỚI THIỆU VỀ 3 VÒNG LẶP CƠ BẢN
    - Vòng lặp while
*/
// console.log("Số 1");
// console.log("Số 2");
// console.log("Số 3");
// console.log("Số 4");
// var i=1;
// while (i<=10) {
//     console.log("Số " +i);
//     i++;
// }


//    - Vòng lặp do while
    // var i=1;
    // do {
    //     console.log("Số "+i);
    //     i++;
    // } while (i<=10)

    // sự khác nhau của while và do while
        // Đối với while: xét điều kiện rồi mới thực thi code
        // Đối với do while: thực thi code ít nhất 1 lần rồi mới xét điều kiện
            // var y=0;
            // while (y<0) {
            //     console.log("Hello"); //Không trả ra kết quả vì y<0 là điệu kiện sai nên dòng code này không được thực thi
            // }
            // do {
            //     console.log("Hello"); //Thực thi 1 lần rồi mới xét điều kiện
            // } while (y<0)
//    - Vòng lặp for
// var inp=10;
// for (let i=2; i<=10; i=i+2) {
//     console.log("Số "+ i);
// }
        // + for in: 
        // + for of:
/*
/* 2. Mảng
    - Tạo mảng: có 2 cách*/
    // var student1 = "Hải Đăng";
    // var student2 = "Nhi";
    // const students = [
    //     "Hải Đăng",// 1 phần tử của mảng
    //     "Trần Nhi",
    //     "Tiến Long",
    // ]
    // students.pop();
    // console.log(students.shift());
    // console.log(students);
    // for (let i=0; i<=2; i++) {
    //     console.log(students[i]);
    // }
    // console.log(students[0]);
    // console.log(students[1]);
    // console.log(students[2]);
// var i=0;
// while (i<3) {
    // console.log(students[i]);
//     i++;
// }

// do {
//     console.log(students[i]);
//     i++;
// } while (i<3)





    // Cách 1: sử dụng ngoặc vuông

    // const classes = new Array (
    //     "JSB",
    //     "JSA",
    //     "JSI"
    // )
    // console.log(classes);
//Cách 2: sử dụng đối tương Array

    // - Truy cập đến phần tử của mảng 
    // var i=0; //biến i là vị trí của các phần tử trong mảng
    // while (i<=2) {
    //     console.log(classes[i]);
    //     i++;
    // }

    //Mảng đa chiều
    const infomations = [
        ["Hải Đăng", 
        "JSB03",
        ["Anh","Việt"]
        ],
        ["Nguyên Khôi", "JSB02"],
        ["Phúc", "JSB03"],
        ["Trần Nhi", "JSB01"],
    ]
    // console.log(infomations);
    // console.log(infomations[0][1]);
    // console.log(infomations[0][2][1]);
    // console.log(infomations[0][0]+ " học lớp "+infomations[0][1]);

    // - Một số phương thức của mảng: length, pop, shift
// console.log("Độ dài của mảng này là: "+infomations.length);
/*3. Object
    - Tạo object
*/
const students = {
    name: "Hải Đăng",
    class: "JSA",
    language: ["Anh",{
        certificate1: "Toeic 750",
        certificate2: "Ielts 6.0"
    },
    "Việt"]
}
console.log(students.language[1].certificate2);
   // - Thuộc tính



