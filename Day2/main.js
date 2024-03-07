/*1. GIỚI THIỆU VỀ 3 VÒNG LẶP CƠ BẢN
    - 1a. VÒNG LẶP WHILE: lặp với số lần không biết trước. Xét điều kiện trong ngoặc tròn, 
                        nếu đúng thì đoạn code trong ngoặc nhọn mới được thực thi
*/
//VD: In ra các số từ 1 đến 5 (theo cách thông thường)
/*console.log("Số 1");
console.log("Số 2");
console.log("Số 3");
console.log("Số 4");*/
//VD: In ra các số từ 1 đến 5 (theo cách sử dụng vòng lặp while)
/*var i=1;
while (i<=5) {
    console.log("Số " +i);
    i++;
}*/



/*- 1b. VÒNG LẶP DO WHILE: lặp với số lần không biết trước. 
                            Thực thi đoạn code trong ngoặc nhọn trước, sau đó xét điều kiện trong ngoặc tròn, 
                            nếu đúng thì đoạn code trong ngoặc nhọn tiếp tục được thực thi */
//VD: In ra các số từ 1 đến 5 (theo cách sử dụng vòng lặp do while)
    /*var i=1;
    do {
        console.log("Số "+i);
        i++;
    } while (i<=10)*/


/*SỰ KHÁC NHAU CỦA WHILE VÀ DO WHILE:
    - Đối với while: xét điều kiện trong ngoặc tròn, nếu đúng thì code trong ngoặc nhon mới được thực thi.
    - Đối với do while: thực thi code trong ngoặc nhọn trước, sau đó mới xét điều kiện trong ngoặc tròn,
                        nếu đúng thì đoạn code trong ngoặc nhọn sẽ được thực thi tiếp
                        => đoạn code trong ngoặc nhọn sẽ được thực thi ít nhất 1 lần*/
// VD: cho y =0 nếu y <0 thì in ra dòng "Hello" (dùng vòng lặp while)    
/*var y=0;
while (y<0) {
    console.log("Hello"); //Không trả ra kết quả vì y<0 là điệu kiện sai nên dòng code này không được thực thi
} */            

// VD: cho nếu y <0 thì in ra dòng "Hello" (dùng vòng lặp do hile) 
/*do {
    console.log("Hello"); //Thực thi 1 lần rồi mới xét điều kiện
} while (y<0)*/



/*- 1c. VÒNG LẶP FOR: lặp với số lần biết trước.*/
//VD: In ra màn hình các số từ 1 đến 10
/*var inp=10;
for (let i=1; i<=10; i++) {
    console.log("Số "+ i);
} */



/* 2. MẢNG
    2a. TẠO MẢNG: có 2 cách*/
//Cách 1: Sử dụng dấu []
//VD: In ra tên các bạn trong lớp (cách thông thường)
/*var student1 = "Hải Đăng";
    var student2 = "Nhi";
    var student3 = "Tiến Long"; */    

//VD: In ra tên các bạn trong lớp (cách sử dụng mảng)
/*const students = [
        "Hải Đăng",// phần tử thứ nhất của mảng, vị trí thứ 0
        "Trần Nhi", // phần tử thứ hai của mảng, vị trí thứ 1
        "Tiến Long", //phần tử thứ ba của mảng, vị trí thứ 2
]
console.log (students) //In ra mảng*/

//Cách 2: Sử dụng dấu new Aray
/*const students = new Array (
        "Hải Đăng",// phần tử thứ nhất của mảng, vị trí thứ 0
        "Trần Nhi", // phần tử thứ hai của mảng, vị trí thứ 1
        "Tiến Long", //phần tử thứ ba của mảng, vị trí thứ 2
)*/

//2b. TRUY CẬP ĐẾN CÁC PHẦN TỬ CỦA MẢNG
//VD: In ra phần tử thứ 1 của mảng students
// console.log(students[1]); //gọi tên mảng, trỏ đến phần tử của mảng (sử dụng dấu [])

//2c. MỘT SỐ PHƯƠNG THỨC CỦA MẢNG: pop, shift, length,
//Phương thức pop(): bỏ đi phần tử cuối cùng cùa mảng, và in ra lại phần tử mà nó đã bỏ
//console.log (students.pop()); //Bỏ đi phần tử cuối cùng trong mảng students là "Tiến Long" và in ra lại phần tử mà nó đã bó - "Tiến Long"

//Phương thức shift(): bỏ đi phần tử đầu tiên cùa mảng, và in ra lại phần tử mà nó đã bỏ
//console.log(students.shift()); //Bỏ đi phần tử đầu tiên của mảng students là Hải Đăng và in ra lại phần tử mà nó đã bỏ "Hải Đăng"

//Phương thức lenght: Trả về độ dài của mảng
//console.log(students.length) //Trả về độ di của mảng students là 3 phần tử


//2d. MẢNG ĐA CHIỀU
//Cách tạo mảng đa chiều và truy cập đến phần tử của mảng
//VD: tạo mảng chứa thông tin của học sinh lớp mình
/*const infomations = [
        ["Hải Đăng", "JSB03"], //Phần tử thứ nhất của mảng informations, vị trí thứ 0
        ["Nguyên Khôi", "JSB02"], //Phần tử thứ hai của mảng informations, vị trí thứ 1
        ["Phúc", "JSB03"], //Phần tử thứ ba của mảng informations, vị trí thứ 2
        ["Trần Nhi", "JSB01"],
    ]
    console.log(infomations); // in ra mảng
    console.log(infomations[0][1]); //In ra "JSB03",
    console.log(infomations[0][2][1]);
    console.log(infomations[0][0]+ " học lớp "+infomations[0][1]); //In ra câu "Hải Đăng học lớp JSB03" */


/*3. OBJECT: ĐỐI TƯỢNG
    3a. Tạo object
*/
//Cách 1: Sử dụng dấu {}
/*const students = {
    name: "Hải Đăng", //name trong đối tượng gọi là key, "Hải Đăng" trong đối tượng gọi là value, cả dòng 115 gọi là thuộc tính
    class: "JSA",
    language: ["Anh", "Việt"]
}*/

//3b. Truy cập đến thuộc tính của đối tượng
// console.log(students.name); //kết quả ra "Hải Đăng"
// console.log(students.language[0]); //kết quả ra "Anh"

//Cách 2: Sử dụng new Object
// Tham khảo: https://viblo.asia/p/doi-tuong-object-trong-javascript-63vKjn6dK2R 





