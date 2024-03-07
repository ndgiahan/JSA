//BÀI 1: SỬ DỤNG MẢNG ĐA CHIỀU ĐỂ TẠO GIỎ TRÁI CÂY
var fruits = [
    ["Banana", 20],
    ["Apple", 15],
    ["Coconut", 2],
    ["Mango", 5]
]

//a. SỬ DỤNG CÁC METHOD ĐÃ HỌC ĐỂ THAO TÁC VỚI MẢNG VỪA TẠO
    // Method length: lấy ra độ dài của mảng:
    // console.log(fruits.length);

    //Method pop: xóa đi 1 phần tử cuối của mảng và in ra lại phần tử đã xóa đó
    // console.log(fruits.pop());

    //Method shift: xóa đi 1 phần tử đầu của mảng và in ra lại phần tử đã xóa đó
    // console.log(fruits.shift());


//b. SỬ DỤNG 3 KIỂU VÒNG LẶP ĐỂ IN RA LẦN LƯỢT GIỎ TRÁI CÂY, IN RA LẦN LƯỢT TÊN QUẢ VÀ SỐ LƯỢNG QUẢ
    //Vòng lặp While
    // var i=0;
    // while (i<fruits.length) {
    //     for (let j=0; j<1; j++) {
    //         console.log(fruits[i][j]+ " có "+ fruits[i][j+1] + " quả ");
    //     }
    //     i++;
    // }


    //Vòng lặp do while
    // var i =0;
    // do {
    //     for (let j=0; j<1; j++) {
    //         console.log(fruits[i][j] + " có " +fruits[i][j+1] );
    //     }
    //     i++;
    // } while (i<fruits.length)

    //Vòng lặp for
    // for (let i=0; i<fruits.length; i++) {
    //     for (let j=0; j<1; j++) {
    //         console.log(fruits[i][j]+ " có " + fruits[i][j+1]);
    //     }
    // }

    
//BÀI 2: CHO OBJECT
var myDog = {
    "name": "Ngáo",
    "legs": 4,
    "friends": "everything!"
}
//THAY ĐỔI TÊN CỦA Mydog là "Ngáo" thành "Husky"
delete myDog.name;
console.log(myDog);
myDog.newName = "Husky";
console.log(myDog);

//THÊM MỚI 1 PROPERTY CHO Mydog là Color, giá trị là Brown
myDog.color = "Brown";
console.log(myDog);
//XÓA ĐI PROPERTY Friends

delete myDog.friends
console.log(myDog);
