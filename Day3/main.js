//Vòng lặp for

// var animals = [
//     "Elephants",
//     "Dog",
//     "Cat",
//     "Mouse"
// ]

// var teacher = {
//     "name": "Hân",
//     "class": "JSA03",
//     "sports": "Bóng rổ"
// }

//In ra các phần tử mảng animals
// for (let i=0; i<animals.length; i++) {
//     console.log(animals[i]);
// }

// Vòng lặp for in
// console.log(animals);
// for (i in animals) {
//     console.log(i);
// }

// console.log(teacher);
// for (j in teacher) {
//     console.log(j);
// }

//Vòng lặp for of
// console.log(animals);
// for (i of animals) {
//     console.log(i);
// }

var products = [
    {
        "name": "Milk",
        "price": 150000,
    },
    {
        "name": "Bread",
        "price": 100000,
    },
    {
        "name": "Rice",
        "price": 100000,
    },
    {
        "name": "Onion",
        "price": 100000,
    },
]

var inp = prompt("Nhập tên sản phẩm bạn muốn tìm: ")

function seach(nameInp) {
    for (let i=0; i<products.length; i++) {
        var nameProduct =(products[i].name);
        if (nameProduct== nameInp) {
            console.log("Có sản phẩm "+nameProduct+ " có giá là " +products[i].price);
        }
        else {
            console.log("Sản phẩm này không tồn tại");
        }
    }
}

seach(inp)
