//Tạo mảng gồm 9 sản phẩm
var products = [
    {
        "name": "Rice",
        "price": 100000,
    },
    {
        "name": "Onion",
        "price": 10000,
    },
    {
        "name": "Milk",
        "price": 70000,
    },
    {
        "name": "Coffee",
        "price": 50000,
    },
    {
        "name": "Snack",
        "price": 10000,
    },
    {
        "name": "Potato",
        "price": 50000,
    },
    {
        "name": "Tomato",
        "price": 53000,
    },
    {
        "name": "Apple",
        "price": 75000,
    },
    {
        "name": "Milk",
        "price": 25000,
    },
]


var inp = document.getElementById("nameInp");
var slsp=0;
function search() {
    for (let i =0; i<products.length; i++) {
        var nameProduct = products[i].name;
        if (nameProduct == inp.value) {
            slsp++;
            var mess = "Have product " + products[i].name + " "+ products[i].price;
            document.getElementById("infoProduct").innerHTML = mess;
        }
    }
    if (slsp == 0) {
        document.getElementById("infoProduct").innerHTML = "Không có sản phẩm nào!"
    }
}

